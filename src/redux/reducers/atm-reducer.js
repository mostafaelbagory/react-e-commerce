import { atmActionsType } from "../actions/atm-action";

export const atmReducer = (state = 1000, action) => {
    switch (action.type) {
      case atmActionsType.WITHDROW_MONEY:
        return state - action.payload;
      case atmActionsType.DEPOSITE_MONEY:
        return state + action.payload;
      default:
        return state;
    }
  };