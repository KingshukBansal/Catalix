import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Section3 = () => {
  return (
    <div className="grid grid-cols-3 gap-4 mx-8 my-4 justify-content-start">
      <div className="flex flex-col bg-white rounded-2xl border-2 border-grey-500 p-4 py-8 w-full">
        <div className="flex justify-end mb-4">
          <FontAwesomeIcon icon={faCircle} className="text-green-500 w-4 h-4" />
        </div>
        <h1 className="text-xl font-bold mb-4">On Time</h1>
        <div className="text-lg font-light">
          <p className="w-full flex flex-row justify-between">Completed Iterations <span className="text-left font-semibold">7</span></p>
          <p className="w-full flex flex-row justify-between">Total Iterations <span className="text-left font-semibold">9</span></p>
          <p className="w-full flex flex-row justify-between">%Iteration Done <span className="text-left font-semibold">77.8%</span></p>
        </div>
      </div>
      <div className="flex flex-col bg-white rounded-2xl border-2 border-grey-500 p-4 py-8 w-full">
        <div className="flex justify-end mb-4">
          <FontAwesomeIcon icon={faCircle} className="text-green-500 w-4 h-4" />
        </div>
        <h1 className="text-xl font-bold mb-4">On Scope</h1>
        <div className="text-lg font-light">
          <p className="w-full flex flex-row justify-between">Story Points Done <span className="text-left font-semibold">3200</span></p>
          <p className="w-full flex flex-row justify-between">Total Story Points <span className="text-left font-semibold">4230</span></p>
          <p className="w-full flex flex-row justify-between">%Stories Done <span className="text-left font-semibold">70.9%</span></p>
        </div>
      </div>
      <div className="flex flex-col bg-white rounded-2xl border-2 border-grey-500 p-4 py-8 w-full">
        <div className="flex justify-end mb-4">
          <FontAwesomeIcon icon={faCircle} className="text-red-500 w-4 h-4" />
        </div>
        <h1 className="text-xl font-bold mb-4">On Velocity</h1>
        <div className="text-lg font-light">
          <p className="w-full flex flex-row justify-between">Average Velocity <span className="text-left font-semibold">428.6</span></p>
          <p className="w-full flex flex-row justify-between">Required Velocity <span className="text-left font-semibold">615.0</span></p>
        </div>
      </div>
    </div>
  );
};

export default Section3;
