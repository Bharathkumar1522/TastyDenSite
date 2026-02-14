import React from "react";

const MenuItem = ({ item }) => {
    const baseUrl = "https://res.cloudinary.com/dyecmgvcy/image/upload/f_auto,q_auto,w_600/";
    const imageUrl = `${baseUrl}${item.imageUrl}`;

    return (
        <div className="menu-item">
            <img
                src={imageUrl}
                alt={item.name}
                loading="lazy"
            />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <span>{item.price}</span>
        </div>
    );
};

export default MenuItem;
