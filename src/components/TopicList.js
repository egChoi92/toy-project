import { useContext } from "react";
import { TopicStateContext } from "context/Context";

export default function TopicList() {
  const topicList = useContext(TopicStateContext);
  console.log('topicList: ', topicList);
  return (
    <div>TopicList</div>
  );
}
