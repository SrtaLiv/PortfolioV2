import React from 'react';
import './style.css'


interface CardProps {
    title: string;
    description: string;
    technologies: string[];
    services: string[];
    image: string;
    link: string;
}

const Card: React.FC<CardProps> = ({ title, description, technologies, services, image, link }) => {
    return (
        <article 
            className="article-wrapper"
            style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="absolute inset-0 bg-black/30"></div>
            
            <div className="project-info relative z-10">
                <div className="flex-pr">
                    <div className="project-title text-nowrap text-white">{title}</div>
                    <div className="project-hover">
                        <svg
                            style={{ color: 'white' }}
                            xmlns="http://www.w3.org/2000/svg"
                            width="2em"
                            height="2em"
                            color="white"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            fill="none"
                            stroke="currentColor"
                        >
                            <line y2="12" x2="19" y1="12" x1="5"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </div>
                </div>
                <div className="types">
                    {services.map((service, index) => (
                        <span 
                            key={index}
                            className="project-type bg-green-primary text-green-950"
                        >
                            {service}
                        </span>
                    ))}
                </div>
            </div>
        </article>
    );
};

export default Card;