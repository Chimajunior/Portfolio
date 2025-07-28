import { useEffect, useState } from "react";

// id, size, x, y, opacity, animationDuration
// id, size, x, y, delay, animationDuration

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [fallingStars, setFallingStars] = useState([]);

  useEffect(() => {
    // generateStars();
    generateFallingStars();

    const handleResize = () => {
        generateStars();
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener("resize", handleResize )
  }, []);

    // stars background with animation
  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 13000
    );

    const newStars = [];

    // looping through the amount of stars
    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 1 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }

    setStars(newStars);
  };

  //   Falling stars added to the background with animation
  const generateFallingStars = () => {
    const numberOfFallingStars = 4;
    const newFallingStars = [];

  

    // looping through the amount of falling stars
    for (let i = 0; i < numberOfFallingStars; i++) {
      newFallingStars.push({
        id: i,
        size: Math.random() * 1 + 1,
        x: Math.random() * 100,
        y: Math.random() * 50,
        delay: Math.random() * 15,
        animationDuration: Math.random() * 3 + 2,
      });
    }

    setFallingStars(newFallingStars);
  };

  return (
    <div className="fixed inset-0  overflow-hidden pointer-events-none z-0">
      {/* {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        />
      ))} */}

      {fallingStars.map((fallingStar) => (
        <div
          key={fallingStar.id}
          className="meteor animate-meteor"
          style={{
            width: fallingStar.size * 2 + "px",
            height: fallingStar.size * 2 + "px",
            left: fallingStar.x + "%",
            top: fallingStar.y + "%",
            animationDelay: fallingStar.delay,
            animationDuration: fallingStar.animationDuration + "s",
          }}
        />
      ))}
    </div>
  );
};
