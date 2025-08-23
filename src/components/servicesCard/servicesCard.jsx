import { ServicesItem } from "..";
import "./servicesCard.css";
import { motion } from "motion/react";

const ServicesCard = (props) => {
    const { 
        index, 
        title, 
        group, 
        descr,
    } = props;
    const items = group.map((item, indx) => (
        <ServicesItem 
            key={indx} 
            item={item} 
        />
    ));

    return (
        <motion.button 
            className="services-card flex"
            initial="hide"
            whileHover="show"
            onClick={() => null}
        >
            <div className="services-card-step">
                {index}
            </div>
            <div className="services-card-info">
                <h3 className="services-card-lead">
                    {title}
                </h3>
                <ul className="services-card-list">
                    {items}
                </ul>
                <motion.p 
                    className="services-card-desc"
                    // animate={null}
                    variants={{
                        hide: { height: 0 },
                        show: { height: "auto" }
                    }}
                >
                    {descr}
                </motion.p>
            </div>
        </motion.button>
    );
}

export default ServicesCard;