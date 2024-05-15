import MailIcon from '../assets/mail.png'
import LinkedInIcon from '../assets/linkedin.png'
import GitHubIcon from '../assets/github.png'

const ContactBar = () => {
  return (
    <div className="absolute left-0 h-screen flex justify-center items-center pl-4 flex-col gap-4">
      <a href="mailto:khaw.rkk@gmail.com" target="_blank"><img src={MailIcon} alt="email" className='w-[30px] h-[30px]' /></a>
      <a href="https://www.linkedin.com/in/emikasuntisumranwilai/" target="_blank"><img src={LinkedInIcon} alt="LinkedIn" className='w-[30px] h-[30px]' /></a>
      <a href="https://github.com/khawrk" target="_blank" ><img src={GitHubIcon} alt="Github" className='w-[30px] h-[30px]' /></a>
    </div>
  )
}

export default ContactBar