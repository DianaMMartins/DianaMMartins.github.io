import { ReactComponent as Arrow } from "../../data/images/arrow.svg";

export const isScrollOnElemAtBottomFn = (e) => {
  return e.scrollHeight - e.scrollTop === e.clientHeight;
};

export const ScrollDownArrow = ({ isVisible }) => {
  let smoothScrollIntervalId;

  const handleHover = (e) => {
    const elementToScroll = e.target.parentNode.previousSibling;
    if (!elementToScroll) return;

    const elementScrollHeight = elementToScroll.scrollHeight;
    const scrollSpeed = 4; //(adjust this for scroll speed)

    clearInterval(smoothScrollIntervalId);

    smoothScrollIntervalId = setInterval(() => {
      const reachedScrollableBottom =
        elementToScroll.scrollTop + elementToScroll.offsetHeight ===
        elementScrollHeight;

      if (reachedScrollableBottom) {
        clearInterval(smoothScrollIntervalId);
      } else {
        const direction = 1; // -1 goes up
        elementToScroll.scrollTop += direction * scrollSpeed;
      }
    }, 30); //(adjust this for smoother or slower scrolling)
  };
  console.log(isVisible);

  return isVisible ? (
    <section
      onMouseOver={handleHover}
      onMouseOut={() => {
        clearInterval(smoothScrollIntervalId);
      }}
      className="scroll"
    >
      <Arrow />
    </section>
  ) : (
    ""
  );
};
