import { useEffect, useState } from "react";

// id, size, x, y, opacity, animationDuration
// id, size, x, y, delay, animationDuration

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [fallingStars, setFallingStars] = useState([]);

  useEffect(() => {
    generateFallingStars();

    const handleResize = () => {
      generateFallingStars();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      {fallingStars.map((fallingStar) => (
        <div
          key={fallingStar.id}
          className="meteor animate-meteor"
          style={{
            width: fallingStar.size * 2 + "px",
            height: fallingStar.size * 2 + "px",
            left: fallingStar.x + "%",
            top: fallingStar.y + "%",
            animationDelay: fallingStar.delay + "s",
            animationDuration: fallingStar.animationDuration + "s",
          }}
        />
      ))}
    </div>
  );
};
