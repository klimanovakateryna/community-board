import React from "react";
import "../Card.css";

function Card(props) {
    const handleButtonClick = () => {
        window.location.href = props.buttonUrl;
    }
    return (
        <div className="card">
            <img src={props.imageUrl} alt={props.imageAlt} className="card-image"/>
            <h2 className="title">{props.title}</h2>
            <p>{props.date}</p>
            <p className="description">{props.description}</p>
            <button className="card-button" onClick={handleButtonClick}>Read More</button>
        </div>
    );
}

export default Card;
