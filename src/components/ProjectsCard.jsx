import { FiExternalLink } from "react-icons/fi";
import AssignedLogo from '../assets/AssignedLogo.png'


function projectCard ({details_link,link,file,project_title,link_title}) {
    return (
        <li className='lg:max-w-[368px]'> 
        <a href={`/work/${details_link}`}>
        <div className="w-full hover:translate-y-[-10px] duration-300">
        <div className="flex h-44 bg-[#f0eff99e] justify-center items-center">
          <div className='w-44'>
          <img src={file} className='w-full' alt="" />
          </div>
        </div>
          <div className="bg-white p-9 shadow-md" >
              <h5 className='font-bold text-lg text-black'>{project_title}</h5>
              <a href={link} target="_blank">
                  <span className='px-3 py-1 inline-flex rounded-[4px] text-[#0068d1] items-center bg-[#ebf5ff]'><FiExternalLink value={{ size: "1rem" }} className="mr-2"/>{link_title}
                  </span>
                  </a>
          </div>
        </div>
        </a>
        </li>
    )
}

export default projectCard