import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface TextProps {
  isVisible: boolean;
}

export const Text = styled.div<TextProps>(
  ({ isVisible }) => `
    position: relative;
    font-size: 75px;
    font-weight: 700;
    opacity: 1;
    text-align: center;
    transform: translateY(0%);
    transition: opacity 1.4s, transform 1.4s;
    ${!isVisible && "opacity: 0; transform: translateY(100%)"};
`
);
