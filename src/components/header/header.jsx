import { useLayoutEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useStore, useStyle } from "../../hooks";
import { Flyout, Logo, WelcomeSvg } from "../";
import { ACTIONS } from "../../utils/constants";
import "./header.css";

const Header = () => {
    const { state, dispatch } = useStore();
    const ref = useRef()

    useStyle({
        name: "style",
        value: state.menu ?
            "overflow: hidden" :
            "overflow: invert"
    });
    useLayoutEffect(() => {
        const scrollWatcher = document.createElement("div");
        scrollWatcher.setAttribute("data-scrolltarget", "");
        ref.current.before(scrollWatcher);

        const scrollOptions = {}
        const scrollHandler = (entries) => {
            const scrollEntry = entries[0];
            ref.current.classList.toggle(
                "glue",
                !scrollEntry.isIntersecting
            );
        }

        const scrollMonitor = new IntersectionObserver(
            scrollHandler,
            scrollOptions
        );
        scrollMonitor.observe(scrollWatcher);
        return () => {
            scrollWatcher.remove();
            scrollMonitor.disconnect();
        }
    }, []);
    return (
        <header className="header" ref={ref}>
            <nav className="header-wrap wrap">
                <Logo name="header-logo" />
                <div className={`header-menu${state.menu ? " open" : ""}`}>
                    <ul className="header-list">
                        <li className="header-list-item">
                            <NavLink
                                className={({ isActive }) => isActive ? "header-list-link" : "header-list-link"}
                                to="/"
                                onClick={() => { state.menu && dispatch({ type: ACTIONS.TOGGLE_MENU }) }}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="header-list-item">
                            <NavLink
                                className={({ isActive }) => isActive ? "header-list-link" : "header-list-link"}
                                to="/about"
                                onClick={() => { state.menu && dispatch({ type: ACTIONS.TOGGLE_MENU }) }}
                            >
                                About
                            </NavLink>
                        </li>
                        <li className="header-list-item">
                            <NavLink
                                className={({ isActive }) => isActive ? "header-list-link" : "header-list-link"}
                                to="/blog"
                                onClick={() => { state.menu && dispatch({ type: ACTIONS.TOGGLE_MENU }) }}
                            >
                                Blog
                            </NavLink>
                        </li>
                        <div className="header-wave">
                            <WelcomeSvg />
                        </div>
                    </ul>
                    <Flyout />
                    <div
                        className="header-ctrl"
                        onClick={() => dispatch({ type: ACTIONS.TOGGLE_MENU })}>
                        <span className="header-ctrl-line"></span>
                        <span className="header-ctrl-line"></span>
                        <span className="header-ctrl-line"></span>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;