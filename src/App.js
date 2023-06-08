import React, { useState, useEffect, useMemo, useReducer, useCallback } from "react";
import Loading from "components/Loading";
import Error from "components/Error";
import { reducer } from "reducers/topicReducer";
import { TopicStateContext, TopicDispatchContext } from "context/Context";
import TopicList from "components/TopicList";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [payload, dispatch] = useReducer(reducer, []);

  const fetchTopic = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch("./data/topic.json");
      const payload = await response.json();
      dispatch({ type: "INIT", payload });
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchTopic();
  }, []);

  const onFilter = useCallback(() => {
    dispatch({ type: "FILTER" });
  }, []);

  const toggleFavourites = useCallback(() => {
    dispatch({ type: "TOGGLE_FAVOURITES" });
  }, []);

  const onSearch = useCallback(() => {
    dispatch({ type: "SEARCH" });
  }, []);

  const memoizedDispatches = useMemo(() => {
    return { onFilter, toggleFavourites, onSearch };
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <TopicStateContext.Provider value={payload}>
      <TopicDispatchContext.Provider value={memoizedDispatches}>
        <div className="App">
          <TopicList />
        </div>
      </TopicDispatchContext.Provider>
    </TopicStateContext.Provider>
  );
}
