import reactLogo from '../assets/profile-picture.jpg'

function NavBar() {

return (
    <nav className='flex justify-between items-center bg-white px-5 py-3'>
    <div className='items-center flex text-base text-[#666] font-bold'>
      <img src={reactLogo} alt="" className='min-w-[40px] h-10 rounded-[50%] mr-4' srcset="" />
      <span>Ovuoba Chiagozie</span>
    </div>
      <ul className='flex justify-around text-base text-[#666] gap-16'>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
   </nav>
)

}

export default NavBar