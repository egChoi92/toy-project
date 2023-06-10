import styled from "styled-components";
import TopicLike from './TopicLike';

const StyledItem = styled.li``;
const StyledThumbnail = styled.div`
  position: relative;
  border: 1px solid #dfdfdf;
`;
const StyledInformation = styled.div`
  display: flex;
  justify-content: space-between;
`;
const StyledTitle = styled.p`
  margin-top: 10px;
  font-size: 14px;
  word-break: keep-all;
`;

export default function TopicItem({ idx, imgPath, title }) {
  return (
    <StyledItem>
      <StyledThumbnail>
        <img src={imgPath} alt="" />
        <TopicLike idx={idx}/>
      </StyledThumbnail>
      <StyledInformation>
        <StyledTitle>{title}</StyledTitle>
      </StyledInformation>
    </StyledItem>
  );
}
