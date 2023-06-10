import { memo, useContext } from "react";
import { TopicStateContext } from "context/Context";
import TopicItem from "components/TopicItem";
import styled from "styled-components";
import { useMemoContext } from "hooks/useMemoContext";

const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20%, auto));
  gap: 40px 20px;
  margin-top: 20px;
`;

const Components = ({topicData, selectedFilter}) => {
  
  const getList = () => {
    if (!selectedFilter || selectedFilter === "전체") return topicData;
    const filterList = topicData.filter((data) => data.grade === selectedFilter);
  
    return filterList;
  };
  const topicList = getList();
  return (
    <StyledList>
      {topicList?.map((data) => (
        <TopicItem key={data.idx} {...data} />
      ))}
    </StyledList>
  );
}

const MemoizedComponents = (myComponent) => {
  const MemoComponent = memo(myComponent);
  const CustomMemoComponent = () => { 
  const topicData = useMemoContext(TopicStateContext, 'topicData')
  const selectedFilter = useMemoContext(TopicStateContext, 'selectedFilter')

  const props = {topicData, selectedFilter};
    return <MemoComponent {...props}/>;
  }
  return CustomMemoComponent;
}
const TopicList = MemoizedComponents(Components);




export default TopicList;
