import { ADD_ITEM } from "./actions";
const initialState = {
  articles: [],
};

export const rootReducer = (state = initialState, action) => {
  console.log("======= STATE =====", action);
  switch (action.type) {
    case ADD_ITEM:
      const updatedArticles = [...state.articles, action.payload];
      return { ...state, articles: updatedArticles };
    default:
      return state;
  }
};
