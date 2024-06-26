
const Section1 = () => {
    return (
      <div className=" flex flex-row tablet:justify-around pt-2 my-4 text-xs no-scrollbar tablet:text-base font-ligth tablet:font-medium items-start tablet:items-center tablet:w-auto overflow-x-auto ">
        <div className="flex fex-row justify-around min-w-[75vh] tablet:w-full">

          <div className=" rounded-3xl w-full mx-4 border-[1px] border-black ms-2 px-1 py-2 text-center hover:bg-primary hover:text-white transition-all ease-in-out duration-300 "><span className="font-medium  me-2">+</span>Create Report</div>
          <div className=" rounded-3xl w-full mx-4 border-[1px] border-black ms-2 px-1 py-2 text-center hover:bg-primary hover:text-white transition-all ease-in-out duration-300 ">Select Duration</div>
          <div className=" rounded-3xl w-full mx-4 border-[1px] border-black ms-2 px-1 py-2 text-center hover:bg-primary hover:text-white transition-all ease-in-out duration-300 ">Share This Dashboard</div>
          <div className=" rounded-3xl w-full mx-4 border-[1px] border-black ms-2 px-1 py-2 text-center hover:bg-primary hover:text-white transition-all ease-in-out duration-300 ">Compare with Duration</div>
        </div>
      </div>
    )
  }
  
  export default Section1