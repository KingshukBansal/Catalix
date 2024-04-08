
const Section1 = () => {
    return (
      <div className=" flex flex-row justify-around pt-2 my-4">
          <div className=" rounded-2xl w-full mx-4 border-[1px] border-black ms-2 p-1 py-2 text-xl font-medium text-center hover:bg-primary hover:text-white transition-all ease-in-out duration-300 "><span className="font-medium text-2xl me-2">+</span>Create Report</div>
          <div className=" rounded-2xl w-full mx-4 border-[1px] border-black ms-2 p-1 py-2 text-xl font-medium text-center hover:bg-primary hover:text-white transition-all ease-in-out duration-300 ">Select Duration</div>
          <div className=" rounded-2xl w-full mx-4 border-[1px] border-black ms-2 p-1 py-2 text-xl font-medium text-center hover:bg-primary hover:text-white transition-all ease-in-out duration-300 ">Share This Dashboard</div>
          <div className=" rounded-2xl w-full mx-4 border-[1px] border-black ms-2 p-1 py-2 text-xl font-medium text-center hover:bg-primary hover:text-white transition-all ease-in-out duration-300 ">Compare with Duration</div>
      </div>
    )
  }
  
  export default Section1