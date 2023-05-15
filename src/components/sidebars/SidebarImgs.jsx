//create an array with images
import images from "../../data/sidebar-images.json";
import left from "../../data/images/leftSidebar/left.svg";
import right from "../../data/images/rightSidebar/right.svg";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const SidebarImages = ({ side }) => {
  const currentPath = useLocation().pathname;
  const imagesObject = images.find((object) => object.path === currentPath);
  const imagesArray = imagesObject ? imagesObject[side] : null;

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    if (imagesArray) {
      const intervalId = setInterval(() => {
        setSelectedImageIndex((currentIndex) => {
          const nextIndex = currentIndex + 1;
          return nextIndex < imagesArray.length ? nextIndex : 0;
        });
      }, 30000);

      return () => clearInterval(intervalId);
    }
  }, [currentPath, imagesArray]);

  return (
    <section className="image-loop">
      {imagesArray === null ? (
        <img src={side === "left" ? left : right} alt={side} />
      ) : (
        <img
          src={require(`../../data/images${imagesArray[
            selectedImageIndex
          ]}`)}
          alt={currentPath}
        />
      )}
    </section>
  );
};
