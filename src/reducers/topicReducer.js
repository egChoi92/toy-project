export const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "INIT": {
      return payload;
    }
    case "FILTER": {
      console.log("filter dispatch");
      return state;
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
