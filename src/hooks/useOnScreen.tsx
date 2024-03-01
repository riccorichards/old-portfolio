import React, { useEffect, useState } from "react";

const useOnScreen = (
  ref: React.RefObject<HTMLElement>,
  rootMargin: string = "0px"
) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const currentRef = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );

    observer.observe(currentRef);

    return () => {
      observer.unobserve(currentRef);
    };
  }, [ref, rootMargin]);

  return isIntersecting;
};

export default useOnScreen;
