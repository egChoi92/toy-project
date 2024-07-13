import styled from "@emotion/styled";

export const Container = styled.div``;

export const Contents = styled.div`
  position: relative;
`;

export const Video = styled.video`
  width: 100%;
  height: 100%;
`;

export const TextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  opacity: 0;
`;

export const Text = styled.div`
  font-size: 30px;
  font-weight: 700;
  color: #fff;
  text-align: center;
  white-space: pre-wrap;
`;
