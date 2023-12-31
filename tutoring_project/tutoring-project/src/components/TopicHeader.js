import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function TopicHeader({ children }) {
  return <StyledHeader>{children}</StyledHeader>;
}
