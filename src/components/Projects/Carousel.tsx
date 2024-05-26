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
        imgSource: ColorIdea,
        Title: 'Color Idea',
        Description: 'Color Ideas is a website with color generator what allows people to try different color combinations for their website design. Users can either try colors from 140 CSS colors or using HEX generator which gives more colorful combinations.',
        Tech: 'JavaScript, SCSS, HTML, Vercel',
        github: 'https://github.com/khawrk/color-Idea',
        app: 'https://color-ideas.vercel.app'
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

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
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
        const intervalRef = setInterval(() => {
            const x = dragX.get();

            if (x === 0) {
                setImgIndex((prev) => {
                    if (prev === projects.length - 1) {
                        return 0;
                    }
                    return prev + 1;
                });
            }
        }, AUTO_DELAY);

        return () => clearInterval(intervalRef);
    }, []);

    const onDragEnd = () => {
        const x = dragX.get();

        if (x <= -DRAG_BUFFER && imgIndex < projects.length - 1) {
            setImgIndex((prev) => prev + 1);
        } else if (x >= DRAG_BUFFER && imgIndex > 0) {
            setImgIndex((prev) => prev - 1);
        }
    };

    return (
        <div className="relative overflow-hidden z-[11] px-10">
            <motion.div
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                style={{ x: dragX }}
                animate={{ translateX: `-${imgIndex * 100}%` }}
                transition={SPRING_OPTIONS}
                onDragEnd={onDragEnd}
                className="flex cursor-grab items-center active:cursor-grabbing"
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
                    // style={{
                    //     backgroundImage: `url(${imgSrc})`,
                    //     backgroundSize: "cover",
                    //     backgroundPosition: "center",
                    // }}
                    animate={{ scale: imgIndex === idx ? 0.95 : 0.85 }}
                    transition={SPRING_OPTIONS}
                    className="w-full shrink-0 rounded-xl object-cover"
                >
                    {idx === 0 ?
                        //if index = 0 then it's home page
                        <div className="flex m-auto flex-col pt-[2rem] md:px-[10rem]">
                            <h1 className=" font-bold md:text-[30px] pb-10">Portfolio & Previous Projects</h1>
                            <div className="flex flex-col gap-5 px-[10rem]">
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
                        idx % 2 === 0 ?
                            <div className="flex flex-row justify-center gap-5">
                                <div className="w-[100%] flex justify-center">
                                    <img src={project.imgSource} alt={project.Title} />
                                </div>
                                <div className="w-[100%] flex justify-start flex-col items-start">
                                    <h3 className="font-bold md:text-[30px] text-start">{project.Title}</h3>
                                    <p>{project.Description}</p>
                                    <p><span>Built using: </span> {project.Tech}</p>
                                    <a href={project.github}><button>Github</button></a>
                                    {project.app === '' ? <button disabled>Coming Soon</button> : <a href={project.app}><button>Try App</button></a>}
                                </div>
                            </div>
                            // if index is even, then the image will be on the left side of the screen
                            :
                            <div className="flex flex-row justify-center gap-5">
                                <div className="w-[100%]">
                                    <h3>{project.Title}</h3>
                                    <p>{project.Description}</p>
                                    <p><span>Built using: </span> {project.Tech}</p>
                                    <a href={project.github}><button>Github</button></a>
                                    {project.app === '' ? <button disabled>Coming Soon</button> : <a href={project.app}><button>Try App</button></a>}
                                </div>
                                <div className="w-[100%] flex justify-center">
                                    <img src={project.imgSource} alt={project.Title} />
                                </div>
                            </div>
                        // if index is odd, then the image will be on the right side of the screen
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