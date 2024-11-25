import interdesk from "../../../imgs/desktop/image-interactive.jpg"
import intermob from "../../../imgs/mobile/image-interactive.jpg"

function Info() {
  return (
    <>
    <diV className="flex flex-col md:flex-row px-10 relative max-w-[1100px] mt-10">
      <img className="max-w-[700px] hidden md:block" src={interdesk} alt=""/>
      <img className="w-full md:hidden" src={intermob} alt=""/>
      <div className="bg-white md:absolute bottom-0 right-0 p-5 w-full md:w-1/2 top-36">
        <h2 className="uppercase text-2xl md:text-5xl">The Leader In Interactive VR</h2>
        <p className="mt-5 text-slate-600">
          Founden in 2011 ,Loopstudios has been producing world-class virtual reality projects for 
          some of the best companies arround the globe. Our award-winning creations have transformed
          business through digital experiences that bind to their brand.
          </p>
      </div>
    </diV>
    </>
  )
}

export default Info