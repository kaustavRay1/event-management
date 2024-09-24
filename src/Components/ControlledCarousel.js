import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import "./Home.css";
export default function App() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    return (
        <div className="carousel">
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item interval={1500}>
                    <img
                        src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/Java.png"
                        className="carousel-items"
                        alt="JAVA"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img
                        src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220401124017/HTML-Tutorial.png"
                        className="carousel-items"
                        alt="HTML"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img
                        src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210322182256/AngularJS-Tutorial.png"
                        className="carousel-items"
                        alt="Angular"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}
