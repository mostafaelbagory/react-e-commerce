export const atmActionsType = {
    WITHDROW_MONEY: "WITHDROW_MONEY",
    DEPOSITE_MONEY: "DEPOSITE_MONEY",
  };
  
  export const withdrow = (amount) => {
    return {
      type: atmActionsType.WITHDROW_MONEY,
      payload: amount,
    };
  };
  
  export const deposite = (amount) => {
    return {
      type: atmActionsType.DEPOSITE_MONEY,
      payload: amount,
    };
  };