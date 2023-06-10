import { memo, useContext } from "react";
import { TopicStateContext } from "context/Context";
import TopicItem from "components/TopicItem";
import styled from "styled-components";
import { useMemoContext } from "hooks/useMemoContext";
import { useEffect } from "react";
import { useMemo } from "react";

const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px 20px;
  margin-top: 20px;
`;

const Components = ({ topicData, selectedFilter, searchWord }) => {
  const filteredList = useMemo(() => {
    if (!selectedFilter || selectedFilter === "전체") return topicData;
    const filterList = topicData.filter((data) => data.grade === selectedFilter);
    return filterList;
  }, [selectedFilter])
  
  const searchedList = useMemo(() => {
    if (searchWord?.match(/^[가-힣a-zA-Z\s]+$/)) {
      return filteredList.filter((data) => {
        const title = data.title.toLowerCase();
        return title.includes(searchWord)
      });
    } else {
      return filteredList;
    }
  }, [selectedFilter, searchWord])
  const topicList = searchedList;
  return (
    <StyledList>
      {topicList?.map((data) => (
        <TopicItem key={data.idx} {...data} />
      ))}
    </StyledList>
  );
};

const MemoizedComponents = (myComponent) => {
  const MemoComponent = memo(myComponent);
  const CustomMemoComponent = () => {
    const topicData = useMemoContext(TopicStateContext, "topicData");
    const selectedFilter = useMemoContext(TopicStateContext, "selectedFilter");
    const searchWord = useMemoContext(TopicStateContext, "searchWord");

    const props = { topicData, selectedFilter, searchWord };
    return <MemoComponent {...props} />;
  };
  return CustomMemoComponent;
};
const TopicList = MemoizedComponents(Components);

export default TopicList;
