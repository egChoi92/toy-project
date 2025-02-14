import { FC, useEffect, useRef, useState } from "react";
import TextMoveUp from "../text-move-up/TextMoveUp";
import * as S from "./styles";

type FlipCard = {
  frontImage: { src: string; alt: string };
  backImage: { src: string; alt: string };
};

interface FlipCardListProps {
  imageData: FlipCard[];
}

const FlipCardList: FC<FlipCardListProps> = ({ imageData }) => {
  const [active, setActive] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActive(index);
  };

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
    <S.Container>
      <TextMoveUp
        text={
          <>
            금융이 불안했던 순간들,
            <br />
            토스가 지켜드릴게요
          </>
        }
      />
      <S.CardList ref={containerRef}>
        {imageData.map((data, index) => (
          <S.Card key={index} onClick={() => handleClick(index)} isActive={active === index} isVisible={isVisible}>
            <S.FrontImageContainer>
              <S.Image src={data.frontImage.src} alt={data.frontImage.alt} />
            </S.FrontImageContainer>
            <S.BackImageContainer>
              <S.Image src={data.backImage.src} alt={data.backImage.alt} />
            </S.BackImageContainer>
          </S.Card>
        ))}
      </S.CardList>
    </S.Container>
  );
};

export default FlipCardList;
