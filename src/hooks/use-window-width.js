import { useState, useLayoutEffect } from "react";

// Custom hook to find the width of the window
export default function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  // Finds the width of the client if resized
  useLayoutEffect(() => {
    function updateWidth() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return width;
}
