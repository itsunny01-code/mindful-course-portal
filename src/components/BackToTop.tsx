import { useState, useEffect, useCallback } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "./ui/button";

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  let hideTimeout: NodeJS.Timeout;

  const handleScroll = useCallback(() => {
    const explorePath = document.querySelector("#explore-path");
    if (!explorePath) return;

    const currentScrollY = window.scrollY;
    const explorePathPosition = explorePath.getBoundingClientRect().top + window.scrollY;
    const isScrollingUp = currentScrollY < lastScrollY;
    const isAboveExplorePath = currentScrollY < explorePathPosition;
    const threshold = 3 * window.innerHeight;

    // Clear any existing timeout when scrolling occurs
    if (hideTimeout) {
      clearTimeout(hideTimeout);
    }

    // Show button only when scrolling up and after explore path section
    if (isScrollingUp && 
        currentScrollY > explorePathPosition && 
        currentScrollY < explorePathPosition + threshold) {
      setIsVisible(true);
      
      // Set new timeout to hide button after 3 seconds
      hideTimeout = setTimeout(() => {
        setIsVisible(false);
      }, 3000);
    } else if (isAboveExplorePath) {
      setIsVisible(false);
    }

    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (hideTimeout) {
        clearTimeout(hideTimeout);
      }
    };
  }, [handleScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <Button
      onClick={scrollToTop}
      className="fixed bottom-24 right-6 z-50 w-12 h-12 rounded-full p-3 bg-primary hover:bg-primary-dark shadow-lg transition-all duration-300"
      size="icon"
    >
      <ArrowUp className="h-5 w-5 text-white" />
    </Button>
  );
};