import { memo } from "react";
import { TopicDispatchContext, TopicStateContext } from "context/Context";
import { useMemoContext } from "hooks/useMemoContext";
import styled from "styled-components";

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
    value: "전체",
    title: "전체",
  },
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

const Component = ({ selectedFilter, handleFilter }) => {
  return (
    <StyledFilterList>
      {FilterList.map((item, index) => (
        <StyledFilterItem key={index}>
          <StyledFilterButton
            type="button"
            className={item.value === selectedFilter ? "active" : ""}
            onClick={(e) => handleFilter(e.target.value)}
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
    const selectedFilter = useMemoContext(TopicStateContext, "selectedFilter");
    const handleFilter = useMemoContext(TopicDispatchContext, "handleFilter");
    const props = { selectedFilter, handleFilter };
    return <MemoComponent {...props} />;
  };
  return CustomMemoComponent;
};

const TopicFilter = MemoizedComponent(Component);

export default TopicFilter;
