export const reducer = (state, action) => {
  switch (action.type) {
    case "INIT": {
      return {
        topicData: state.topicData ? action.data : [],
        selectedFilter: action.selectedFilter,
        searchWord: "",
        page: 0,
      };
    }
    case "CHANGE_FILTER": {
      return {
        ...state,
        page: 0,
        selectedFilter: action.selectedFilter,
      };
    }
    case "SEARCH": {
      return {
        ...state,
        searchWord: action.searchWord,
      };
    }
    default:
      return state;
  }
};
