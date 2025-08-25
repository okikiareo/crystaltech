// Hero.jsx
import React from "react";
import { Link } from "react-router-dom";
// If you still want to use HeroLabel elsewhere, keep import; we use fallback markup here.
import { HeroLabel } from "..";
import "./hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-wrap wrap">
        <div className="hero-view">
          <div className="hero-view-blob flex">
            <div className="hero-view-haze"></div>
            <img
              className="hero-view-item"
              src="/images/peep.png"
              alt="peep"
            />
          </div>

          {/* Top-left badge (fallback markup) */}
          <div className="hero-view-tag1 hero-badge float-box" role="note" aria-label="100% Remote">
            <span className="hero-badge-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" className="up-hero" width="18" height="18" focusable="false" aria-hidden="true">
                <path fill="currentColor" d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 2v2a6 6 0 110 12v2a8 8 0 100-16z"/>
              </svg>
            </span>
            <span className="hero-badge-text">100% Remote</span>
          </div>

          {/* Bottom-right badge */}
          <div className="hero-view-tag2 hero-badge float-box" role="note" aria-label="Great Benefits">
            <span className="hero-badge-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" className="dn-hero" width="18" height="18" focusable="false" aria-hidden="true">
                <path fill="currentColor" d="M12 21s-6-4.35-8-6.3C2.1 13.4 2 11.5 3.1 10.4 4.2 9.3 6 9.3 7 10.3L12 15l5-4.7c1-1 2.9-1 4 0 1.1 1.1 1 3-.9 4.3C18 16.65 12 21 12 21z"/>
              </svg>
            </span>
            <span className="hero-badge-text">Great Benefits</span>
          </div>

        </div>

        <div className="hero-info">
          <h1 className="hero-info-lead">
            INNOVATIVE <br /> TECH SOLUTIONS FOR A <br /> SMARTER FUTURE.
          </h1>
          <p className="hero-info-text">
            Harness the power of Tech to simplify & enhance
            your experience from dynamic digital solutions
            to efficient repairs and high-quality gadgets.
          </p>
          <Link className="hero-info-link btn" to="/about">
            Learn More
          </Link>
        </div>
      </div>

      <div className="hero-tape flex">
        <ul className="hero-tape-col1 flex">
          <li className="hero-tape-item">
            <img className="hero-tape-logo" src="/images/sponsor-1.png" alt="" />
          </li>
          <li className="hero-tape-item">
            <img className="hero-tape-logo" src="/images/sponsor-2.png" alt="" />
          </li>
          <li className="hero-tape-item">
            <img className="hero-tape-logo" src="/images/sponsor-3.png" alt="" />
          </li>
          <li className="hero-tape-item">
            <img className="hero-tape-logo" src="/images/sponsor-5.png" alt="" />
          </li>
        </ul>
        <ul className="hero-tape-col2 flex">
          <li className="hero-tape-item">
            <img className="hero-tape-logo" src="/images/sponsor-1.png" alt="" />
          </li>
          <li className="hero-tape-item">
            <img className="hero-tape-logo" src="/images/sponsor-2.png" alt="" />
          </li>
          <li className="hero-tape-item">
            <img className="hero-tape-logo" src="/images/sponsor-3.png" alt="" />
          </li>
          <li className="hero-tape-item">
            <img className="hero-tape-logo" src="/images/sponsor-5.png" alt="" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;
