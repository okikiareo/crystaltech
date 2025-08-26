import { motion } from "motion/react";
import { TestimonialsCard } from "../";
import "./testimonialsShow.css";
import { useEffect, useRef, useState, useCallback } from "react";

const TestimonialsShow = (props) => {
  const {
    sliderSlide,
    sliderCount,
    updateCount
  } = props;

  // clones: [last, ...slides, first]
  const sliderClone = sliderSlide[0] ? [sliderSlide[sliderSlide.length - 1], ...sliderSlide, sliderSlide[0]] : [];

  const sliderTable = useRef(null);
  const sliderWidth = useRef(0);
  const [ready, setReady] = useState(false); // turns true after width calc
  const [instant, setInstant] = useState(false); // whether next transform should be instant (no transition)

  // compute slide width (child width + gap)
  const computeSliderWidth = useCallback(() => {
    if (!sliderTable.current || !sliderTable.current.firstChild) {
      sliderWidth.current = 0;
      setReady(false);
      return;
    }

    const child = sliderTable.current.firstChild;
    const childWidth = child.clientWidth;

    // prefer gap / columnGap whichever is present
    const style = getComputedStyle(sliderTable.current);
    const gapRaw = style.columnGap && style.columnGap !== "0px" ? style.columnGap : style.gap || "0px";
    const gap = parseFloat(String(gapRaw).replace("px", "")) || 0;

    sliderWidth.current = childWidth + gap;
    setReady(true);
  }, []);

  // recalc on mount and resize/orientation
  useEffect(() => {
    computeSliderWidth();
    window.addEventListener("resize", computeSliderWidth);
    window.addEventListener("orientationchange", computeSliderWidth);
    return () => {
      window.removeEventListener("resize", computeSliderWidth);
      window.removeEventListener("orientationchange", computeSliderWidth);
    };
  }, [computeSliderWidth]);

  // ensure we start at the first real slide (index = 1 in sliderClone)
  useEffect(() => {
    if (!ready || sliderClone.length === 0) return;
    // initialize to index 1 (first real slide)
    updateCount(1);
  }, [ready, sliderClone.length, updateCount]);

  // helper: length values
  const len = sliderClone.length;
  const lastIndex = len - 1; // index of last element in sliderClone
  // normalize sliderCount safely
  const safeIndex = (() => {
    const asNum = Number(sliderCount) || 0;
    // clamp to [0, lastIndex]
    if (len === 0) return 0;
    if (asNum < 0) return 0;
    if (asNum > lastIndex) return lastIndex;
    return asNum;
  })();

  // target x (pixels). ensures sliderWidth is known.
  const targetX = -(sliderWidth.current || 0) * safeIndex;

  // on animation complete, if we landed on a clone (0 or lastIndex) immediately jump to the matching real slide.
  function handleAnimationComplete() {
    if (!ready || len === 0) return;

    // if we are at the "left clone" (index 0) -> jump to real last (index = lastIndex - 1)
    if (safeIndex === 0) {
      setInstant(true);                       // next transform: no transition
      const realLast = lastIndex - 1;
      updateCount(realLast);
      requestAnimationFrame(() => setInstant(false));
      return;
    }

    // if we are at the "right clone" (index lastIndex) -> jump to real first (index = 1)
    if (safeIndex === lastIndex) {
      setInstant(true);
      updateCount(1);
      requestAnimationFrame(() => setInstant(false));
      return;
    }
  }

  // motion transition: instant mode uses duration 0
  const transition = instant ? { duration: 0 } : { type: "tween", ease: "easeInOut", duration: 0.36 };

  return (
    <div className="testimonials-show">
      <motion.div
        ref={sliderTable}
        className="testimonials-show-wrap"
        animate={{ x: targetX }}
        transition={transition}
        onAnimationComplete={handleAnimationComplete}
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
};

export default TestimonialsShow;
