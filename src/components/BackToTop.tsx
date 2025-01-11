import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "./ui/button";

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const explorePath = document.querySelector("#explore-path");
      if (!explorePath) return;

      const explorePathPosition = explorePath.getBoundingClientRect().top;
      const scrollPosition = window.scrollY;
      const threshold = 3 * window.innerHeight; // 3 sections worth of height

      setIsVisible(
        scrollPosition > explorePathPosition && 
        scrollPosition < explorePathPosition + threshold
      );
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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