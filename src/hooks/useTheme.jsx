import { useStore } from ".";
import { useLayoutEffect } from "react";
import { Cache } from "../logic";
import { ACTIONS } from "../utils/constants";

export const useTheme = () => {
  const { dispatch } = useStore();

  useLayoutEffect(() => {
    const savedMode = Cache.get({ key: "mode" }); // "light" | "night" | "auto" | null
    const mediaQuery = window.matchMedia("(prefers-color-scheme: light)");
    let mediaHandler = null;

    function applySystemPreference(e) {
      const isLight = e ? e.matches : mediaQuery.matches;
      dispatch({
        type: ACTIONS.UPDATE_MODE,
        mode: isLight ? "light" : "night",
      });
    }

    if (savedMode) {
      if (savedMode === "auto") {
        // follow system preference
        applySystemPreference();
        mediaHandler = applySystemPreference;
        mediaQuery.addEventListener("change", mediaHandler);
      } else {
        // use saved explicit preference
        dispatch({ type: ACTIONS.UPDATE_MODE, mode: savedMode });
      }
    } else {
      // no saved preference → default to light
      dispatch({ type: ACTIONS.UPDATE_MODE, mode: "light" });
    }

    return () => {
      if (mediaHandler) {
        mediaQuery.removeEventListener("change", mediaHandler);
      }
    };
  }, [dispatch]);
};
