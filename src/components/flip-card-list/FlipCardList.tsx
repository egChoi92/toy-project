import { FC, useState } from "react";
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
    console.log(`Clicked card ${index}`);
  };
  return (
    <S.CardList>
      {imageData.map((data, index) => (
        <S.Card key={index} onClick={() => handleClick(index)} isActive={active === index}>
          <S.FrontImageContainer>
            <S.Image src={data.frontImage.src} alt={data.frontImage.alt} />
          </S.FrontImageContainer>
          <S.BackImageContainer>
            <S.Image src={data.backImage.src} alt={data.backImage.alt} />
          </S.BackImageContainer>
        </S.Card>
      ))}
    </S.CardList>
  );
};

export default FlipCardList;
