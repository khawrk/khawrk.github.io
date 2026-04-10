import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import FitTrack from "../../assets/projects/FitTrack.svg";
import ColorIdea from "../../assets/projects/ColorIdea.svg";
import GeniusBot from "../../assets/projects/GeniusBot.svg";
import Groove from "../../assets/projects/Groove.svg";
import RecipeCollector from "../../assets/projects/RecipeCollector.svg";
import WeatherMate from "../../assets/projects/WeatherMate.svg";
import ChromeExtention from "../../assets/projects/ChromeExtension.svg";

type Project = {
  imgSource: string;
  Title: string;
  Description: string;
  Tech: string;
  github: string;
  app: string;
};

const projects: Project[] = [
  {
    imgSource: '',
    Title: '',
    Description: '',
    Tech: '',
    github: '',
    app: ''
  },
  {
    imgSource: Groove,
    Title: 'Groove',
    Description: 'A web app that allows users to search for music and listen to 30s previews via the Spotify API.',
    Tech: 'Spotify API, React, TypeScript, SCSS',
    github: 'https://github.com/khawrk/Groove',
    app: 'https://groove-music-rose.vercel.app'
  },
  {
    imgSource: ColorIdea,
    Title: 'Color Idea',
    Description: 'A color generator for designers to try different color combinations for their websites.',
    Tech: 'JavaScript, SCSS, HTML',
    github: 'https://github.com/khawrk/color-Idea',
    app: 'https://color-ideas.vercel.app'
  },
  {
    imgSource: GeniusBot,
    Title: 'Genius Bot',
    Description: 'A chatbot built using Gemini API with location-aware features and customizable context.',
    Tech: 'React, Gemini API, TypeScript, TailwindCSS',
    github: 'https://github.com/khawrk/GeniusBot',
    app: 'https://genius-bot-alpha.vercel.app'
  },
  {
    imgSource: FitTrack,
    Title: 'FitTrack',
    Description: 'A fitness tracking app where users can create accounts, log exercises, and track progress.',
    Tech: 'Node.js, Express, React, TypeScript',
    github: 'https://github.com/Cornerstone-CICCC/nodejs-midterm-project-khawrk',
    app: ''
  },
  {
    imgSource: WeatherMate,
    Title: 'WeatherMate',
    Description: 'Check weather and news for any location with the ability to save favorite cities.',
    Tech: 'JavaScript, Weather API, NewsData API',
    github: 'https://github.com/khawrk/weather-mate',
    app: 'https://weather-mate-lemon.vercel.app/'
  },
  {
    imgSource: RecipeCollector,
    Title: 'Recipe Collector',
    Description: 'Create and organize recipe collections with full CRUD functionality.',
    Tech: 'JavaScript, SCSS, HTML',
    github: 'https://github.com/khawrk/recipeCollector',
    app: 'https://recipe-collector.vercel.app/'
  },
  {
    imgSource: ChromeExtention,
    Title: 'Currency Converter',
    Description: 'A Chrome Extension for real-time currency conversion using API Ninjas.',
    Tech: 'JavaScript, Chrome Extension API',
    github: 'https://github.com/khawrk/CurrencyConverter',
    app: ''
  }
];

const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 2,
  stiffness: 300,
  damping: 40,
};

const Carousel = () => {
  const [imgIndex, setImgIndex] = useState<number>(0);
  const dragX = useMotionValue(0);
  const seeProjectsRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight" && imgIndex < projects.length - 1) {
        setImgIndex((prev) => prev + 1);
      } else if (event.key === "ArrowLeft" && imgIndex > 0) {
        setImgIndex((prev) => prev - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [imgIndex]);

  const onDragEnd = () => {
    const x = dragX.get();
    if (x <= -DRAG_BUFFER && imgIndex < projects.length - 1) {
      setImgIndex((prev) => prev + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((prev) => prev - 1);
    }
  };

  const handleSeeProjectsClick = () => {
    setImgIndex(1);
  };

  return (
    <div className="relative overflow-hidden">
      {/* Header */}
      <div className="flex flex-col gap-2 mb-6">
        <span className="text-xs tracking-[0.2em] uppercase text-orange-text">Portfolio</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Projects</h2>
      </div>

      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        style={{ x: dragX }}
        animate={{ translateX: `-${imgIndex * 100}%` }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex cursor-grab active:cursor-grabbing"
      >
        <Slides imgIndex={imgIndex} onSeeProjectsClick={handleSeeProjectsClick} seeProjectsRef={seeProjectsRef} />
      </motion.div>
      
      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
    </div>
  );
};

interface ImagesProps {
  imgIndex: number;
  onSeeProjectsClick: () => void;
  seeProjectsRef: React.RefObject<HTMLHeadingElement>;
}

const Slides: React.FC<ImagesProps> = ({ imgIndex, onSeeProjectsClick }) => {
  return (
    <>
      {projects.map((project: Project, idx: number) => (
        <motion.div
          key={idx}
          animate={{ scale: imgIndex === idx ? 1 : 0.95, opacity: imgIndex === idx ? 1 : 0.5 }}
          transition={SPRING_OPTIONS}
          className="w-full shrink-0 flex justify-center items-center min-h-[300px] sm:min-h-[350px]"
        >
          {idx === 0 ? (
            <div className="flex flex-col items-center text-center px-4 py-8">
              <p className="text-white/70 text-sm sm:text-base max-w-md mb-6 leading-relaxed">
                {"I've"} built various projects to learn new technologies and solve real problems. Swipe or use arrow keys to explore.
              </p>
              <button
                onClick={onSeeProjectsClick}
                className="px-6 py-2 text-sm font-medium text-dark-bg bg-orange-text rounded-full hover:bg-orange-text/90 transition-colors"
              >
                View Projects
              </button>
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10 px-4 w-full max-w-3xl">
              <div className="w-32 h-32 sm:w-40 sm:h-40 flex-shrink-0 flex items-center justify-center">
                <img src={project.imgSource} alt={project.Title} className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col gap-3 text-center sm:text-left flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-white">{project.Title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{project.Description}</p>
                <p className="text-white/40 text-xs">
                  <span className="text-white/60">Built with:</span> {project.Tech}
                </p>
                <div className="flex gap-3 justify-center sm:justify-start mt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-xs font-medium text-white border border-white/20 rounded-full hover:bg-white/10 transition-colors"
                  >
                    GitHub
                  </a>
                  {project.app ? (
                    <a
                      href={project.app}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-xs font-medium text-dark-bg bg-orange-text rounded-full hover:bg-orange-text/90 transition-colors"
                    >
                      Live Demo
                    </a>
                  ) : (
                    <span className="px-4 py-2 text-xs font-medium text-white/40 border border-white/10 rounded-full">
                      Coming Soon
                    </span>
                  )}
                </div>
              </div>
            </div>
          )}
        </motion.div>
      ))}
    </>
  );
};

interface DotsProps {
  imgIndex: number;
  setImgIndex: React.Dispatch<React.SetStateAction<number>>;
}

const Dots: React.FC<DotsProps> = ({ imgIndex, setImgIndex }) => {
  return (
    <div className="flex justify-center gap-2 mt-8">
      {projects.map((_, idx) => (
        <button
          key={idx}
          onClick={() => setImgIndex(idx)}
          className={`rounded-full transition-all duration-300 ${
            idx === imgIndex 
              ? "w-6 h-2 bg-orange-text" 
              : "w-2 h-2 bg-white/30 hover:bg-white/50"
          }`}
        />
      ))}
    </div>
  );
};

export default Carousel;
