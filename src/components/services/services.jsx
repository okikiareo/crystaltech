import { ServicesCard } from "../";
import "./services.css";

const services = [
    {
        id: "yLD41esiEy2PccpuHZ7g6",
        title: "Design",
        group: ["UIUX", "Motion Graphics", "Visual Illustration"],
        desc: "We bring ideas to life by building market-ready digital products. From apps to websites, we ensure quality, performance, and innovation."
    },
    {
        id: "arxDSa4BFgQWvZaKPblF6",
        title: "Design",
        group: ["UIUX", "Motion Graphics", "Visual Illustration"],
        desc: "We craft visually stunning and user-friendly designs that enhance brand identity and create seamless digital experiences."
    },
    {
        id: "rOXC68WtWRJTnYLhXg7UL",
        title: "Design",
        group: ["UIUX", "Motion Graphics", "Visual Illustration"],
        desc: "For businesses and individuals looking to optimize tech strategies, streamline operations, and maintain efficient IT systems."
    },
    {
        id: "ddRKF18pawM9WIpAZWRLw",
        title: "Design",
        group: ["UIUX", "Motion Graphics", "Visual Illustration"],
        desc: "We offer high-quality tech products—laptops, smartphones, accessories—and provide expert repair services for hardware and software issues, ensuring your devices run at their best."
    }
];
const Services = () => {
    return (
        <section className="services">
            <div className="services-wrap wrap">
                <h2 className="services-lead">
                    Our Services
                </h2>
                <p className="services-para">
                    We offer app and web development,
                    design services, IT consultancy, and
                    expert sales and repair for tech
                    products. Our focus is on innovation,
                    performance, and user experience.
                </p>
                <div className="services-list flex">
                    {services.map((service, index) => (
                        <ServicesCard
                            key={service.id}
                            index={`${index + 1}`
                            .padStart(2, "0")}
                            {...service}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;