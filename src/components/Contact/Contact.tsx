import ContactBg from "./ContactBg"
import ContactForm from "./ContactForm"
import ContactIcon from '../../assets/ContactIcon.svg'

const Contact = () => {
  return (
    <div className="text-default-text-color relative sm:mx-[2.5rem]">
      <ContactBg />
      <div className="relative w-full z-10 p-4 text-default-text-color h-[500px] flex flex-col justify-center pt-[9rem] sm:pt-10 sm:px-[2rem] xl:px-[15rem]">
        <h1 className="font-bold sm:text-[30px] text-[20px] pb-0 sm:pb-4">Let’s talk about your ideas</h1>
        <div className="flex flex-col md:flex-row pb-10 sm:pb-0 sm:pt-5 pt-0 gap-5 w-full">
          <div className="flex justify-center items-center sm:w-full w-full h-auto">
            <img src={ContactIcon} alt="" className="w-[200px] md:w-full" />
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default Contact