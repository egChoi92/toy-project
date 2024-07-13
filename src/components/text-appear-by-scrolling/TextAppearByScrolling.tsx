import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FC, useEffect, useRef } from "react";
import LottieArrow from "../lottie/arrow/LottieArrow";
import * as S from "./styles";

gsap.registerPlugin(ScrollTrigger);

const TextAppearByScrolling: FC = () => {
  const containerRef = useRef(null);
  const contentsRef = useRef(null);
  const textRefs = useRef([]);

  const textData = [
    "대체 언제부터였을까요",
    "문자를 받으면 피싱부터 의심하고,\n중고거래할 땐 사기일까 불안해하고,",
    "계속되는 금융사기 뉴스에\n가족들 걱정이 일상이 되어버린,",
    "알아서 조심하라는 무책임이 만든 세상",
    "이제 토스가 당신과 함께 싸울게요",
  ];

  useEffect(() => {
    const container = containerRef.current;
    const contents = contentsRef.current;
    const text = textRefs.current;

    gsap.set(text, { autoAlpha: 0, y: 50 });
    gsap.set(contents, { transformPerspective: 1000 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "+=300%",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    text.forEach((text, index) => {
      tl.to(text, { autoAlpha: 1, y: 0, duration: 0.5 }).to(text, { autoAlpha: 0, y: -50, duration: 0.5 }, "+=0.5");
    });

    tl.to(contents, {
      duration: 1,
      scaleY: 0.8,
      scaleX: 0.9,
      y: "-30%",
      autoAlpha: 0,
      ease: "power2.inOut",
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <S.Container ref={containerRef}>
      <S.Contents ref={contentsRef}>
        <S.Video src="https://static.toss.im/assignment/main.mp4" muted loop playsInline autoPlay />

        {textData.map((text, index) => (
          <S.TextContainer key={index} ref={(el: never) => (textRefs.current[index] = el)} style={{}}>
            <S.Text>{text}</S.Text>
          </S.TextContainer>
        ))}
        <LottieArrow style={{ position: "absolute", left: "50%", bottom: "50px", width: "40px", height: "40px", transform: "translateX(-50%)" }} />
      </S.Contents>
    </S.Container>
  );
};

export default TextAppearByScrolling;
