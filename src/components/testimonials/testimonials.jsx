import { useState } from "react";
import { TestimonialsShow } from "../";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";
import "./testimonials.css";

const Testimonials = (props) => {
    const [count, setCount] = useState(0);
    const testimonialSlides = props.testimonials;

    function handleCount(prop) {
        if (prop === "prev") {
            if (count <= 0) { return };
            setCount(c => c - 1);
        } else {
            let x = testimonialSlides.length + 1;
            if (count >=  x) { return };
            setCount(c => c + 1);
        }
    }
    return (
        <section className="testimonial">
            <div className="testimonials-wrap wrap">
                <div className="testimonials-line">
                    TRUSTED BY MANY, DRIVEN BY RESULTS
                    {/* Trusted by many, driven by results */}
                </div>
                <h2 className="testimonials-lead">
                    WHAT THEY SAY
                </h2>
                <p className="testimonials-para">
                    Great service isn’t just a promise - it’s
                    our standard. Many clients, smooth
                    experiences, and guaranteed satisfaction.
                </p>
                <TestimonialsShow 
                    sliderSlide={testimonialSlides}
                    sliderCount={count}
                    updateCount={setCount}
                />
                <div className="testimonials-ctrl flex">
                    <button
                        className="testimonials-push flex"
                        onClick={() => handleCount("prev")}>
                        <RiArrowLeftLine />
                    </button>
                    <button
                        className="testimonials-push flex"
                        onClick={() => handleCount("next")}>
                        <RiArrowRightLine />
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;