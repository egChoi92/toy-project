import styled from "@emotion/styled";

export const CardList = styled.div`
  display: flex;
  gap: 20px;
  perspective: 1000px;
`;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive: boolean;
}
export const Card = styled.button<ButtonProps>(
  ({ isActive }) => `
    position: relative;
    width: 20vw;
    background-color: transparent;
    border: none;
    transform-style: preserve-3d;
    transition: transform 0.6s;
    aspect-ratio: 5 / 7;
    cursor: pointer;
    &:hover {
      ${!isActive && "transform: rotateY(60deg)"};
    }
    ${isActive && "transform: rotateY(180deg)"}
  `
);

const ImageContainer = styled.div`
  position: absolute;
  top: 0;
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
