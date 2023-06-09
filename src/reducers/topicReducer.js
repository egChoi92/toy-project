export const reducer = (state, action) => {
  switch (action.type) {
    case "INIT": {
      return {
        topicData: action.data,
        filter: '전체'
      };
    }
    case "CHANGE_FILTER": {
      return {
        ...state,
        filter: action.filter
      };
    }
    case "TOGGLE_FAVOURITES": {
      console.log("favourites dispatch");
      return state;
    }
    case "SEARCH": {
      console.log("search dispatch");
      return state;
    }
    default:
      return state;
  }
};
