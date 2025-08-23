import { ACTIONS } from "../utils/constants";
import { Cache } from "../logic";

export const initial = {
    mode: "auto",
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
            const mode = action.mode;
            return { ...state, mode };
        }
        case ACTIONS.COMMIT_MODE: {
            const mode = action.mode;
            if (mode === "auto") {
                Cache.pop({ key: "mode", value: null });
            } else {
                Cache.set({ key: "mode", value: mode });
            }
            return { ...state, mode };
        }
    }
}
