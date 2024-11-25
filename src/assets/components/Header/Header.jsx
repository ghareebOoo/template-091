import { useState } from "react"
import styles from "./Header.module.css"

function Header() {

  const [menu , setMenu] = useState()

  const [bgVisible , setBgVisible] = useState(true);


  const toggleMenu = () =>{
    setMenu(!menu)
    setBgVisible(!bgVisible)
  }

  return (
   <>
   <div className={` ${styles.Header} ${bgVisible ? 'bg-mobile' : 'bg-black'} md:bg-home h-[80vh] bg-cover px-10`}>
    <div className="flex justify-between items-center pt-8 relative">
    <h1 className="text-white font-bold text-2xl">Loopstudios</h1>
    <ul className={`md:flex items-center gap-5 menuLi transition-all duration-1000 ${menu ? "flex" : "hidden"}`}>
        <li><a className="cursor-pointer text-xl text-white relative shape">About</a></li>
        <li><a className="cursor-pointer text-xl text-white relative shape">Careers</a></li>
        <li><a className="cursor-pointer text-xl text-white relative shape">Events</a></li>
        <li><a className="cursor-pointer text-xl text-white relative shape">Products</a></li>
        <li><a className="cursor-pointer text-xl text-white relative shape">Support</a></li>
    </ul>
    <i onClick = {toggleMenu} className={`text-white cursor-pointer text-2xl fa-solid ${bgVisible ? "fa-bars" : "fa-xmark"}`}></i>
    </div>
    <ul className={bgVisible ? "w-fit border border-1 border-gray-500 text-white px-3 md:px-10 py-5 mt-32" : "hidden"}>
        <li className="uppercase text-2xl">immersive</li>
        <li className="uppercase text-2xl">experience</li>
        <li className="uppercase text-2xl">that deliver</li>
    </ul>
   </div>
   </>
  )
}

export default Header