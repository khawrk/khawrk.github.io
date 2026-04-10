import { Link } from "react-scroll";

const Header = () => {
  return (
    <nav className='fixed top-0 left-0 right-0 z-50 flex justify-between items-center py-4 px-6 sm:px-10 backdrop-blur-md bg-black/20 border-b border-white/5'>
      <div className='flex items-center gap-3'>
        <div className="w-8 h-8 rounded-full overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dev-gen-video-bWJF3RE7rfWhBD99IdJJxs9i2nkw4h.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <h1 className='text-white text-lg font-medium'>Khaw</h1>
      </div>
      <Link to="Contact" smooth={true} duration={500}>
        <button className='px-5 py-2 text-sm font-medium text-white border border-white/20 rounded-full hover:bg-white hover:text-dark-bg transition-all duration-300'>
          {"Let's Talk"}
        </button>
      </Link>
    </nav>
  )
}

export default Header
