import { useState } from "react"

const NavBar = () => {
  const [current, setCurrent] = useState<string>("Home")

  return (
    <div className="flex flex-row bg-transparent absolute right-0 justify-center items-center h-screen gap-4 pr-4">
      <div className="h-[150px] flex flex-col gap-5 justify-center">
        <div className="flex w-[50px] justify-end h-[30px] cursor-pointer" onClick={() => setCurrent("Home")}>
          <h4 className="text-gray-text h-[30px] self-center" style={current === 'Home' ? { "color": "#EEF7FF" } : { "color": "#7D8082" }}>Home</h4>
        </div>
        <div className="flex w-[50px] justify-end h-[30px] cursor-pointer" onClick={() => setCurrent("About")}>
          <h4 className="text-gray-text h-[30px] self-center" style={current === 'About' ? { "color": "#EEF7FF" } : { "color": "#7D8082" }}>About</h4>
        </div>
        <div className="flex w-[50px] justify-end h-[30px] cursor-pointer" onClick={() => setCurrent("Projects")}>
          <h4 className="text-gray-text h-[30px] self-center" style={current === 'Projects' ? { "color": "#EEF7FF" } : { "color": "#7D8082" }}>Projects</h4>
        </div>
        <div className="flex w-[50px] justify-end h-[30px] cursor-pointer" onClick={() => setCurrent("Experience")}>
          <h4 className="text-gray-text h-[30px] self-center" style={current === 'Experience' ? { "color": "#EEF7FF" } : { "color": "#7D8082" }}>Experience</h4>
        </div>
        <div className="flex w-[50px] justify-end h-[30px] cursor-pointer" onClick={() => setCurrent("Contact")}>
          <h4 className="text-gray-text h-[30px] self-center" style={current === 'Contact' ? { "color": "#EEF7FF" } : { "color": "#7D8082" }} >Contact</h4>
        </div>
      </div>
      <div className="h-[150px]"></div>
    </div>
  )
}

export default NavBar