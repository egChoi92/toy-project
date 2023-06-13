import TopicImage from 'components/TopicImage';
import TopicLike from './TopicLike';
import styled from "styled-components";

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
        <TopicImage imgPath={imgPath} alt={`${title}의 이미지`} />
        <TopicLike idx={idx}/>
      </StyledThumbnail>
      <StyledInformation>
        <StyledTitle>{title}</StyledTitle>
      </StyledInformation>
    </StyledItem>
  );
}
