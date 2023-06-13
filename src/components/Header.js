import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function Header({ children }) {
  return <StyledHeader>{children}</StyledHeader>;
}
