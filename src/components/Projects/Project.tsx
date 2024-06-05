import Carousel from "./Carousel"
import ProjectBg from "./ProjectBg"

const Project = () => {
  return (
    <div className="text-default-text-color sm:mx-[2.5rem] bg-transparent relative z-10  w-full h-[100vh] flex justify-center items-center">
      <ProjectBg />
      <Carousel />
    </div>
  )
}

export default Project