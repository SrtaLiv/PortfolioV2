import React from "react";
import "./style.css";
import TiltedCard from "../../animate/TiltedCard";
import { desc } from "framer-motion/client";

interface CardProps {
    title: string;
    description: string;
    technologies: string[];
    services: string[];
    image: string;
    link: string;
}

const Card: React.FC<CardProps> = ({
    title,
    description,
    technologies,
    services,
    image,
    link,
}) => {
    return (
        <article
        >
            <TiltedCard
                imageSrc={image}
                altText={technologies[0]}
                captionText={description}
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.2}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                    <div className="text-white text-center relative z-10">
                        <div className="project-info">
                            <div className="flex-pr">
                                <div className="project-title text-nowrap">{title}</div>
                            </div>
                            <div className="types">
                                {services.map((service, index) => (
                                    <span
                                        key={index}
                                        className="project-type bg-black text-white"
                                    >
                                        {service}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                }
            />
        </article>
    );
};

export default Card;
