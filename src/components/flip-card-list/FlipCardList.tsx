import { FC } from "react";
import * as S from "./styles";

type FlipCard = {
  frontImage: { src: string; alt: string };
  backImage: { src: string; alt: string };
};

interface FlipCardListProps {
  imageData: FlipCard[];
}

const FlipCardList: FC<FlipCardListProps> = ({ imageData }) => {
  return (
    <S.CardList>
      {imageData.map((data) => (
        <S.Card>
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
