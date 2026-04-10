import { Link } from "react-scroll";

type Props = {
  current: string,
  setCurrent: (current: string) => void;
}

const navItems = ['Home', 'About', 'Projects', 'Experience', 'Contact'];

const NavBar = ({ current, setCurrent }: Props) => {
  return (
    <div className="z-50 hidden sm:flex fixed right-6 top-1/2 -translate-y-1/2 flex-col items-end gap-5">
      {navItems.map((item) => (
        <Link
          key={item}
          to={item === 'Home' ? 'Home1' : item}
          smooth={true}
          duration={500}
          onClick={() => setCurrent(item)}
          className="group flex items-center gap-3 cursor-pointer"
        >
          <span 
            className={`text-xs font-medium transition-all duration-300 ${
              current === item ? 'text-white opacity-100' : 'text-white/0 group-hover:text-white/60'
            }`}
          >
            {item}
          </span>
          <div 
            className={`w-3 h-3 rounded-full transition-all duration-300 shadow-lg ${
              current === item 
                ? 'bg-orange-text shadow-orange-text/50 scale-125' 
                : 'bg-white/60 group-hover:bg-white'
            }`}
          />
        </Link>
      ))}
    </div>
  )
}

export default NavBar
