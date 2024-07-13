import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FC, useEffect, useRef } from "react";
import * as S from "./styles";

gsap.registerPlugin(ScrollTrigger);

interface VideoAppearByScrollingProps {
  videoSrc: string;
}

const VideoAppearByScrolling: FC<VideoAppearByScrollingProps> = ({ videoSrc }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;

    if (!video || !container) return;

    const animateVideo = () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          markers: true,
        },
      });

      tl.fromTo(
        video,
        {
          y: 100,
          scale: 2,
          opacity: 0,
          z: -500,
        },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          z: 0,
          ease: "back.in(4)",
        }
      );

      return () => {
        tl.kill();
      };
    };

    const cleanup = animateVideo();

    return () => {
      cleanup();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <S.Container ref={containerRef}>
      <S.VideoWrapper>
        <S.Video ref={videoRef} src={videoSrc} muted loop playsInline />
      </S.VideoWrapper>
    </S.Container>
  );
};

export default VideoAppearByScrolling;
