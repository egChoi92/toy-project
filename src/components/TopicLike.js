import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  position: absolute;
  right: 10px;
  bottom: 10px;
  width: 20px;
  height: 20px;
`;

export default function TopicLike({ idx }) {
  const [liked, setLiked] = useState(localStorage.getItem(`liked_${idx}`) === 'true');

  useEffect(() => {
    localStorage.setItem(`liked_${idx}`, liked);
  }, [idx, liked]);

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  const iconName = liked? "icon_favourites_checked.svg" : "icon_favourites.svg";

  return (
    <StyledButton onClick={handleLikeClick}>
      <img src={`${process.env.PUBLIC_URL}/images/${iconName}`} alt="" />
    </StyledButton>
  );
}
