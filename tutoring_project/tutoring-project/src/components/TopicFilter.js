import { memo } from "react";
import { TopicDispatchContext, TopicStateContext } from "context/Context";
import { useMemoContext } from "hooks/useMemoContext";
import styled from "styled-components";
import { topicFetch } from "api/topicFetch";

const StyledFilterList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const StyledFilterItem = styled.li`
  margin-left: 10px;
  &:first-of-type {
    margin-left: 0;
  }
`;
const StyledFilterButton = styled.button`
  padding: 10px 20px;
  border: 1px solid #dfdfdf;
  border-radius: 5px;
  background-color: #fafafa;
  &.active {
    background-color: ${({ theme }) => theme.color.primaryColor};
    color: #fff;
  }
`;
const FilterList = [
  {
    value: "입문",
    title: "입문",
  },
  {
    value: "초급",
    title: "초급",
  },
  {
    value: "중급",
    title: "중급",
  },
  {
    value: "중고급",
    title: "중고급",
  },
  {
    value: "고급",
    title: "고급",
  },
];

const Component = ({pagination, selectedFilter, handleFilter }) => {
  const handleClick = async (e) => {
    const value = e.target.value;
    
    const filterPagination = {
      ...pagination,
      [value]: 1,
    };

    const data = await topicFetch(1, value)
    handleFilter(data, value, filterPagination)
  }

  return (
    <StyledFilterList>
      {FilterList.map((item, index) => (
        <StyledFilterItem key={index}>
          <StyledFilterButton
            type="button"
            className={item.value === selectedFilter ? "active" : ""}
            onClick={e => handleClick(e)}
            value={item.value}
          >
            {item.title}
          </StyledFilterButton>
        </StyledFilterItem>
      ))}
    </StyledFilterList>
  );
};

const MemoizedComponent = (myComponent) => {
  const MemoComponent = memo(myComponent);
  const CustomMemoComponent = () => {
    const pagination = useMemoContext(TopicStateContext, "pagination");
    const selectedFilter = useMemoContext(TopicStateContext, "selectedFilter");
    const handleFilter = useMemoContext(TopicDispatchContext, "handleFilter");
    
    const props = { pagination, selectedFilter, handleFilter };
    return <MemoComponent {...props} />;
  };
  return CustomMemoComponent;
};

const TopicFilter = MemoizedComponent(Component);

export default TopicFilter;
