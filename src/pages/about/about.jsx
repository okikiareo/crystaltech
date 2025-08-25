import "./about.css";

const About = () => {
    return (
        <main className="About">
            <section className="About-row1">
                <div className="wrap">
                    <h1 className="About-row1-lead">
                        About Us
                        <img
                            className="About-row1-rays"
                            src="/icons/rays.svg"
                            alt=""
                        />
                    </h1>
                    <p className="About-row1-para">
                        Founded in 2023, CrystalTech is a forward-thinking tech solutions company, we believe in the power of technology to simplify, enhance, and elevate your everyday experience.
                    </p>
                </div>
            </section>
            <section className="About-row2">
                <div className="About-row2-wrap wrap flex">
                    <div className="About-row2-col1">
                        <h2 className="About-row2-col1-lead">
                            Why it matters
                        </h2>
                        <p className="About-row2-col1-text">
                            Explore workshops, partnerships, and mentorship programs for empowerment in the digital age. Join us for coding, collaborations, and success guidance. Empowerment for all through tech opportunities. Join us in building an inclusive and innovative society.
                        </p>
                    </div>
                    <div className="About-row2-col2">
                        <div className="About-row2-col2-icon">
                            <img className="About-row2-col2-view ballon" src="/icons/balloon.svg" alt="" />
                        </div>
                        <div className="About-row2-col2-list">
                            <div className="About-row2-item flex">
                                <div className="About-row2-item-icon">
                                    <img className="About-row2-item-view" src="/icons/empowerment.svg" alt="" />
                                </div>
                                <div className="About-row2-item-info">
                                    <h3 className="About-row2-item-lead">
                                        Empowerment
                                    </h3>
                                    <p className="About-row2-item-text">
                                        Hands-on tech training builds real-world skills, confidence, and independence through immersive, practical learning.
                                    </p>
                                </div>
                            </div>
                            <div className="About-row2-item flex">
                                <div className="About-row2-item-icon">
                                    <img className="About-row2-item-view" src="/icons/collaboration.svg" alt="" />
                                </div>
                                <div className="About-row2-item-info">
                                    <h3 className="About-row2-item-lead">
                                        Collaboration
                                    </h3>
                                    <p className="About-row2-item-text">
                                        We partner across sectors to expand impact, share resources, and reach more communities together.
                                    </p>
                                </div>
                            </div>
                            <div className="About-row2-item flex">
                                <div className="About-row2-item-icon">
                                    <img className="About-row2-item-view" src="/icons/guidance.svg" alt="" />
                                </div>
                                <div className="About-row2-item-info">
                                    <h3 className="About-row2-item-lead">
                                        Guidance
                                    </h3>
                                    <p className="About-row2-item-text">
                                        Personalized mentorship empowers growth, offering support, insights, and direction for students and entrepreneurs.
                                    </p>
                                </div>
                            </div>
                            <div className="About-row2-item flex">
                                <div className="About-row2-item-icon">
                                    <img className="About-row2-item-view" src="/icons/inclusion.svg" alt="" />
                                </div>
                                <div className="About-row2-item-info">
                                    <h3 className="About-row2-item-lead">
                                        Inclusion
                                    </h3>
                                    <p className="About-row2-item-text">
                                        We bridge the digital divide with accessible tech education for underserved and underrepresented groups.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="About-row3">
                <div className="About-row3-wrap wrap flex">
                    <div className="About-row3-col1">
                        <h2 className="About-row3-col1-lead">
                            What We Do
                        </h2>
                        <p className="About-row3-col1-text">
                            We create responsive web and app experiences, provide quality assurance and IT consultancy to keep systems running smoothly, design engaging interfaces, and offer expert repairs alongside the latest gadgets.
                            {/* We specialize in creating responsive, user-focused web and app experiences, backed by thorough quality assurance and expert IT consultancy to keep your systems running smoothly. Our design services deliver captivating, conversion-driven interfaces, while our repair and gadget sales team provides skilled diagnostics and access to the latest devices. */}
                        </p>
                    </div>
                    <div className="About-row3-col2">
                        <div className="About-row3-card">
                            <div className="About-row3-card-icon">
                                <img className="About-row3-card-view" src="/icons/coding.svg" alt="" />
                            </div>
                            <div className="About-row3-card-info">
                                <h3 className="About-row3-card-lead">
                                    Web & App Development
                                </h3>
                                <p className="About-row3-card-text">
                                    We design and develop responsive websites and apps that prioritize performance, usability, and user satisfaction, tailored to meet your business goals.
                                </p>
                            </div>
                        </div>
                        <div className="About-row3-card">
                            <div className="About-row3-card-icon">
                                <img className="About-row3-card-view" src="/icons/shield.svg" alt="" />
                            </div>
                            <div className="About-row3-card-info">
                                <h3 className="About-row3-card-lead">
                                    Quality Assurance & IT Consultancy
                                </h3>
                                <p className="About-row3-card-text">
                                    From in-depth testing to strategic IT advice, we ensure your systems are efficient, secure, and ready to scale so your tech works as hard as you do.
                                </p>
                            </div>
                        </div>
                        <div className="About-row3-card">
                            <div className="About-row3-card-icon">
                                <img className="About-row3-card-view" src="/icons/designs.svg" alt="" />
                            </div>
                            <div className="About-row3-card-info">
                                <h3 className="About-row3-card-lead">
                                    Design Services
                                </h3>
                                <p className="About-row3-card-text">
                                    We create stunning, user-focused designs that elevate your brand and drive engagement, turning visitors into loyal customers.
                                </p>
                            </div>
                        </div>
                        <div className="About-row3-card">
                            <div className="About-row3-card-icon">
                                <img className="About-row3-card-view" src="/icons/deliver.svg" alt="" />
                            </div>
                            <div className="About-row3-card-info">
                                <h3 className="About-row3-card-lead">
                                    Repairs & Gadget Sales
                                </h3>
                                <p className="About-row3-card-text">
                                    Whether it's expert device repairs or the latest gadgets, we provide reliable service and premium tech to keep you connected.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default About;