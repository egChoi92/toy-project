import "./App.css";
import FlipCardList from "./components/flip-card-list/FlipCardList";

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

  return <FlipCardList imageData={imageData} />;
}

export default App;
