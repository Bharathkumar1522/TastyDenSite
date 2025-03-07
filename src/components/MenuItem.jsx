import React from "react";

const MenuItem = ({ item }) => {

    // Static base URL for Cloudinary images
    const baseUrl = "https://res.cloudinary.com/dyecmgvcy/image/upload/f_auto,q_auto,w_600/";

    // The version and image name will be passed as part of the item object
    const imageUrl = `${baseUrl}${item.imageUrl}`;  // Combine the base URL with the dynamic part

    return (
        <div className="menu-item">
        {/* Dynamically set the image URL */}
        <img 
            src={imageUrl} 
            alt={item.name} 
            loading="lazy"  // Add lazy loading for performance optimization
        />
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <span>{item.price}</span>
        </div>
    );
};

export default MenuItem;
