import styled from "@emotion/styled";

export const CardList = styled.div`
  display: flex;
  gap: 20px;
  perspective: 1000px;
`;

export const Card = styled.div`
  width: 20vw;
  aspect-ratio: 5 / 7;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s;
  &:hover {
    transform: rotateY(60deg);
  }
`;

const ImageContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`;

export const FrontImageContainer = styled(ImageContainer)`
  z-index: 2;
`;

export const BackImageContainer = styled(ImageContainer)`
  transform: rotateY(180deg);
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
