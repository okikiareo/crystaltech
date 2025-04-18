import { Icon } from "../";
import { useStore } from "../../hooks";
import { ACTIONS } from "../../store";
import "./flyout.css";

const Flyout = () => {
    const { state, dispatch } = useStore();
    const mode = state.mode;
    return (
        <div className="flyout">
            <div
                className="flyout-menu"
                onClick={() => dispatch({ type: ACTIONS.REVEAL_MORE })}>
                <Icon link={mode} />
                <Icon link="drop" />
            </div>
            <div
                className={`flyout-list${state.more ? " open" : ""}`}>
                <div
                    className={`flyout-item flex${mode === "auto" ? " done" : ""}`}
                    onClick={() => dispatch({ type: ACTIONS.COMMIT_MODE, mode: "auto" })}>
                    <div className="flyout-info flex">
                        <Icon link="auto" />
                        <div>Auto</div>
                    </div>
                    <Icon link="check" name="flyout-mark" />
                </div>
                <div
                    className={`flyout-item flex${mode === "light" ? " done" : ""}`}
                    onClick={() => dispatch({ type: ACTIONS.COMMIT_MODE, mode: "light" })}>
                    <div className="flyout-info flex">
                        <Icon link="light" />
                        <div>Light</div>
                    </div>
                    <Icon link="check" name="flyout-mark" />
                </div>
                <div
                    className={`flyout-item flex${mode === "night" ? " done" : ""}`}
                    onClick={() => dispatch({ type: ACTIONS.COMMIT_MODE, mode: "night" })}>
                    <div className="flyout-info flex">
                        <Icon link="night" />
                        <div>Night</div>
                    </div>
                    <Icon link="check" name="flyout-mark" />
                </div>
            </div>
        </div>
    );
}

export default Flyout;