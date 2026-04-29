interface FadingVideoProps {
  src: string;
  className?: string;
  scale?: number;
  objectPosition?: string;
  /** @deprecated no longer used — videos loop natively */
  fadeDurationMs?: number;
}

/**
 * Single <video loop> for a perfectly seamless, zero-pause ambient background.
 */
const FadingVideo = ({
  src,
  className = "",
  scale = 1,
  objectPosition = "center",
}: FadingVideoProps) => {
  const style: React.CSSProperties = {
    transform: `scale(${scale})`,
    objectPosition,
  };

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
        style={style}
      />
    </div>
  );
};

export default FadingVideo;
