import Asterisk1 from '../../assets/Asterisk1.svg'
import Asterisk2 from '../../assets/Asterisk2.svg'


const HomeBg = () => {
    return (
        <div className="-z-[100] absolute top-0 left-0 bg-stars w-full h-[100vh] bg-cover px-2 mx-[1rem] sm:flex sm:items-center">
            <img src={Asterisk1} alt="" className='relative top-[20px] left-[10%] sm:w-[120px] w-[90px]' />
            <img src={Asterisk2} alt="" className='relative bottom-[-300px] left-[70%] sm:w-[120px] w-[90px]' /> 
        </div>
    )
}

export default HomeBg