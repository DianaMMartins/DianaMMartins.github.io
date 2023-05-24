import images from "../../data/sidebar-images.json";
import left from "../../data/images/leftSidebar/profileL.png";
import right from "../../data/images/rightSidebar/profileR.png";
import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const SidebarImages = ({ side }) => {
  const currentPath = useLocation().pathname;
  const [pagePath, setPagePath] = useState(currentPath);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const pastImageIndexRef = useRef(0);

  // ensures that the state updates are applied whenever the page path changes.
  useEffect(() => {
    if (pagePath !== currentPath) {
      setPagePath(currentPath);
      setSelectedImageIndex(0);
      pastImageIndexRef.current = 0;
    }
  }, [currentPath, pagePath]);

  const imagesObject = images.find((object) => object.path === currentPath);
  const imagesArray = imagesObject ? imagesObject[side] : null;

  useEffect(() => {
    if (imagesArray && imagesArray.length > 1) {
      const intervalId = setInterval(() => {
        pastImageIndexRef.current = selectedImageIndex;

        const nextIndex = selectedImageIndex + 1;
        const validatedNextIndex =
          nextIndex < imagesArray.length ? nextIndex : 0;

        setSelectedImageIndex(validatedNextIndex);
      }, 9000);
      return () => {
        console.log(clearInterval);
        clearInterval(intervalId);
      };
    }
  }, [imagesArray, selectedImageIndex]);

  return (
    <section className="sidebar-images" key={pagePath}>
      {imagesArray === null ? (
        <img src={side === "left" ? left : right} alt={side} />
      ) : imagesArray.length > 1 ? (
        <section>
          <img
            src={require(`../../data/images${
              imagesArray[pastImageIndexRef.current]
            }`)}
            alt={currentPath}
            className="absolute"
            id="img1"
          />
          <img
            src={require(`../../data/images${imagesArray[selectedImageIndex]}`)}
            alt={currentPath}
            // key trigger re-render component to restart animation
            // https://stackoverflow.com/questions/63186710/how-to-trigger-a-css-animation-on-every-time-a-react-component-re-renders
            key={selectedImageIndex}
            className="fadeInAnimation"
            id="img2"
          />
        </section>
      ) : (
        <img
          src={require(`../../data/images${imagesArray[0]}`)}
          alt={currentPath}
          id="img1"
        />
      )}
    </section>
  );
};
