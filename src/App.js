import { useState, useEffect, useMemo, useReducer, useCallback, useRef } from "react";
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

  const [page, setPage] = useState(1);

  const fetchTopic = async (page) => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(`http://localhost:4000/topics?page=${page}`, {
        header: {
          "Content-Type": "application/json",
        }
      });
      const data = await response.json();
      dispatch({ type: "INIT", data });
    } catch (error) {
      console.log('Topic Fetch Error: ', error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log(page);
    fetchTopic(page);
  }, [page]);

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
  }, [handleFilter, toggleFavourites, handleSearch]);

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <TopicStateContext.Provider value={state}>
      <TopicDispatchContext.Provider value={memoizedDispatches}>
        <ThemeProvider theme={ThemeStyles}>
          <div className="App">
            <button type="button" onClick={() => setPage(prev => prev+1)}>PAGE UP </button>
            <Header>
              <TopicFilter />
              <TopicSearch />
            </Header>
            <TopicList />
          </div>
        </ThemeProvider>
      </TopicDispatchContext.Provider>
    </TopicStateContext.Provider>
  );
}
