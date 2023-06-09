import { useContext } from "react";
import { TopicDispatchContext } from "context/Context";
import styled from "styled-components";

const StyledInput = styled.input`
  padding: 10px 20px;
  border: 1px solid #dfdfdf;
  border-radius: 5px;
  background-color: #fafafa;
`;
const TopicSearch = () => {
  const { handleSearch } = useContext(TopicDispatchContext);
  return (
    <div>
      <StyledInput type="text" onChange={(e) => handleSearch(e.target.value)} />
    </div>
  );
};

export default TopicSearch;
