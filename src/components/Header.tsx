import Emoji from '../assets/50xIcon.svg'
import LightMode from '../assets/LightMode.svg'
import DarkMode from '../assets/DarkMode.svg'
import { useState } from 'react'
import { Link } from "react-scroll";

type Props = {
    currentMode: boolean,
    modeToggle: (mode: boolean) => void
}

const Header = ({ modeToggle, currentMode }: Props) => {
    // const [lightMode, setLightMode] = useState(false)

    return (
        <nav className='bg-transparent sticky flex justify-between top-0 right-0 py-5 px-5 z-[25] '>
            <div className='flex justify-center items-center gap-4'>
                <img src={Emoji} alt="emoji" />
                <h1 className='text-default-text-color text-[20px] font-500 '>Khaw</h1>
            </div>
            <div className='flex gap-5 justify-center items-center'>
                {/* <button><img src={currentMode ? DarkMode : LightMode} onClick={() => modeToggle(!currentMode)} className=' cursor-pointer' alt="mode selecter " /></button> */}
                <Link to="Contact" smooth={true} duration={500}><div className=' cursor-pointer justify-center rounded-lg hover:bg-default-text-color hover:text-dark-bg px-3 py-2 border-default-text-color border-[1px] p-0 m-0 flex text-default-text-color text-[16px] font-bold'>
                    <button><a href="#Contact" >Let's Talk</a></button>
                </div>
                </Link>
            </div>
        </nav >
    )
}

export default Header