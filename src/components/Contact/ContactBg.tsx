import Asterisk1 from '../../assets/Asterisk1.svg'
// import Asterisk2 from '../../assets/Asterisk2.svg'

const ContactBg = () => {
    return (
        <div className="-z-[100] absolute left-0 bg-stars w-full h-full bg-cover px-2 ">
            <img src={Asterisk1} alt="" className='relative top-[40px] left-[70%] sm:w-[120px] w-[90px]' />
            {/* <img src={Asterisk2} alt="" className='relative bottom-[-300px] left-[70%] sm:w-[120px] w-[90px]' /> */}
        </div>
    )
}

export default ContactBg