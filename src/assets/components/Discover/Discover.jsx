import one from "../../../imgs/desktop/1.jpg"
import two from "../../../imgs/desktop/2.jpg"
import three from "../../../imgs/desktop/3.jpg"
import four from "../../../imgs/desktop/4.jpg"
import five from "../../../imgs/desktop/5.jpg"
import six from "../../../imgs/desktop/6.jpg"
import seven from "../../../imgs/desktop/7.jpg"
import eight from "../../../imgs/desktop/8.jpg"
import styles from "./discover.module.css"

import One from "../../../imgs/mobile/1.jpg"
import Two from "../../../imgs/mobile/2.jpg"
import Three from "../../../imgs/mobile/3.jpg"
import Four from "../../../imgs/mobile/4.jpg"
import Five from "../../../imgs/mobile/5.jpg"
import Six from "../../../imgs/mobile/6.jpg"
import Seven from "../../../imgs/mobile/7.jpg"
import Eight from "../../../imgs/mobile/8.jpg"


function Discover() {
  return (
    <>
    <div className={`${styles.card} px-10 mt-16`}>
        <div className="flex justify-between items-center">
            <h2 className="uppercase text-2xl m-auto md:m-0">our creations</h2>
            <button className="bg-white text-black text-2xl border-4 border-black transition-colors duration-1000 hover:text-white hover:bg-black  uppercase px-6 py-1 rounded-md hidden md:block">see all</button>
        </div>
        <div className="mt-10 flex flex-col md:flex-row flex-wrap gap">
            <div className="relative group width-gap discOpa">
                <img className="w-full hidden md:block" src={one} alt="" />
                <img className="w-full md:hidden" src={One} alt="" />
                <h3 className="uppercase discFont">deep earth</h3>
            </div>
            <div className="relative group width-gap discOpa">
            <img className="w-full hidden md:block" src={two} alt="" />
            <img className="w-full md:hidden" src={Two} alt="" />
            <h3 className="uppercase discFont">night arcade</h3>
            </div>
            <div className="relative group width-gap discOpa">
            <img className="w-full hidden md:block" src={three} alt="" />
            <img className="w-full md:hidden" src={Three} alt="" />
            <h3 className="uppercase discFont">soccer team vr</h3>
            </div>
            <div className="relative group width-gap discOpa">
            <img className="w-full hidden md:block" src={four} alt="" />
            <img className="w-full md:hidden" src={Four} alt="" />
            <h3 className="uppercase discFont">the grid</h3>
            </div>
            <div className="relative group width-gap discOpa">
            <img className="w-full hidden md:block" src={five} alt="" />
            <img className="w-full md:hidden" src={Five} alt="" />
            <h3 className="uppercase discFont">from up above var</h3>
            </div>
            <div className="relative group width-gap discOpa">
            <img className="w-full hidden md:block" src={six} alt="" />
            <img className="w-full md:hidden" src={Six} alt="" />
            <h3 className="uppercase discFont">pocket porealis</h3>
            </div>
            <div className="relative group width-gap discOpa">
            <img className="w-full hidden md:block" src={seven} alt="" />
            <img className="w-full md:hidden" src={Seven} alt="" />
            <h3 className="uppercase discFont">the curioisty</h3>
            </div>
            <div className="relative group width-gap discOpa">
            <img className="w-full hidden md:block" src={eight} alt="" />
            <img className="w-full md:hidden" src={Eight} alt="" />
            <h3 className="uppercase discFont">make it fisheye</h3>
            </div>
        </div>
    </div>
    </>
  )
}

export default Discover