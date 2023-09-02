import React, { useState, useEffect } from "react";
import './Card.css';

export default function Card() {
    const [imageUrl, setImageUrl] = useState("");

    useEffect(() => {
        const imageUrlAPI = "https://dog.ceo/api/breed/hound/images/random";
        fetch(imageUrlAPI)
            .then((response) => response.json())
            .then((data) => {
                const { message } = data;
                setImageUrl(message);
            })
            .catch((error) => {
                console.error("Error fetching image:", error);
            });
    }, []);

    return (
        <div className="card">
            <img src={imageUrl} alt="Dog" />
        </div>
    );
}
