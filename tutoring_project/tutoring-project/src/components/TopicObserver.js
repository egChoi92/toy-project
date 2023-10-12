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
  const pagination = useMemoContext(TopicStateContext, "pagination");
  const selectedFilter = useMemoContext(TopicStateContext, "selectedFilter");
  const filter = selectedFilter ? selectedFilter : "입문";
  const handleInit = useMemoContext(TopicDispatchContext, "handleInit");
  const [isLoading, setIsLoading] = useState(false);
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
    setPage(1);
  }, [filter]);

  useEffect(() => {
    const filterPagination = {
      ...pagination,
      [filter]: page,
    };

    if (pagination) {
      if (page > pagination[filter]) {
        (async () => {
          setIsLoading(true);
          const data = await topicFetch(page, filter);
          if (data.length === 0) {
            dataEndRef.current = true;
          } else {
            handleInit(data, filter, filterPagination);
          }
          dataEndRef.current = false;
        })();
      }
    }
  }, [page]);

  return <StyledObserverItem ref={observerRef}>Topic Data Fetch Observer</StyledObserverItem>;
}
