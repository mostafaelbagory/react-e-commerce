import { productActionsType } from "../actions/product-action";

export const productReducer = (state = [], action) => {
  switch (action.type) {
    case productActionsType.Add:
      return [...state, action.payload];
    case productActionsType.Get:
      return action.payload;
    case productActionsType.Delete:
      return [...state, action.payload];

    default:
      return state;
  }
};
