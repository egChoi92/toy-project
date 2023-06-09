import { useContext } from "react";
import { TopicStateContext } from "context/Context";
import TopicItem from "components/TopicItem";
import styled from "styled-components";

const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20%, auto));
  gap: 40px 20px;
  margin-top: 20px;
`;

const TopicList = () => {
  const { topicData, selectedFilter } = useContext(TopicStateContext);

  const filterList = () => {
    if (!selectedFilter || selectedFilter === "전체") return topicData;
    return topicData.filter((data) => data.grade === selectedFilter);
  };

  const topicList = filterList();
  return (
    <StyledList>
      {topicList?.map((data) => (
        <TopicItem key={data.idx} {...data} />
      ))}
    </StyledList>
  );
};

export default TopicList;
