import { useMemo, useReducer, useCallback, useEffect } from "react";
import { reducer } from "reducers/topicReducer";
import { TopicStateContext, TopicDispatchContext } from "context/Context";
import TopicHeader from "components/TopicHeader";
import TopicList from "components/TopicList";
import TopicFilter from "components/TopicFilter";
import TopicSearch from "components/TopicSearch";
import { topicFetch } from "api/topicFetch";
import TopicObserver from "components/TopicObserver";

export default function Topic() {
  const [state, dispatch] = useReducer(reducer, {});

  const handleInit = useCallback((data, selectedFilter) => {
    dispatch({
      type: "INIT",
      data,
      selectedFilter,
    });
  }, []);

  const handleFilter = useCallback((selectedFilter) => {
    dispatch({
      type: "CHANGE_FILTER",
      selectedFilter,
      page: 0,
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

  useEffect(() => {
    (async () => {
      const data = await topicFetch(1, "입문");
      handleInit(data, "입문");
    })();
  }, []);

  return (
    <TopicStateContext.Provider value={state}>
      <TopicDispatchContext.Provider value={memoizedDispatches}>
        <TopicHeader>
          <TopicFilter />
          <TopicSearch />
        </TopicHeader>
        <TopicList />
        {/* <TopicObserver/> */}
      </TopicDispatchContext.Provider>
    </TopicStateContext.Provider>
  );
}
