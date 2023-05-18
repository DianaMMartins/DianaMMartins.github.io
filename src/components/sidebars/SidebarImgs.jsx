import images from "../../data/sidebar-images.json";
import left from "../../data/images/leftSidebar/left.svg";
import right from "../../data/images/rightSidebar/right.svg";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

let pastImageIndex = 0;
export const SidebarImages = ({ side }) => {
  const currentPath = useLocation().pathname;
  const imagesObject = images.find((object) => object.path === currentPath);
  const imagesArray = imagesObject ? imagesObject[side] : null;
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    if (imagesArray && imagesArray.length > 1) {
      const intervalId = setInterval(() => {
        pastImageIndex = selectedImageIndex;

        const nextIndex = selectedImageIndex + 1;
        const validatedNextIndex =
          nextIndex < imagesArray.length ? nextIndex : 0;
        setSelectedImageIndex(validatedNextIndex);

        clearInterval(intervalId);
      }, 5000);
    }
  }, [currentPath, imagesArray, selectedImageIndex]);

  return (
    <section className="sidebar-images">
      {
        imagesArray === null ? (
          <img src={side === "left" ? left : right} alt={side} />
        ) : imagesArray.length > 1 ? (
          <section>
            <img
              src={require(`../../data/images${imagesArray[pastImageIndex]}`)}
              alt={currentPath}
              className="absolute"
            />
            <img
              src={require(`../../data/images${imagesArray[selectedImageIndex]}`)}
              alt={currentPath}
              // trigger re-render component to restart animation
              // https://stackoverflow.com/questions/63186710/how-to-trigger-a-css-animation-on-every-time-a-react-component-re-renders
              key={selectedImageIndex}
              className="fadeInAnimation"
            />
          </section>
        ) : (
          <img
            src={require(`../../data/images${imagesArray[0]}`)}
            alt={currentPath}
            className="absolute"
          />
        )
        // add fade from img1 to img2 when img2 is visible
        // img2 should be on top of img1
      }
    </section>
  );
};
