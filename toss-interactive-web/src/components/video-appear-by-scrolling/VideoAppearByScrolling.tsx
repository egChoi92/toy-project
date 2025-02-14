import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FC, useEffect, useRef } from "react";
import TextMoveUp from "../text-move-up/TextMoveUp";
import * as S from "./styles";

gsap.registerPlugin(ScrollTrigger);

interface VideoAppearByScrollingProps {
  videoSrc: string;
}

const VideoAppearByScrolling: FC<VideoAppearByScrollingProps> = ({ videoSrc }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    const text = textRef.current;

    if (!video || !container) return;

    const animateVideo = () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "bottom bottom",
          scrub: true,
        },
      });

      tl.fromTo(
        video,
        {
          scale: 2,
          opacity: 0,
          z: -500,
        },
        {
          scale: 1,
          opacity: 1,
          z: 0,
          ease: "back.in(4)",
          onComplete: () => {
            video.play();
          },
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
    <S.Container>
      <TextMoveUp
        text={
          <>
            대한민국 금융사기가
            <br />
            사라지는 그날까지
          </>
        }
      />
      <S.VideoContainer ref={containerRef}>
        <S.VideoWrapper>
          <S.Video ref={videoRef} src={videoSrc} muted loop playsInline />
        </S.VideoWrapper>
      </S.VideoContainer>
    </S.Container>
  );
};

export default VideoAppearByScrolling;
