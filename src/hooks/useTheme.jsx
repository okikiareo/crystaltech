import { useStore } from ".";
import { useLayoutEffect } from "react";
import { Cache } from "../logic";
import { ACTIONS } from "../store";

export const useTheme = () => {
    const { dispatch } = useStore();

    useLayoutEffect(() => {
        const savedMode = Cache.get({ key: "mode" });
        const mediaMode = window.matchMedia(
            "(prefers-color-scheme: light)"
        );
        if (savedMode) {
            dispatch({ 
                type: ACTIONS.UPDATE_MODE, 
                mode: savedMode 
            });
        } else {
            const preferred = "auto";
            dispatch({ 
                type: ACTIONS.UPDATE_MODE, 
                mode: preferred
            });
        }

        function watchMedia(e) {
            if (savedMode) { return }
            if (e.matches) {
                dispatch({
                    type: ACTIONS.UPDATE_MODE,
                    mode: "light"
                });
            } else {
                dispatch({
                    type: ACTIONS.UPDATE_MODE,
                    mode: "night"
                });
            }
        }
        mediaMode.addEventListener("change", watchMedia);
        return () => {
            mediaMode.removeEventListener("change", watchMedia);
        }
    }, []);
}