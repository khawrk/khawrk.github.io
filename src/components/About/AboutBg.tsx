import Asterisk1 from '../../assets/Asterisk1.svg'
import Asterisk2 from '../../assets/Asterisk2.svg'
import E from '../../assets/ELetter.svg'


const AboutBg = () => {
    return (
        <>
            <div className="-z-[100] absolute left-0 bg-stars w-full h-[100vh] bg-cover px-2 mx-[1rem] sm:flex sm:items-center">
                <div className='absolute opacity-[45%] sm:opacity-[70%] left-[15%] items-center sm:top-[200px] top-[200px] self-center flex    '>
                    <img src={E} alt="" className='w-[300px]' />
                </div>
                <img src={Asterisk1} alt="" className=' absolute top-[100px] left-[20%] sm:w-[120px] w-[90px]' />
                <img src={Asterisk2} alt="" className='hidden sm:flex absolute right-[10%] bottom-[30%] sm:w-[120px] w-[90px]' />
            </div>
        </>
    )
}

export default AboutBg