
const equalArray = (a, b) => JSON.stringify(a) === JSON.stringify(b);
export const reducer = (state, action) => {
  switch (action.type) {
    case "INIT": {
      const data = state.topicData ? [...state.topicData, ...action.data] : []
      const equal = equalArray(state.topicData, action.data);
      return {
        pagination: action.pagination,
        topicData: equal ? action.data : data,
        selectedFilter: action.selectedFilter,
        searchWord: "",

      };
    }
    case "CHANGE_FILTER": {
      return {
        pagination: action.pagination,
        topicData: action.data,
        selectedFilter: action.selectedFilter,
        searchWord: "",
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
