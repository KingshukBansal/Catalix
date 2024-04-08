import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faSearch,faBell, faCommentDots, faGear } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleInputFocus = () => {
    setIsExpanded(true);
  };

  const handleInputBlur = () => {
    setIsExpanded(false);
  };

  const handleClearSearch = () => {
    setIsExpanded(false);
  };

  return (
    <div className="flex flex-row justify-around mt-4 ms-4 relative z-10">
      <div
        className={`search w-full transition-all ease-in-out duration-300 ${
          isExpanded ? "scale-105 border-primary" : ""
        }`}
      >
        <div className="relative">
          <div className={`absolute top-0 left-0 bg-white p-[0.5px] text-secondary text-xs mt-[-8px] ms-28 ${isExpanded&&"text-primary"}`}>
            Search
          </div>

          <input
            type="text"
            className="border-[1px] border-gray-700 rounded-md w-4/5 ms-24 p-2 h-10 pl-20 transition-all duration-300"
            placeholder="Search by profile, setting, artifact etc.."
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
          <div className="absolute top-0 left-0 flex items-center h-full ms-28">
            <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
          </div>
          {isExpanded && (
            <div className="absolute top-0 right-0 me-20 flex items-center h-full mr-2">
              <FontAwesomeIcon
                icon={faClose}
                className="text-gray-400 cursor-pointer"
                onClick={handleClearSearch}
              />
            </div>
          )}
        </div>
      </div>
      <div className="profile w-full flex flex-row items-center text-secondary justify-end me-4">
        <button className="me-4 bg-white w-8 h-8   rounded-lg shadow-1xl hover:scale-110  transition-all ease-in-out duration-300"><FontAwesomeIcon icon={faBell} /></button>
        <button className="me-4 bg-white w-8 h-8   rounded-lg shadow-1xl hover:scale-110  transition-all ease-in-out duration-300"><FontAwesomeIcon icon={faCommentDots} /></button>
        <button className="me-4 bg-white w-8 h-8   rounded-lg shadow-1xl hover:scale-110  transition-all ease-in-out duration-300"><FontAwesomeIcon icon={faGear} className="" /></button>
        <div className="rounded-full h-11 w-11 overflow-hidden me-4 bg-white  shadow-1xl hover:scale-110  transition-all ease-in-out duration-300">
        <img src="/profile.jpeg" alt="profile photo" className="h-11 w-auto"/>

        </div>
      </div>
    </div>
  );
};

export default Header;
