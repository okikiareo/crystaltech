import { useReducer } from "react";
import { initial, reducer } from "../../store";
import { StoreContext } from "../../scope";

const StoreProvider = (props) => {
    const { children } = props;
    const [state, dispatch] = useReducer(
        reducer,
        initial
    );
    return (
        <StoreContext.Provider value={{ state, dispatch }}>
            {children}
        </StoreContext.Provider>
    );
}

export default StoreProvider;