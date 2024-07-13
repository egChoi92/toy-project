import styled from "@emotion/styled";

export const Container = styled.div`
  height: 200vh;
  position: relative;
  perspective: 1000px;
  overflow: hidden;
`;

export const VideoWrapper = styled.div`
  position: sticky;
  top: 100%;
  height: 100vh;
  display: flex;
  align-items: bottom;
  justify-content: center;
  transform-style: preserve-3d;
`;

export const Video = styled.video`
  width: 80%;
`;
