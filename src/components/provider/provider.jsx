import { useReducer } from "react";
import { initial, reducer, StoreContext } from "../../store";

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