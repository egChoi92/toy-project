import { useRef, useEffect, useState } from "react";
import { TopicDispatchContext } from "context/Context";
import { useMemoContext } from "hooks/useMemoContext";
import styled from "styled-components";

const StyledObserverItem = styled.div`
  height: 0;
  font-size: 0;
`;

export default function TopicFetchObserver() {
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1);
    const observerRef = useRef(null);
    const dataEndRef = useRef(false);
    const handleInit = useMemoContext(TopicDispatchContext, "handleInit");
  
    const fetchTopic = async (page) => {
      try {
        setIsLoading(true);
        const response = await fetch(`http://localhost:4000/topics?page=${page}`, {
          header: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        if (data.length === 0) {
          dataEndRef.current = true
        } else {
          handleInit(data);
        }
      } catch (error) {
        console.log('Topic Fetch Error:', error);
      } finally {
        setIsLoading(false);
      }
    };
  
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
      fetchTopic(page);
    }, [page]);

  return (
    <StyledObserverItem ref={observerRef}>Topic Data Fetch Observer</StyledObserverItem>
  )
}
 