import { data } from "../data/drawData"
import { Stage, Layer, Line } from 'react-konva';
import PropTypes from 'prop-types'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";


const Activities = () => {
  return (
    <div className="flex flex-col items-center justify-center overflow-x-auto">
      <div className="flex flex-row items-start justify-center p-8 m-8 w-full">
        <div className="grid grid-rows-3 content-center h-full font-medium text-gray-500 w-28">
          <div className="flex h-full">&nbsp;</div>
          <div className="flex h-full w-auto">Active Time</div>
          <div className="flex h-full">Wait Time</div>
        </div>
        <div className="flex flex-row items-start justify-center w-full border-b-4 border-secondary relative">

        {
          
          data.map((d,i)=>{
            return(
              <>
              <div key={i} className="flex flex-col justify-center items-center">
                <div className="flex flex-row items-center justify-start  pb-8">
                  
                   <ShapeWithText heading={d.heading} endTask={d.endTask} />

                </div>
                
                <div className="flex flex-row items-center justify-left border-y-2 py-4 w-full text-left"><div className={`w-${d.endTask?'1/2':'1/3'} text-center`}>{d.activeTime}</div></div>
             <div className="w-full h-full min-h-[151px]"><div className="flex flex-row items-center justify-end w-full h-full"><div className={`bg-${d.endTask?'tertiary':'[#F1F7ED]'} py-8 text-left px-4 w-1/2 h-full  flex items-center min-h-[150px]`}>{d.waitTime}</div></div></div>
              </div>
              </>
            )
          })
        }
<FontAwesomeIcon icon={faAngleLeft} className="bottom-[-16px] text-secondary left-[-11px] absolute h-7 w-7"/>
<FontAwesomeIcon icon={faAngleRight} className="bottom-[-16px] text-secondary right-[-11px] absolute h-7 w-7"/>
        </div>
      <button><img src="/Plus.png" alt="plus" className=" ms-8 mt-3" /></button>
      </div>
      <div className="flex flex-row justify-around items-center py-2 font-bold w-full px-36 text-lg text-gray-600">
        <p>Flow Time = 47 Days</p>
        <p>Total Active Time = 5 Days</p>
        <p>Flow Efficiency = 11%</p>
      </div>
      <div className="flex flex-row justify-center items-center self-start w-1/2">

      <button className="bg-primary rounded-3xl px-8 py-2 mt-12 text-lg text-white">Save</button>
      </div>
    </div>
  )
}

const ShapeWithText=({heading,endTask})=>{
  return (
      <>
      <div className="flex flex-col relative">

      <Shape /> <div className='absolute h-[73px] w-[90px] flex flex-col text-left ms-3 leading-tight text-base text-white font-semibold justify-center items-center'>{heading}</div>
            </div>
           {!endTask? ( <><img src="/Arrow 3.png" alt="" className='h-[25px] ms-1' />
            <div className="flex flex-col relative h-12 w-12">
           <div className="h-12 w-12">

            <img src="/Time Circle.png" alt="" className='h-12 w-12 ' />
           </div>
            <img src="/Pending Approval Button.png" alt="" className='h-[20px] w-[20px] absolute bottom-0 right-0' />

            </div>
            <img src="/Arrow 3.png" alt="" className='h-[25px] ms-1' />
</>):""
}
      </>
  );
};

const Shape = () => {
return (
  <Stage width={137} height={73}>
    <Layer>
      <CustomShape />
    </Layer>
  </Stage>
);
};

const CustomShape = () => {
const points = [
  0, 0,    // Start from the bottom-left corner
  0, 0,   // Move diagonally up-right
  90, 0,   // Move diagonally down-right
  137, 36,  // Move right to complete the shape
  90, 73,  // Move diagonally up-left
  0, 73,  // Move diagonally down-left
  0,60// Move left to the starting point
];

return <Line closed points={points} fill="#539BBB" />;
};

ShapeWithText.propTypes = {
  heading: PropTypes.string.isRequired ,
  endTask:PropTypes.bool
};
export default Activities