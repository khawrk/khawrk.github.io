import React, { useEffect, useState } from "react";
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
        Description: 'Groove is a web application that allows users to search for music and listen to the 30s preview of the song they searched for.',
        Tech: 'Spotify API, React, Bootstrap, Vercel, TypeScript, SCSS, Vite',
        github: 'https://github.com/khawrk/Groove',
        app: 'https://groove-music-rose.vercel.app'
    },
    {
        imgSource: ColorIdea,
        Title: 'Color Idea',
        Description: 'Color Ideas is a website with color generator what allows people to try different color combinations for their website design. Users can either try colors from 140 CSS colors or using HEX generator which gives more colorful combinations.',
        Tech: 'JavaScript, SCSS, HTML, Vercel',
        github: 'https://github.com/khawrk/color-Idea',
        app: 'https://color-ideas.vercel.app'
    },
    {
        imgSource: GeniusBot,
        Title: 'Genius Bot',
        Description: "Genius Bot is a chatbot built using Gemini API with a plan to apply customized context to the model later so that it can be used for specific customer use cases. The chatbot is now collecting user's location from web browser and ask basic information before start chatting.",
        Tech: 'React, Gemini API, Vercel, TypeScript, Vite, TailwindCSS, GeolocationAPI',
        github: 'https://github.com/khawrk/GeniusBot',
        app: 'https://genius-bot-alpha.vercel.app'
    },
    {
        imgSource: FitTrack,
        Title: 'FitTrack',
        Description: 'FitTrack allows user to create an account, add exercises, and track their progress. The user can also see the history of their exercises and delete them if they want to. Currently the app is running on local machine but in the process of deploying to Vercel for public access.',
        Tech: 'Node.js, Express, Bcrypt, React, Vite, Typescript, Nodemon, TailwindCSS',
        github: 'https://github.com/Cornerstone-CICCC/nodejs-midterm-project-khawrk',
        app: ''
    },
    {
        imgSource: WeatherMate,
        Title: 'WeatherMate',
        Description: 'Weather Mate is a web application that let user check the weather and news related to the location they search for. They can also favorite the location and the data will be stored in LocalStorage so when a user come back to the website, they have options of cities they have searched for.',
        Tech: 'JavaScript, SCSS, Weather API, HTML, Vercel, NewsData API, LocalStorage',
        github: 'https://github.com/khawrk/weather-mate',
        app: 'https://weather-mate-lemon.vercel.app/'
    },
    {
        imgSource: RecipeCollector,
        Title: 'Recipe Collector',
        Description: 'Recipe Collector is a web application that allows users to create their own recipe collection such as Thai Food, Italian Food, and so on. Users can add, edit, and delete the collection including add recipes into each collection. The data is stored in LocalStorage.',
        Tech: 'JavaScript, SCSS, HTML, Vercel, LocalStorage',
        github: 'https://github.com/khawrk/recipeCollector',
        app: 'https://recipe-collector.vercel.app/'
    },
    {
        imgSource: ChromeExtention,
        Title: 'Best Currency Converter Chrome Extension',
        Description: 'BCC (Best Currency Converter) is a Chrome Extension that allows users to convert currency from one to another. The extension is using API Ninjas to get the latest exchange rate and then calculate the amount input by users and display the amount in selected currency.',
        Tech: 'JavaScript, Chrome Extension, JSON, HTML, SCSS, API Ninjas',
        github: 'https://github.com/khawrk/CurrencyConverter',
        app: ''
    }
]

const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
    type: "spring",
    mass: 3,
    stiffness: 400,
    damping: 50,
};

const Carousel = () => {
    const [imgIndex, setImgIndex] = useState<number>(0);
    const dragX = useMotionValue(0);


    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "ArrowRight" && imgIndex < projects.length - 1) {
                setImgIndex((prev) => prev + 1);
            } else if (event.key === "ArrowLeft" && imgIndex > 0) {
                setImgIndex((prev) => prev - 1);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [imgIndex]);


    const onDragEnd = () => {
        const x = dragX.get();

        if (x <= -DRAG_BUFFER && imgIndex < projects.length - 1) {
            setImgIndex((prev) => prev + 1);
        } else if (x >= DRAG_BUFFER && imgIndex > 0) {
            setImgIndex((prev) => prev - 1);
        }
    };

    return (
        <div className="relative overflow-hidden z-[11] sm:px-10 px-5 ">
            <motion.div
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                style={{ x: dragX }}
                animate={{ translateX: `-${imgIndex * 100}%` }}
                transition={SPRING_OPTIONS}
                onDragEnd={onDragEnd}
                className="flex cursor-grab items-center active:cursor-grabbing "
            >
                <Slides imgIndex={imgIndex} />
            </motion.div>
            <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
        </div>
    )
}

interface ImagesProps {
    imgIndex: number;
}

const Slides: React.FC<ImagesProps> = ({ imgIndex }) => {
    return (
        <>
            {projects.map((project: Project, idx: number) => (
                <motion.div
                    key={idx}
                    animate={{ scale: imgIndex === idx ? 0.95 : 0.85 }}
                    transition={SPRING_OPTIONS}
                    className="w-full shrink-0 rounded-xl object-cover flex justify-center"
                >
                    {idx === 0 ?
                        //if index = 0 then it's home page
                        <div className="flex m-auto flex-col pt-[3rem] md:px-[4rem] px-0 text-default-text-color md:pt-[2rem] w-full">
                            <h1 className=" font-bold md:text-[30px] text-[20px] pb-10">Portfolio & Previous Projects</h1>
                            <div className="flex flex-col gap-5 md:px-[5rem] xl:px-[10rem] px-0 font-400 sm:text-[16px] text-[12px]">
                                <p>
                                    I&#39;ve built various projects to purposely learn how new technologies/libraries work, to fulfil my passion and solve the problems I found by talking to people.
                                </p>
                                <p>
                                    I love to build cool things and hopefully make them profitable in the future
                                    Some of the projects can be found on this website.
                                </p>
                                <p>
                                    Ready to check it out? Scroll down or click below
                                </p>
                                <h6 className=" text-orange-text font-bold cursor-pointer">See my Projects -&gt;</h6>
                            </div>
                        </div>
                        :
                        // if index is even, then the image will be on the left side of the screen
                        idx % 2 === 0 ?
                            <div className="pt-10 sm:pt-0 flex sm:flex-row flex-col justify-center sm:gap-5 gap-10 md:w-[80%] w-[100%] items-center text-default-text-color">
                                <div className="sm:w-[100%] w-[60%] flex justify-center">
                                    <img src={project.imgSource} alt={project.Title} className="sm:w-[70%] w-[70%]" />
                                </div>
                                <div className="w-[100%] flex flex-col gap-5 sm:justify-start sm:items-end justify-center">
                                    <h3 className="font-bold text-[20px] text-center sm:text-[36px] sm:text-start drop-shadow-lg shadow-gray-text">{project.Title}</h3>
                                    <p className="sm:text-[16px] text-[12px] text-center sm:text-end font-400">{project.Description}</p>
                                    <p className="sm:text-[16px] text-[12px] text-center sm:text-end font-400"><span className="font-bold">Built using: </span> {project.Tech}</p>
                                    <div className="flex flex-row gap-5 justify-center sm:justify-start items-center sm:items-start">
                                        <a href={project.github} className="sm:w-[120px] w-[80px] h-[30px] flex justify-center items-center rounded-xl bg-default-text-color text-dark-bg text-[14px] font-bold hover:translate-y-1"><button>Github</button></a>
                                        {project.app === '' ? <button disabled className="sm:w-[120px] w-[85px] text-[12px] h-[30px] flex justify-center items-center rounded-xl bg-gray-text sm:text-[14px] shadow-[6px_5px_4.3px_0px_rgba(0, 0, 0, 0.25)] inset-2">Coming Soon</button> : <a href={project.app} className="sm:w-[120px] w-[80px] h-[30px] flex justify-center items-center rounded-xl bg-orange-text text-dark-bg text-[14px] font-bold hover:translate-y-1"><button>Try App</button></a>}
                                    </div>
                                </div>
                            </div>
                            :
                            // if index is odd, then the image will be on the right side of the screen
                            <div className="pt-10 sm:pt-0 flex sm:flex-row flex-col justify-center sm:gap-5 gap-10 md:w-[80%] w-[100%] items-center text-default-text-color">
                                <div className="w-[100%] flex flex-col gap-5 sm:justify-start sm:items-start justify-center items-center">
                                    <h3 className="font-bold text-[20px] text-center sm:text-[32px] sm:text-start drop-shadow-lg shadow-gray-text">{project.Title}</h3>
                                    <p className="sm:text-[16px] text-[12px] text-center sm:text-start font-400">{project.Description}</p>
                                    <p className="sm:text-[16px] text-[12px] text-center sm:text-start font-400"><span className="font-bold">Built using: </span> {project.Tech}</p>
                                    <div className="flex sm:flex-row gap-5 justify-center sm:justify-start items-center sm:items-start">
                                        <a href={project.github} className="sm:w-[120px] w-[80px] h-[30px] flex justify-center items-center rounded-xl bg-default-text-color text-dark-bg text-[14px] font-bold hover:translate-y-1"><button>Github</button></a>
                                        {project.app === '' ? <button disabled className="sm:w-[120px] w-[85px] text-[12px] h-[30px] flex justify-center items-center rounded-xl bg-gray-text sm:text-[14px] shadow-[6px_5px_4.3px_0px_rgba(0, 0, 0, 0.25)] inset-2">Coming Soon</button> : <a href={project.app} className="sm:w-[120px] w-[80px] h-[30px] flex justify-center items-center rounded-xl bg-orange-text text-dark-bg text-[14px] font-bold hover:translate-y-1"><button>Try App</button></a>}
                                    </div>
                                </div>
                                <div className="sm:w-[100%] w-[60%] flex justify-center">
                                    <img src={project.imgSource} alt={project.Title} className="sm:w-[70%] w-[70%]" />
                                </div>
                            </div>
                    }
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
        <div className="flex w-full justify-center gap-2 z-[11] relative items-center">
            {projects.map((_, idx) => (
                <button
                    key={idx}
                    onClick={() => setImgIndex(idx)}
                    className={`rounded-full transition-colors ${idx === imgIndex ? " bg-default-text-color h-4 w-4" : " bg-gray-text h-2 w-2"
                        }`}
                />
            ))}
        </div>
    );
};

export default Carousel