import { useState } from "react";
import { ServicesCard } from "../";
import "./services.css";

const services = [
    {
        id: "yLD41esiEy2PccpuHZ7g6",
        title: "Development",
        group: ["Web", "App", "Quality Assurance"],
        descr: "We bring ideas to life by building market-ready digital products. From apps to websites, we ensure quality, performance, and innovation."
    },
    {
        id: "ddRKF18pawM9WIpAZWRLw",
        title: "AI & Automation",
        group: ["AI Agents", "Workflow Automation", "Smart Solutions"],
        descr: "We harness the power of AI to automate tasks, enhance decision-making, and create smarter digital solutions that drive growth."
    },
    {
        id: "arxDSa4BFgQWvZaKPblF6",
        title: "Design",
        group: ["UIUX", "Motion Graphics", "Video Creation"],
        descr: "We craft visually stunning and user-friendly designs that enhance brand identity and create seamless digital experiences."
    },
    {
        id: "rOXC68WtWRJTnYLhXg7UL",
        title: "IT Support & Maintenance",
        group: ["Computer Repairs", "System Maintenance", "Tech Advisory"],
        descr: "We provide reliable computer repair, system maintenance, and tech support services to keep your devices and operations running smoothly."
    }
];
const Services = () => {
    const [service, setService] = useState(null);
    return (
        <section className="services">
            <div className="services-wrap wrap">
                <h2 className="services-lead">
                    Our Services
                </h2>
                <p className="services-para">
                We offer app and web development, design services, IT support & maintenance
                 and AI-driven automation solutions.
                 Our focus is on innovation, performance, and user experience.
                </p>
                <div className="services-list flex">
                    {services.map((service, index) => (
                        <ServicesCard
                            key={service.id}
                            index={`${index + 1}`.padStart(2, "0")}
                            {...service}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;