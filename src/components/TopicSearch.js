import { memo } from "react";
import { TopicDispatchContext } from "context/Context";
import styled from "styled-components";
import { useMemoContext } from "hooks/useMemoContext";

const StyledInput = styled.input`
  padding: 10px 20px;
  border: 1px solid #dfdfdf;
  border-radius: 5px;
  background-color: #fafafa;
`;
const Component = ({handleSearch}) => {
  return (
    <div>
      <StyledInput type="text" onChange={(e) => handleSearch(e.target.value)} />
    </div>
  );
};

const MemoizedComponent = (myComponent) => {
  const MemoComponent = memo(myComponent)
  const CustomMemoCompnent = () => {
    const handleSearch = useMemoContext(TopicDispatchContext, 'handleSearch')
    const props = { handleSearch }
    return <MemoComponent {...props} />
  }
  return CustomMemoCompnent;
}

const TopicSearch = MemoizedComponent(Component);

export default TopicSearch;
