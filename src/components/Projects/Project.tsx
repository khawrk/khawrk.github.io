import Carousel from "./Carousel"
import ProjectBg from "./ProjectBg"

const Project = () => {
  return (
    <div className="text-default-text-color sm:mx-[2.5rem] bg-transparent relative z-10 pr-10 w-full">
      <ProjectBg />
      {/* <div className="flex m-auto flex-col pt-[6rem] md:px-[10rem]">
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
      </div> */}
      <Carousel />
    </div>
  )
}

export default Project