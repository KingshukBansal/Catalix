import { faCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import VideoComponent from "../components/VideoComponent"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="tablet:min-h-fit h-full flex flex-col w-full ">
      <div className="flex flex-col tablet:flex-row w-full tablet:justify-between items-center  large-screen:items-start tablet:relative h-full">
        <div className="flex flex-col items-center tablet:h-full  tablet:w-3/5 px-4 tablet:p-8  ">
          <h1 className="text-xl tablet:text-2xl large-screen:text-4xl tracking-wider my-2 text-left w-full ">Set-up Catalix for Success</h1>
          <p className="text-gray-500 textbase tablet:text-lg large-screen:text-2xl my-2 w-full text-left">Get Catalix up to date or start your transformation by following the guide below.</p>
          <div className="flex flex-col justify-center items-center bg-white tablet:w-full  rounded-2xl drop-shadow-xl p-6 px-8 tablet:px-24 mt-2">
               <p className="py-2 px-8 text-white bg-secondary rounded-3xl w-fit text-xl mb-4">2/6</p>
               <p className="text-2xl text-center large-screen:text-3xl my-8">Build your development value stream map</p>
               <Link to='/draw'><button className="rounded-3xl px-8 py-2 my-4 text-xl bg-primary text-white font-medium hover:scale-110 transition-all ease-in-out duration-300 ">Start Building</button></Link>
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
        <div className=" h-full pt-16  border-[2px] border-gray-200 flex flex-col bg-white w-full tablet:w-2/5 max-w-sm px-16 mt-4 pb-4 tablet:pb-0 py-4 rounded-2xl">
          <p className="text-2xl tablet:text-3xl font-[350] mb-4 tablet:mb-8 tracking-wider">Get ready to transform</p>
          <p className="text-base tablet:text-lg font-light tracking-wide text-gray-600 mb-6">Here’s a video to get started. As your transformation progresses, you’ll get fresh tips and insights here.</p>
          <VideoComponent/>
      </div>
    </div>
    </div>
  )
}

export default Home