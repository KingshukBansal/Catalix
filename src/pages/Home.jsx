import { faCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import VideoComponent from "../components/VideoComponent"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="min-h-fit h-full flex flex-col w-full ">
      <div className="flex flex-row w-full justify-between relative h-full">
        <div className="flex flex-col w-3/5 p-8">
          <h1 className="text-2xl tracking-wider my-2">Set-up Catalix for Success</h1>
          <p className="text-gray-500 text-lg my-2">Get Catalix up to date or start your transformation by following the guide below.</p>
          <div className="flex flex-col justify-center items-center bg-white w-full rounded-2xl drop-shadow-xl p-6 px-24 mt-2">
               <p className="py-2 px-8 text-white bg-secondary rounded-3xl w-fit text-xl mb-4">2/6</p>
               <p className="text-2xl text-center my-8">Build your development value stream map</p>
               <Link to='draw'><button className="rounded-3xl px-8 py-2 my-4 text-xl bg-primary text-white font-medium hover:scale-110 transition-all ease-in-out duration-300 ">Start Building</button></Link>
               <ul className="flex flex-row text-2xl text-gray-500">
                <li><FontAwesomeIcon icon={faCircle} className="h-[6px] w-[6px] ms-1 hover:-translate-y-1 duration-100 transition-all ease-in-out"/></li>
                <li><FontAwesomeIcon icon={faCircle} className="h-[6px] w-[6px] ms-1 text-secondary hover:-translate-y-1 duration-100 transition-all ease-in-out"/></li>
                <li><FontAwesomeIcon icon={faCircle} className="h-[6px] w-[6px] ms-1 hover:-translate-y-1 duration-100 transition-all ease-in-out"/></li>
                <li><FontAwesomeIcon icon={faCircle} className="h-[6px] w-[6px] ms-1 hover:-translate-y-1 duration-100 transition-all ease-in-out"/></li>
                <li><FontAwesomeIcon icon={faCircle} className="h-[6px] w-[6px] ms-1 hover:-translate-y-1 duration-100 transition-all ease-in-out"/></li>
                <li><FontAwesomeIcon icon={faCircle} className="h-[6px] w-[6px] ms-1 hover:-translate-y-1 duration-100 transition-all ease-in-out"/></li>
                
               </ul>
          </div>
        </div>
        <div className=" h-full pt-16  border-[2px] border-gray-200 flex flex-col bg-white w-2/5 max-w-sm px-16">
          <p className="text-3xl font-[350] mb-8 tracking-wider">Get ready to transform</p>
          <p className="text-lg font-light tracking-wide text-gray-600 mb-6">Here’s a video to get started. As your transformation progresses, you’ll get fresh tips and insights here.</p>
          <VideoComponent/>
      </div>
    </div>
    </div>
  )
}

export default Home