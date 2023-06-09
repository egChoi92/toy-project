import React, { useState, useEffect, useMemo, useReducer, useCallback } from "react";
import Loading from "components/Loading";
import Error from "components/Error";
import { reducer } from "reducers/topicReducer";
import { TopicStateContext, TopicDispatchContext } from "context/Context";
import Header from "components/Header";
import TopicList from "components/TopicList";
import TopicFilter from "components/TopicFilter";
import TopicSearch from "components/TopicSearch";
import { ThemeProvider } from "styled-components";
import ThemeStyles from "styles/ThemeStyle";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [state, dispatch] = useReducer(reducer, {});

  const fetchTopic = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch("./data/topic.json");
      const data = await response.json();
      dispatch({ type: "INIT", data });
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchTopic();
  }, []);

  const handleFilter = useCallback((selectedFilter) => {
    dispatch({
      type: "CHANGE_FILTER",
      selectedFilter,
    });
  }, []);

  const toggleFavourites = useCallback(() => {
    dispatch({ type: "TOGGLE_FAVOURITES" });
  }, []);

  const handleSearch = useCallback((searchWord) => {
    dispatch({ 
      type: "SEARCH", 
      searchWord, 
    });
  }, []);

  const memoizedDispatches = useMemo(() => {
    return { handleFilter, toggleFavourites, handleSearch };
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <TopicStateContext.Provider value={state}>
      <TopicDispatchContext.Provider value={memoizedDispatches}>
        <ThemeProvider theme={ThemeStyles}>
          <div className="App">
            <Header>
              <TopicFilter/>
              <TopicSearch />
            </Header>
            <TopicList />
          </div>
        </ThemeProvider>
      </TopicDispatchContext.Provider>
    </TopicStateContext.Provider>
  );
}
