import { memo, useMemo } from "react";
import { TopicStateContext } from "context/Context";
import { useMemoContext } from "hooks/useMemoContext";
import { useDebounce } from "hooks/useDebounce";
import TopicItem from "components/TopicItem";
import styled from "styled-components";

const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px 20px;
  margin-top: 20px;
`;

const Components = ({ topicData, selectedFilter, searchWord }) => {
  const filteredList = useMemo(() => {
    const filterList = topicData?.filter((data) => data.grade === selectedFilter);
    return filterList;
  }, [selectedFilter, topicData]);

  const debounceSearchWord = useDebounce(searchWord, 300);

  const searchedList = useMemo(() => {
    if (debounceSearchWord?.match(/^[가-힣a-zA-Z\s]+$/)) {
      return filteredList.filter((data) => {
        const title = data.title.toLowerCase();
        return title.includes(debounceSearchWord.toLowerCase());
      });
    } else {
      return filteredList;
    }
  }, [filteredList, debounceSearchWord]);

  const topicList = searchedList;

  return (
    <>
      <StyledList>
        {topicList?.map((data) => {
          return <TopicItem key={data.idx} {...data} />;
        })}
      </StyledList>
    </>
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
