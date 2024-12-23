import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faStopwatch,
  faChartSimple,
  faRocket,
  faLayerGroup,
  faGear,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons"; // Import the specific icon
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Sidebar = ({ setSideBarOpen }) => {
  return (
    <div className=" h-fit large-screen:h-full w-full flex justify-center  ">
      <div className="flex flex-col bg-primary rounded-[3rem] h-full w-11/12 tablet:w-full shadow-3xl">
        <button
          className="w-full flex flex-row justify-end right-0 pt-8 pe-6 "
          onClick={() => {
            setSideBarOpen(false);
          }}
        >
          <img
            src="/Left circle.png"
            alt="back"
            className="w-8 h-8 rotate-90 tablet:rotate-0  hover:scale-110 transition-all ease-in-out duration-300"
          />
        </button>
        <div className="tablet:scale-110 large-screen:scale-125 box text-3xl large-screen:text-4xl tablet:text-3xl mt-2 tablet:mt-6 font-bold text-white text-center flex flex-row justify-center items-center ">
          <img src="/Box 3.svg" className="h-12 w-12 large-screen:h-16 large-screen:w-16  "/>
          Catalix
        </div>
        <div className="grid grid-rows-5 gap-4  m-4 my-8 text-white items-center text-xl large-screen:text-2xl large-screen:px-2 font-light">
          <Link to={"/home"}>
            <li className="list-none hover:scale-105 hover:bg-secondary transition-all ease-in-out duration-300 px-4 py-2  w-99/100 rounded-2xl">
              <FontAwesomeIcon icon={faHouse} className="me-4" />
              Home
            </li>
          </Link>
          <Link to={"/activities"}>
            <li className="list-none  hover:scale-105 hover:bg-secondary transition-all ease-in-out duration-300 px-4 py-2   w-99/100 rounded-2xl">
              <FontAwesomeIcon icon={faStopwatch} className="me-4" />
              Activities
            </li>
          </Link>
          <Link to={"/analytics"}>
            <li className="list-none  hover:scale-105 hover:bg-secondary transition-all ease-in-out duration-300 px-4 py-2 w-99/100 rounded-2xl">
              <FontAwesomeIcon icon={faChartSimple} className="me-4" />
              Analytics
            </li>
          </Link>
          <Link to={"/transformation"}>
            <li className="list-none  hover:scale-105 hover:bg-secondary transition-all ease-in-out duration-300 px-4  py-2 w-99/100 rounded-2xl">
              <FontAwesomeIcon icon={faRocket} className="me-4" />
              Transformation
            </li>
          </Link>
          <Link to={"/library"}>
            <li className="list-none hover:scale-105 hover:bg-secondary transition-all ease-in-out duration-300 px-4  py-2 w-99/100 rounded-2xl">
              <FontAwesomeIcon icon={faLayerGroup} className="me-4" />
              Library
            </li>
          </Link>
        </div>
        <hr className="tablet:mx-4 tablet:mt-8 mt-8 mx-2" />
        <div className="grid grid-rows-2 gap-4  m-4 my-8 text-white items-center text-xl large-screen:text-2xl large-screen:px-2 font-light">
            <li className="list-none hover:scale-105 hover:bg-secondary transition-all ease-in-out duration-300 px-4  py-2 w-99/100 rounded-2xl">
              <FontAwesomeIcon icon={faGear} className="me-4" />
              Settings
            </li>
            <li className="list-none hover:scale-105 hover:bg-secondary transition-all ease-in-out duration-300 px-4  py-2 w-99/100 rounded-2xl">
              <FontAwesomeIcon icon={faRightFromBracket} className="me-4" />
              Logout
            </li>
        </div>
      </div>
    </div>
  );
};
Sidebar.propTypes = {
  sideBarOpen: PropTypes.bool,
  setSideBarOpen: PropTypes.func,
};

export default Sidebar;
