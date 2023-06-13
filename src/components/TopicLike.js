import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  position: absolute;
  right: 10px;
  bottom: 10px;
  width: 25px;
  height: 25px;
`;

export default function TopicLike({ idx }) {
  const [liked, setLiked] = useState(localStorage.getItem(`liked_${idx}`) === 'true');

  useEffect(() => {
    localStorage.setItem(`liked_${idx}`, liked);
  }, [idx, liked]);

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  const checkedState = liked? "checked" : "unchecked";

  return (
    <StyledButton onClick={handleLikeClick}>
      <img src={`${process.env.PUBLIC_URL}/images/icon_liked_${checkedState}.svg`} alt="" />
    </StyledButton>
  );
}
