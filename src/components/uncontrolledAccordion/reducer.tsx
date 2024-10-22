export type ActionType = {
  type: string;
};

export const TOGGLE_COLLAPSED = "TOGGLE-COLLAPSED";

export type StateType = {
  collapsed: boolean;
};

export const reducer = (state: StateType, action: ActionType): StateType => {
  // делает новый стейт, преобразует
  // console.log("reducer start: ");
  // console.log("state:", state);
  // console.log("action:", action);
  // console.log("reducer end: ");

  // if (action.type === TOGGLE_COLLAPSED) {
  //   return !state;
  // }

  // return state;
  switch (action.type) {
    case TOGGLE_COLLAPSED:
    //   const stateCopy = { ...state };
    //   stateCopy.collapsed = !state.collapsed;
    const stateCopy = {
        ...state,
        collapsed: !state.collapsed
    }
      return stateCopy;
    default:
      throw new Error("Bad action type");
  }
  return state;
};
