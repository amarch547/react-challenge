import React, { useState, useEffect } from "react";
import './Card2.css';

export default function Card2() {
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
        <div className="card-2">
            <img src={imageUrl} alt="Dog" />
        </div>
    );
}
