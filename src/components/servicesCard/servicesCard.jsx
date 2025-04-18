import { useStore } from "../../hooks";
import { ACTIONS } from "../../store";
import "./servicesCard.css";

const ServicesCard = (props) => {
    const { state, dispatch } = useStore();
    const { id, index, title, group, desc } = props;

    const spans = group.map((item, indx) => (
        <li className="services-card-item flex" key={indx}>
            <span className="services-card-tick">✔</span>
            {item}
        </li>
    ));

    return (
        <button
            id={id}
            className="services-card flex"
            data-collapsed={id === state.hash && true}
            onPointerEnter={(e) => dispatch({
                type: ACTIONS.TOGGLE_LIST,
                payload: { event: e }
            })}>
            <div className="services-card-step">
                {index}
            </div>
            <div className="services-card-info">
                <h3 className="services-card-lead">
                    {title}
                </h3>
                <ul className="services-card-list">
                    {spans}
                </ul>
                <p className="services-card-desc">
                    {desc}
                </p>
            </div>
        </button>
    );
}

export default ServicesCard;