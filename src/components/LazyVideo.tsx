import { useEffect, useRef, useState } from "react";

type LazyVideoProps = Omit<
  React.VideoHTMLAttributes<HTMLVideoElement>,
  "src"
> & {
  src: string;
  rootMargin?: string;
};

const LazyVideo = ({
  src,
  rootMargin = "700px",
  autoPlay = true,
  muted = true,
  loop = true,
  playsInline = true,
  preload,
  ...props
}: LazyVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (!("IntersectionObserver" in window)) {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const currentVideo = videoRef.current;
        if (!currentVideo) return;

        if (entry.isIntersecting) {
          setShouldLoad(true);
          if (autoPlay) {
            currentVideo.play().catch(() => undefined);
          }
        } else {
          currentVideo.pause();
        }
      },
      { rootMargin, threshold: 0.05 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [autoPlay, rootMargin]);

  useEffect(() => {
    if (!shouldLoad || !autoPlay) return;
    videoRef.current?.play().catch(() => undefined);
  }, [autoPlay, shouldLoad]);

  return (
    <video
      ref={videoRef}
      src={shouldLoad ? src : undefined}
      autoPlay={autoPlay}
      muted={muted}
      loop={loop}
      playsInline={playsInline}
      preload={shouldLoad ? preload ?? "metadata" : "none"}
      {...props}
    />
  );
};

export default LazyVideo;
