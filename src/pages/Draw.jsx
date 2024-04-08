
import { Stage, Layer, Line } from 'react-konva';
import PropTypes from 'prop-types'; 


const Draw = () => {
  return (
    <div className="m-8 p-8 flex flex-col justify-center items-center overflow-x-auto">
        <div className=" ms-28 flex flex-row items-center border-b-2 pb-8 ps-8">

            <ShapeWithText heading='Approve Content' />
            <img src="/Arrow 3.png" alt="" className='h-[25px] ms-1' />
            <ShapeWithText heading='Create Content'/>
            <img src="/Arrow 3.png" alt="" className='h-[25px] ms-1' />
            <ShapeWithText heading='Approve Content'/>
            <img src="/Arrow 3.png" alt="" className='h-[25px] ms-1' />
            <ShapeWithText heading='Run Sample Test'/>
            <img src="/Arrow 3.png" alt="" className='h-[25px] ms-1' />

           <div className="flex flex-col relative">

<Shape /> <div className='absolute h-[73px] w-[137px] flex flex-col text-left ms-3 leading-tight text-lg  text-white font-medium justify-center items-center'>Launch Full Campaign</div>
      </div> 
        </div>

      <div className="flex flex-row items-center justify-between w-full text-gray-800  ">
        <p className='w-32'>Active Time</p>
        <div className="grid grid-cols-5 w-full text-center gap-40  ps-7 border-b-2 py-4">

        <p className='w-[137px]'>1 Day</p>
        <p className='w-[137px]'>2 Days</p>
        <p className='w-[137px]'>4 Hours</p>
        <p className='w-[137px]'>4 Hours</p>
        <p className='w-[137px]'>1 Day</p>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between w-full text-gray-800  ">
        <p className='w-32'>Wait Time</p>
        <div className="grid grid-cols-4 w-full text-center gap-40  ps-7 py-4">

        </div>
      </div>


    </div>
  );
};

const ShapeWithText=({heading})=>{
    return (
        <>
        <div className="flex flex-col relative">

        <Shape /> <div className='absolute h-[73px] w-[90px] flex flex-col text-left ms-3 leading-tight text-lg text-white font-medium justify-center items-center'>{heading}</div>
              </div>
              <img src="/Arrow 3.png" alt="" className='h-[25px] ms-1' />
              <div className="flex flex-col relative h-12 w-12">
             <div className="h-12 w-12">

              <img src="/Time Circle.png" alt="" className='h-12 w-12 ' />
             </div>
              <img src="/Pending Approval Button.png" alt="" className='h-[20px] w-[20px] absolute bottom-0 right-0' />
  
              </div>
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
    heading: PropTypes.string.isRequired 
  };
    
export default Draw;
