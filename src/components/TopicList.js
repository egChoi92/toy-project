import { useContext } from "react";
import { TopicStateContext } from "context/Context";
import TopicItem from "components/TopicItem";
import styled from "styled-components";

const StyledList = styled.ul`
  display: grid;
	grid-template-columns: repeat(auto-fill, minmax(20%, auto));
	gap: 40px 20px;
  max-width: 1200px;
  margin: auto;
  padding: 20px;
`

export default function TopicList() {
  const topicData = useContext(TopicStateContext);

  return (
    <StyledList>
      {topicData.map((data) => (
        <TopicItem key={data.idx} {...data}/>
      ))}
    </StyledList>
  );
}
