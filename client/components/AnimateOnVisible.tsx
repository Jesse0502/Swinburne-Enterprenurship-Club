import { ScaleFade, SlideFade } from "@chakra-ui/react";
import { ReactComponentElement, useEffect, useRef, useState } from "react";

const AnimateOnVisible = ({
  position = 0,
  children,
}: {
  position?: number;
  children: React.ReactNode;
}) => {
  const [showAnimation, setShowAnimation] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setShowAnimation(true);
          }, 250 + 100 * position);
          observer.unobserve(entry.target);
        }
      });
    });

    // @ts-ignore
    observer.observe(targetRef?.current);

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <>
      <SlideFade offsetY="40px" in={showAnimation} ref={targetRef}>
        {children}
      </SlideFade>
    </>
  );
};

export default AnimateOnVisible;
