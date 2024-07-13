import styled from "@emotion/styled";

export const Container = styled.div`
  padding-bottom: 10vh;
`;

export const CardList = styled.div`
  display: flex;
  align-self: end;
  gap: 20px;
  height: auto;
  margin-top: 20vh;
  perspective: 1000px;
`;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive: boolean;
  isVisible: boolean;
}
export const Card = styled.button<ButtonProps>(
  ({ isActive, isVisible }) => `
    position: relative;
    width: 20vw;
    background-color: transparent;
    border: none;
    transform-style: preserve-3d;
    transition: transform 0.6s, opacity 0.6s;
    aspect-ratio: 5 / 7;
    cursor: pointer;
    &:hover {
      ${!isActive && "transform: rotateY(60deg)"};
    };
    ${isActive && "transform: rotateY(180deg)"};
    ${!isVisible && "opacity: 0; transform: rotate3d(1, 1, 1, 45deg)"};
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
