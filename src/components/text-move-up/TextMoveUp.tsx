import { FC, ReactNode, useEffect, useRef, useState } from "react";
import * as S from "./styles";

interface TextMoveUpProps {
  text: ReactNode;
}

const TextMoveUp: FC<TextMoveUpProps> = ({ text }) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.5 });

    const container = containerRef.current;
    if (container) observer.observe(container);

    return () => {
      if (container) observer.unobserve(container);
    };
  }, []);
  return (
    <S.Container ref={containerRef}>
      <S.Text isVisible={isVisible}>{text}</S.Text>
    </S.Container>
  );
};

export default TextMoveUp;
