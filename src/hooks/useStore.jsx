import { useContext } from "react";
import { StoreContext } from "../scope";

export const useStore = () => {
    return useContext(StoreContext);
}