import React from "react";
import "./Focus.css";

const Focus = ({ title, description, image, reverse = false }) => {
    return (
        <div className={`focus ${reverse ? "reverse" : ""}`} >
            <div className="left">
                <h2>{title}</h2>

                <div
                    className="focus-description"
                    dangerouslySetInnerHTML={{ __html: description }}
                />
            </div>

            <div className="right">
                <img src={image} alt={title} />
            </div>
        </div>
    );
};

export default Focus;
