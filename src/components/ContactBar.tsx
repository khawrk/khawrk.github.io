
const ContactBar = () => {
  return (
    <div className="absolute sm:left-0 bottom-0 left-0 sm:w-[50px] pb-5 sm:pb-0 h-screen justify-center sm:items-center items-end sm:pl-4 pl-0 sm:flex-col flex-row w-full gap-4 flex ">
      <a href="mailto:khaw.rkk@gmail.com" target="_blank">
        <div className='w-[30px] h-[30px] bg-mailNormal hover:bg-mailHover' id='icon'></div>
      </a>
      <a href="https://www.linkedin.com/in/emikasuntisumranwilai/" target="_blank">
        <div className='w-[30px] h-[30px] bg-LinkedInNormal hover:bg-LinkedInHover' id='icon'></div>
      </a>
      <a href="https://github.com/khawrk" target="_blank" >
        <div className='w-[30px] h-[30px] bg-GithubNormal hover:bg-GithubHover' id='icon'></div>
      </a>
    </div>
  )
}

export default ContactBar