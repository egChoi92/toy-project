export const reducer = (state, action) => {
  switch (action.type) {
    case "INIT": {
      console.log(action);
      return {
        topicData: state.topicData ? [...state.topicData, ...action.data] : [],
        selectedFilter: action.selectedFilter ? action.selectedFilter : "전체",
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
    default:
      return state;
  }
};
