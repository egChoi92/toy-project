import styled from "styled-components";
import { TopicDispatchContext, TopicStateContext } from "context/Context";
import { useContext } from "react";

const StyledFilterList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`

const StyledFilterItem = styled.li`
  margin-left: 10px;
  &:first-of-type {
    margin-left: 0;
  }
`
const StyledFilterButton = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #eee;
  &.active {
    background-color: #6759ef;
    color: #fff;
  }
`
const FilterList = [
  {
    value: '전체',
    title: "전체"
  },
  {
    value: "입문",
    title: "입문"
  },
  {
    value: "초급",
    title: "초급"
  },
  {
    value: "중급",
    title: "중급"
  },
  {
    value: "중고급",    
    title: "중고급"
  },
  {
    value: "고급",
    title: "고급"
  },
];


export default function TopicFilter() {
  const { filter } = useContext(TopicStateContext);
  console.log('filter: ', filter);
  const { handleFilter } = useContext(TopicDispatchContext);
  return (
    <StyledFilterList>
      {FilterList.map((item, index) => (
        <StyledFilterItem key={index} >
          <StyledFilterButton 
            type="button"
            className={item.value === filter? "active" : ""} 
            onClick={(e) => handleFilter(e.target.value)} 
            value={item.value}>
            {item.title}
          </StyledFilterButton>
        </StyledFilterItem>
      ))}
    </StyledFilterList>
  );
}
