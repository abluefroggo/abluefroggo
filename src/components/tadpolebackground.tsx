import { useEffect, useRef } from "react";

// 🔑 Paste your Pulsoid Access Token here
const PULSOID_TOKEN = "YOUR_PULSOID_ACCESS_TOKEN_HERE";
const WS_URL = `wss://ws.pulsoid.net/api/v1/data/realtime?access_token=${PULSOID_TOKEN}`;

interface Tadpole {
  x: number;
  y: number;
  speed: number;
  direction: 1 | -1;
  fontSize: number;
}

export const TadpoleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const heartRateRef = useRef<number>(0); // 0 = completely still

  // 1. Connect to Pulsoid's Official Free WebSocket Stream
  useEffect(() => {
    if (!PULSOID_TOKEN || PULSOID_TOKEN === "YOUR_PULSOID_ACCESS_TOKEN_HERE") {
      console.warn("Pulsoid token is missing.");
      return;
    }

    let socket: WebSocket | null = null;

    try {
      socket = new WebSocket(WS_URL);

      socket.onmessage = (event) => {
        try {
          const payload = JSON.parse(event.data);
          // Official WS payload format: { data: { heart_rate: 75 } }
          const hr = payload?.data?.heart_rate || payload?.data?.heartRate;
          if (typeof hr === "number") {
            heartRateRef.current = hr;
          }
        } catch (err) {
          console.error("Error parsing Pulsoid WS payload:", err);
        }
      };

      socket.onerror = (err) => {
        console.error("Pulsoid WS error:", err);
      };

      socket.onclose = () => {
        // Reset to 0 when disconnected or stream goes offline
        heartRateRef.current = 0;
      };
    } catch (e) {
      console.error("Could not initiate WebSocket:", e);
    }

    return () => {
      socket?.close();
    };
  }, []);

  // 2. Canvas Rendering Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const tadpoleCount = 30;
    const tadpoles: Tadpole[] = Array.from({ length: tadpoleCount }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      speed: 0.8 + Math.random() * 1.2,
      direction: Math.random() > 0.5 ? 1 : -1,
      fontSize: 14 + Math.random() * 6,
    }));

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const bpm = heartRateRef.current;
      const bpmMultiplier = bpm > 0 ? bpm / 60 : 0;

      tadpoles.forEach((t) => {
        // Move horizontally only if heart rate > 0
        if (bpmMultiplier > 0) {
          t.x += t.speed * t.direction * bpmMultiplier;

          if (t.x < -30) t.x = canvas.width + 30;
          if (t.x > canvas.width + 30) t.x = -30;
        }

        const asciiTadpole = t.direction === 1 ? "~>" : "<~";

        ctx.font = `${t.fontSize}px monospace`;
        ctx.fillStyle = "rgba(150, 150, 150, 0.4)";
        ctx.fillText(asciiTadpole, t.x, t.y);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
};
