

function Footer() {
  return (
    <>
    <div className="bg-black px-10 py-10 mt-20 flex flex-col items-center gap-8 md:gap-0 md:flex-row md:justify-between">
        <div className="">
            <h2 className="text-white font-bold">loopstudios</h2>
            <ul className="flex flex-col md:flex-row items-center gap-5 mt-5">
                <li><a className="cursor-pointer text-white relative shape">About</a></li>
                <li><a className="cursor-pointer text-white relative shape">Careers</a></li>
                <li><a className="cursor-pointer text-white relative shape">Events</a></li>
                <li><a className="cursor-pointer text-white relative shape">Products</a></li>
                <li><a className="cursor-pointer text-white relative shape">Support</a></li>
            </ul>
        </div>
        <div className="text-white">
            <ul className="flex justify-center md:justify-end items-center gap-5">
                <li className="relative cursor-pointer shape"><i className="fa-brands fa-facebook text-xl"></i></li>
                <li className="relative cursor-pointer shape"><i className="fa-brands fa-twitter text-xl"></i></li>
                <li className="relative cursor-pointer shape"><i className="fa-brands fa-instagram text-xl"></i></li>
                <li className="relative cursor-pointer shape"><i className="fa-brands fa-pinterest text-xl"></i></li>
            </ul>
            <div className="mt-5 text-[12px] md:text-[18px]">
            <span>&copy;<span>2024 loopstudios all right reserved</span></span>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer