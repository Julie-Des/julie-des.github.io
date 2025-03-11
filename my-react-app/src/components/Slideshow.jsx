import { useState } from "react";
import arrowLeft from "../assets/arrow-left.png"
import arrowRight from "../assets/arrow-right.png"

function Slideshow({pictures}) {
    const [currentIndex, setCurrentIndex] = useState(0)

    function nextSlide() {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length)
    };

    function prevSlide() {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? pictures.length - 1 : prevIndex -1)
    };

    return (
        <div className="slideshow">
            {pictures.length > 1 && (
                <img src={arrowLeft} alt="Flèche gauche" className="arrow-left" onClick={prevSlide} />
            )}

            {pictures.length > 1 && (
                <img src={arrowRight} alt="Flèche droite" className="arrow-right" onClick={nextSlide} />
            )}

            {pictures.map((picture, index) => (
                <img 
                    key={index}
                    src={picture}
                    alt={`Slide ${index + 1}`} 
                    className={`slideshow-image ${index === currentIndex ? "active" : ""}`} 
                />
            ))} 
            
            {pictures.length > 1 && (
                <p className="numbering">
                    {currentIndex + 1} / {pictures.length}
                </p>
            )}
        </div>
    )   
}

export default Slideshow