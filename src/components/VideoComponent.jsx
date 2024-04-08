import { useState } from 'react';

function VideoComponent() {
  const [currentTime] = useState({ minutes: 2, seconds: 36 }); // Change initial state to a number
  const [totalTime] = useState({ minutes: 3, seconds: 36 });

  // Calculate progress percentage
  const progress = (currentTime.minutes * 60 + currentTime.seconds) / (totalTime.minutes * 60 + totalTime.seconds) * 100;

  return (
    <button className=' hover:scale-105 transition-all ease-in-out duration-300'>
      <div style={{ position: 'relative' }} className="w-5/6 rounded-2xl overflow-hidden">

        <img src="Rene 1.png" alt="rene" className=' w-full' />
        <div
          className="w-full h-2 bg-gray-200 absolute bottom-0 left-0"
          >
          <div
            className="h-full bg-gray-800"
            style={{ width: `${progress}%` }}
            />
        </div>
        <div
          className='flex flex-row items-center scale-110 bottom-5 left-3 absolute text-white px-2 py-1 rounded-xl bg-black'
        >
          <img src="Play.png" alt="play" className='h-5 w-5 me-2' />
          {currentTime.minutes + ":" + currentTime.seconds}
        </div>
      </div>
    </button>
  );
}

export default VideoComponent;
