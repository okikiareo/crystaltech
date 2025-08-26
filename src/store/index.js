import { ACTIONS } from "../utils/constants";
import { Cache } from "../logic";

export const initial = {
  mode: "light", // default if nothing is saved
  menu: false,
  more: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.TOGGLE_MENU: {
      return { ...state, menu: !state.menu };
    }
    case ACTIONS.REVEAL_MORE: {
      return { ...state, more: !state.more };
    }
    case ACTIONS.UPDATE_MODE: {
      return { ...state, mode: action.mode };
    }
    case ACTIONS.COMMIT_MODE: {
      const mode = action.mode;
      if (mode === "auto") {
        Cache.set({ key: "mode", value: "auto" }); // keep auto so refresh works
      } else {
        Cache.set({ key: "mode", value: mode });
      }
      return { ...state, mode };
    }
    default:
      return state;
  }
};
