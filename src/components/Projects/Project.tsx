import Carousel from "./Carousel"
import ProjectBg from "./ProjectBg"

const Project = () => {
  return (
    <div className="text-default-text-color sm:mx-[2.5rem] bg-transparent relative z-10 pr-10 w-full h-[100vh]">
      <ProjectBg />
      <Carousel />
    </div>
  )
}

export default Project