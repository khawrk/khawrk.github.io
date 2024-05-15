import Emoji from '../assets/50xIcon.svg'

const Header = () => {
    return (
        <nav className='bg-transparent flex w-full justify-between absolute top-0 right-0 py-5 px-5'>
            <div className='flex justify-center items-center gap-4'>
                <img src={Emoji} alt="emoji" />
                <h1 className='text-default-text-color text-[20px] font-500 '>Khaw</h1>
            </div>
            <div className='border-[1px] border-default-text-color px-3 py-2 flex justify-center rounded-lg'>
                <a href="#" className='p-0 m-0 flex text-default-text-color text-[16px] font-bold'><button >Let's Talk</button></a>
            </div>
        </nav>
    )
}

export default Header