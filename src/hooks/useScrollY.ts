import { useEffect, useState } from "react";

export function useScrollY() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let animationFrameId: number;
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      // Only trigger state update and rerender if scroll actually changed to avoid thrashing
      if (window.scrollY !== lastScrollY) {
        lastScrollY = window.scrollY;
        setScrollY(window.scrollY);
      }
      animationFrameId = requestAnimationFrame(onScroll);
    };

    animationFrameId = requestAnimationFrame(onScroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return scrollY;
}
