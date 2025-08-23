import { motion } from "motion/react";
import { TestimonialsCard } from "../";
import "./testimonialsShow.css";
import { useEffect, useRef, useState } from "react";

const TestimonialsShow = (props) => {
    const { 
        sliderSlide,
        sliderCount,
        updateCount
    } = props;

    const [id, setId] = useState(true); /* */
    const [on, setOn] = useState(true); /* */
    const sliderClone = sliderSlide[0] ? [sliderSlide[sliderSlide.length - 1], ...sliderSlide, sliderSlide[0]] : [];
    const sliderTable = useRef(null);
    const sliderWidth = useRef(0);

    const sliderSwipe = {
        initial: {
            x: sliderWidth.current * sliderCount * -1,
            transition: {
                duration: 0
            }
        },
        visible: {
            x: sliderWidth.current * sliderCount * -1,
            transition: {}
        },
        dormant: {
            x: sliderWidth.current * sliderCount * -1,
            transition: {
                duration: 0
            }
        }
    };

    useEffect(() => {
        if (!sliderTable.current.firstChild) { return }
        const getChildWidth = sliderTable.current.firstChild.clientWidth;
        const getChildStyle = getComputedStyle(sliderTable.current);
        const getChildSpace = getChildStyle.columnGap.slice(0, -2);
        sliderWidth.current = getChildWidth + parseFloat(getChildSpace);

        updateCount(1);
        setOn(false);
    }, []);

    function handleAnimation() {
        const z = sliderClone.length - 1;
        if (on) { return }
        if (id) {
            if (sliderCount === 0) {
                const x = 2;
                setId(false);
                updateCount(sliderClone.length - x);
            }
            if (sliderCount === z) {
                const x = sliderCount;
                setId(false);
                updateCount(sliderClone.length - x);
            }
        } else {
            setId(true);
        }
    }

    return (
        <div className="testimonials-show">
            <motion.div 
                ref={sliderTable}
                className="testimonials-show-wrap flex"
                variants={sliderSwipe}
                initial="initial"
                animate={id ? "visible" : "dormant"}
                onAnimationComplete={() => handleAnimation()}
            >
                {sliderClone.map((slide, indx) => (
                    <TestimonialsCard
                        key={indx}
                        {...slide}
                    />
                ))}
            </motion.div>
        </div>
    );
}

export default TestimonialsShow;