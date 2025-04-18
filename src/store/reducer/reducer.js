import { ACTIONS } from "../";
import { Cache } from "../../logic";

const reducer = (state, action) => {
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
        case ACTIONS.TOGGLE_LIST: {
            const target = action.payload.event.target;

            let selected;
            if (target.id) {
                selected = target.id;
            } else {
                selected = state.hash;
            }
            return { ...state, hash: selected };
        }
        case ACTIONS.SLIDER_PUSH: {
            const target = action.payload.event.target;
            console.log("slider push...");
            return { ...state };
        }
        case ACTIONS.SLIDER_DONE: {
            const target = action.payload.event.target;
            console.log("slider done...");
            return { ...state };
        }
    }
}

export default reducer;