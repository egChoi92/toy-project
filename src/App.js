import { useMemo, useReducer, useCallback } from "react";
import { reducer } from "reducers/topicReducer";
import { TopicStateContext, TopicDispatchContext } from "context/Context";
import Header from "components/Header";
import TopicList from "components/TopicList";
import TopicFilter from "components/TopicFilter";
import TopicSearch from "components/TopicSearch";
import { ThemeProvider } from "styled-components";
import ThemeStyles from "styles/ThemeStyle";

export default function App() {
  const [state, dispatch] = useReducer(reducer, {});

  const handleInit = useCallback((data, selectedFilter) => {
    dispatch({
      type: "INIT",
      data,
      selectedFilter
    })
  }, [])

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
    return { handleInit, handleFilter, toggleFavourites, handleSearch };
  }, [handleInit, handleFilter, toggleFavourites, handleSearch]);

  return (
    <TopicStateContext.Provider value={state}>
      <TopicDispatchContext.Provider value={memoizedDispatches}>
        <ThemeProvider theme={ThemeStyles}>
          <div className="App">
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
