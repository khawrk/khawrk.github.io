import { useState } from "react"

const NavBar = () => {
  const [current, setCurrent] = useState<string>("Home")

  return (
    <div className="z-10 hidden sm:flex flex-row bg-transparent absolute right-0 justify-center items-center h-[90vh] gap-4 pr-4">
      <div className="h-auto flex flex-col gap-6 justify-center text-[14px]">
        <div className="flex font-bold w-[70px] justify-end gap-3 h-[40px] cursor-pointer" onClick={() => setCurrent("Home")}>
          <h4 className="text-gray-text h-[30px] w-[58px] self-center" style={current === 'Home' ? { "color": "#EEF7FF" } : { "color": "#7D8082" }}>Home</h4>
        </div>
        <div className="flex font-bold w-[70px] justify-end h-[40px] cursor-pointer  hover:text-orange-text" onClick={() => setCurrent("About")}>
          <h4 className="text-gray-text h-[30px] w-[58px] self-center" style={current === 'About' ? { "color": "#EEF7FF" } : { "color": "#7D8082" }}>About</h4>
        </div>
        <div className="flex font-bold w-[70px] justify-end  h-[40px] cursor-pointer" onClick={() => setCurrent("Projects")}>
          <h4 className="text-gray-text h-[30px] w-[58px] self-center" style={current === 'Projects' ? { "color": "#EEF7FF" } : { "color": "#7D8082" }}>Projects</h4>
        </div>
        <div className="flex font-bold w-[70px] gap-5 justify-start h-[40px] cursor-pointer" onClick={() => setCurrent("Experience")}>
          <h4 className="text-gray-text h-[30px] w-[58px] self-center" style={current === 'Experience' ? { "color": "#EEF7FF" } : { "color": "#7D8082" }}>Experience</h4>
        </div>
        <div className="flex font-bold w-[70px] justify-end gap-3 h-[40px] cursor-pointer" onClick={() => setCurrent("Contact")}>
          <h4 className="text-gray-text h-[30px] w-[58px] self-center" style={current === 'Contact' ? { "color": "#EEF7FF" } : { "color": "#7D8082" }} >Contact</h4>
        </div>
      </div>
      <div className="h-[300px] bg-gray-text w-[2px] gap-6 flex flex-col rounded-lg">
        <div className="h-[45px]  w-[2px] self-end flex rounded-lg" style={current === 'Home' ? { "backgroundColor": "#EEF7FF" } : { "backgroundColor": "#7D8082" }}></div>
        <div className="h-[45px]  w-[2px] self-end flex rounded-lg" style={current === 'About' ? { "backgroundColor": "#EEF7FF" } : { "backgroundColor": "#7D8082" }}></div>
        <div className="h-[45px]  w-[2px] self-end flex rounded-lg" style={current === 'Projects' ? { "backgroundColor": "#EEF7FF" } : { "backgroundColor": "#7D8082" }}></div>
        <div className="h-[45px] w-[2px] self-end flex rounded-lg" style={current === 'Experience' ? { "backgroundColor": "#EEF7FF" } : { "backgroundColor": "#7D8082" }}></div>
        <div className="h-[45px] w-[2px] self-end flex rounded-lg" style={current === 'Contact' ? { "backgroundColor": "#EEF7FF" } : { "backgroundColor": "#7D8082" }}></div>
      </div>
    </div>
  )
}

export default NavBar