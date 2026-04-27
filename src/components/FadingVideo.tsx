import { useEffect, useRef } from "react";

interface FadingVideoProps {
  src: string;
  className?: string;
  scale?: number;
  objectPosition?: string;
  fadeDurationMs?: number;
}

/**
 * Two stacked <video> elements crossfaded with requestAnimationFrame
 * for a seamless, loop-less ambient background.
 */
const FadingVideo = ({
  src,
  className = "",
  scale = 1,
  objectPosition = "center",
  fadeDurationMs = 500,
}: FadingVideoProps) => {
  const videoARef = useRef<HTMLVideoElement>(null);
  const videoBRef = useRef<HTMLVideoElement>(null);
  const activeRef = useRef<"A" | "B">("A");
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const a = videoARef.current;
    const b = videoBRef.current;
    if (!a || !b) return;

    a.style.opacity = "1";
    b.style.opacity = "0";

    const startCrossfade = (from: HTMLVideoElement, to: HTMLVideoElement) => {
      to.currentTime = 0;
      const playPromise = to.play();
      if (playPromise) playPromise.catch(() => {});

      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / fadeDurationMs);
        from.style.opacity = String(1 - t);
        to.style.opacity = String(t);
        if (t < 1) {
          rafRef.current = requestAnimationFrame(tick);
        } else {
          from.pause();
          activeRef.current = activeRef.current === "A" ? "B" : "A";
        }
      };
      rafRef.current = requestAnimationFrame(tick);
    };

    const onEndedA = () => startCrossfade(a, b);
    const onEndedB = () => startCrossfade(b, a);

    a.addEventListener("ended", onEndedA);
    b.addEventListener("ended", onEndedB);

    a.play().catch(() => {});

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      a.removeEventListener("ended", onEndedA);
      b.removeEventListener("ended", onEndedB);
    };
  }, [src, fadeDurationMs]);

  const baseStyle: React.CSSProperties = {
    transform: `scale(${scale})`,
    objectPosition,
    transition: "opacity 0ms linear",
  };

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <video
        ref={videoARef}
        src={src}
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
        style={baseStyle}
      />
      <video
        ref={videoBRef}
        src={src}
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ ...baseStyle, opacity: 0 }}
      />
    </div>
  );
};

export default FadingVideo;
