import { useEffect, useRef } from "react";
import { Icon, TestimonialsCard } from "../";
import { useStore } from "../../hooks";
import { ACTIONS } from "../../store";
// import { Swiper, SwiperSlide } from "swiper/react";
import "./testimonials.css";

const Testimonials = (props) => {
    const { state, dispatch } = useStore();
    const sliderRef = useRef();
    const testimonials = props.testimonials;
    const leadTestimonial = testimonials[0];
    const tailTestimonial = testimonials[testimonials.length - 1];

    return (
        <section className="testimonials">
            <div className="testimonials-wrap wrap">
                <div className="testimonials-line">
                    TRUSTED BY MANY, DRIVEN BY RESULTS
                    {/* Trusted by many, driven by results */}
                </div>
                <h2 className="testimonials-lead">
                    WHAT THEY SAY
                </h2>
                <p className="testimonials-para">
                    Great service isn’t just a promise—it’s
                    our standard. Many clients, smooth
                    experiences, and guaranteed satisfaction.
                </p>
                <div
                    className="testimonials-list flex"
                    ref={sliderRef}
                    style={{ transform: `translateX(${state.move})` }}
                    onTransitionEnd={(e) => dispatch({
                        type: ACTIONS.SLIDER_DONE,
                        payload: { event: e }
                    })}>
                    <TestimonialsCard {...tailTestimonial} />
                    {testimonials.map(testimonial => (
                        <TestimonialsCard
                            key={testimonial.id}
                            {...testimonial}
                        />
                    ))}
                    <TestimonialsCard {...leadTestimonial} />
                </div>
                <div className="testimonials-ctrl flex">
                    <button
                        className="testimonials-push prev flex"
                        onClick={(e) => dispatch({
                            type: ACTIONS.SLIDER_PUSH,
                            payload: { event: e, slave: sliderRef.current }
                        })}>
                        <Icon link="arrow-prev" />
                    </button>
                    <button
                        className="testimonials-push next flex"
                        onClick={(e) => dispatch({
                            type: ACTIONS.SLIDER_PUSH,
                            payload: { event: e, slave: sliderRef.current }
                        })}>
                        <Icon link="arrow-next" />
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;