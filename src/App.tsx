import FlipCardList from "./components/flip-card-list/FlipCardList";
import TextAppearByScrolling from "./components/text-appear-by-scrolling/TextAppearByScrolling";
import VideoAppearByScrolling from "./components/video-appear-by-scrolling/VideoAppearByScrolling";

function App() {
  const imageData = [
    {
      frontImage: {
        src: "https://static.toss.im/assignment/card01.png",
        alt: "Front Image",
      },
      backImage: {
        src: "https://static.toss.im/assignment/back01.png",
        alt: "Back Image",
      },
    },
    {
      frontImage: {
        src: "https://static.toss.im/assignment/card02.png",
        alt: "Front Image",
      },
      backImage: {
        src: "https://static.toss.im/assignment/back02.png",
        alt: "Back Image",
      },
    },
    {
      frontImage: {
        src: "https://static.toss.im/assignment/card03.png",
        alt: "Front Image",
      },
      backImage: {
        src: "https://static.toss.im/assignment/back03.png",
        alt: "Back Image",
      },
    },
    {
      frontImage: {
        src: "https://static.toss.im/assignment/card04.png",
        alt: "Front Image",
      },
      backImage: {
        src: "https://static.toss.im/assignment/back04.png",
        alt: "Back Image",
      },
    },
  ];

  return (
    <>
      <TextAppearByScrolling />
      <VideoAppearByScrolling videoSrc="https://static.toss.im/assignment/main.mp4" />
      <FlipCardList imageData={imageData} />;
    </>
  );
}

export default App;
