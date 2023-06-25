import { useRef, useEffect, useState } from "react";
import { TopicDispatchContext, TopicStateContext } from "context/Context";
import { useMemoContext } from "hooks/useMemoContext";
import styled from "styled-components";
import { topicFetch } from "api/topicFetch";

const StyledObserverItem = styled.div`
  height: 0;
  font-size: 0;
`;

export default function TopicObserver() {
  const topicData = useMemoContext(TopicStateContext, "topicData");
  console.log('topicData: ', topicData);
  const selectedFilter = useMemoContext(TopicStateContext, "selectedFilter");
  const handleInit = useMemoContext(TopicDispatchContext, "handleInit");
  const [isLoading, setIsLoading] = useState(false);
  const [topicState, setTopicState] = useState(topicData);
  console.log('topicState: ', topicState);
  const [page, setPage] = useState(1);
  const observerRef = useRef(null);
  const dataEndRef = useRef(false);
  const options = {
    threshold: 1.0,
  };
  const callback = (entries) => {
    const target = entries[0];
    if (!isLoading && target.isIntersecting && !dataEndRef.current) {
      setPage((prev) => prev + 1);
    }
  };
  const observer = new IntersectionObserver(callback, options);

  useEffect(() => {
    observer.observe(observerRef.current);
  }, []);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const data = await topicFetch(page, selectedFilter);
      setTopicState((prev) => {
        console.log('prev: ', prev);
        // [...prev, ...data]
      })
      handleInit(topicState, selectedFilter)
      setIsLoading(false);
    })();
  }, [page]);

  return <StyledObserverItem ref={observerRef}>Topic Data Fetch Observer</StyledObserverItem>;
}
