import starRed from "../assets/star-red.png"; // Import de l'image étoile rouge
import starGrey from "../assets/star-grey.png"; // Import de l'image étoile grise

function Rating({ rating }) {
    const maxStars = 5
    const redStars = parseInt(rating)
  
    return (
      <div className="rating">
        {[...Array(maxStars)].map((_, index) => (
          <img
            key={index}
            src={index < redStars ? starRed : starGrey}
            alt="Étoile"
            className="star"
          />
        ))}
      </div>
    );
  }
  
  export default Rating;