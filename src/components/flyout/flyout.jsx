import { useStore } from "../../hooks";
import { ACTIONS } from "../../utils/constants";
import { RiContrastLine, RiSunLine, RiMoonLine, RiCheckLine } from "react-icons/ri";
import "./flyout.css";

const Flyout = () => {
    const { state, dispatch } = useStore();
    const mode = state.mode;
    return (
        <div className="flyout">
            <div
                className="flyout-menu"
                onClick={() => dispatch({ type: ACTIONS.REVEAL_MORE })}>
                {
                    mode === "light" ? <RiSunLine /> :
                    mode === "night" ? <RiMoonLine /> : <RiContrastLine />
                }
            </div>
            <div
                className={`flyout-list${state.more ? " open" : ""}`}>
                <div
                    className={`flyout-item flex${mode === "auto" ? " done" : ""}`}
                    onClick={() => dispatch({ type: ACTIONS.COMMIT_MODE, mode: "auto" })}>
                    <div className="flyout-info flex">
                        <RiContrastLine />
                        <div>Auto</div>
                    </div>
                    { mode === "auto" && <RiCheckLine /> }
                </div>
                <div
                    className={`flyout-item flex${mode === "light" ? " done" : ""}`}
                    onClick={() => dispatch({ type: ACTIONS.COMMIT_MODE, mode: "light" })}>
                    <div className="flyout-info flex">
                        <RiSunLine />
                        <div>Light</div>
                    </div>
                    {mode === "light" && <RiCheckLine /> }
                </div>
                <div
                    className={`flyout-item flex${mode === "night" ? " done" : ""}`}
                    onClick={() => dispatch({ type: ACTIONS.COMMIT_MODE, mode: "night" })}>
                    <div className="flyout-info flex">
                        <RiMoonLine />
                        <div>Night</div>
                    </div>
                    {mode === "night" && <RiCheckLine />}
                </div>
            </div>
        </div>
    );
}

export default Flyout;