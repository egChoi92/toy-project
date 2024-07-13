import styled from "@emotion/styled";

export const Container = styled.div`
  position: relative;
  height: 100vh;
`;

export const VideoContainer = styled.div`
  position: absolute;
  top: 0;
  perspective: 1000px;
`;

export const VideoWrapper = styled.div`
  display: flex;
  justify-content: center;
  transform-style: preserve-3d;
`;

export const Video = styled.video`
  width: 80%;
`;
