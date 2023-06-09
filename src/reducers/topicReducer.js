export const reducer = (state, action) => {
  switch (action.type) {
    case "INIT": {
      return {
        topicData: action.data,
        selectedFilter: "전체",
        searchWord: "",
      };
    }
    case "CHANGE_FILTER": {
      return {
        ...state,
        selectedFilter: action.selectedFilter,
      };
    }
    case "SEARCH": {
      return {
        ...state,
        searchWord: action.searchWord,
      };
    }
    case "TOGGLE_FAVOURITES": {
      console.log("favourites dispatch");
      return state;
    }
    default:
      return state;
  }
};
