import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from 'prop-types'; 
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
 const data = [
    {
      images: "/Quotation.png",
      feature: "EFFICIENCY",
      Description: "Lorem Epsum",
      numberData: {
        recent: 1.921,
        arrow: "Down",
        change: "+0.0015",
        changePercentage: "+0.13",
      },
      textColor:"white",
      price: "0.00 USD",
    },
    {
      images: "/Quotation (2).png",
      feature: "TIME TO MARKET",
      Description: "Lorem Epsum",
      numberData: {
        recent: 327176,
        arrow: "Up",
        change: "-97914.00",
        changePercentage: "-23.03",
      },
      textColor:"white",
  
      price: "131,040,723,108 JPY",
    },
    {
      images: "/Quotation (3).png",
      feature: "TECH DEBT",
      Description: "Lorem Epsum",
      numberData: {
        recent: 1.1763,
        arrow: "Up",
        change: "+0.0015",
        changePercentage: "+0.13",
      },
      textColor:"black",
      price: "0.00 USD",
    },
    {
      images: "/Quotation (4).png",
      feature: "PREDICTABILITY",
      Description: "Lorem Epsum",
      numberData: {
        recent: 0.0031301,
        arrow: "Down",
        change: "-0.00050430",
        changePercentage: "-13.88",
      },
      textColor:"white",
  
      price: "1,566 Btc",
    },
  ];
  
const Section2 = () => {
  return (
    <div className="grid grid-cols-4 grid-flow-col gap-4">
      {data.map((d, i) => (
        <Card key={i} data={d} />
      ))}
    </div>
  );
};


const Card = ({ data }) => { // Using object destructuring for the data prop
  return (
    <div className={`card relative text-${data.textColor} hover:scale-105 transition-all ease-in-out duration-300 min-w-40 min-h-32`}>
      <img src={data.images} alt="image" className="h-auto w-full min-w-40 min-h-32"/>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start ps-8 ">
        <p className={` text-lg font-normal mb-1`}>{data.feature}</p>
        <p className={` text-xs mb-1 `}>{data.Description || "Description not available"}</p> 
        <p className={` flex flex-row items-center text-2xl font-semibold mb-1`}>{data.numberData.recent} <span className="ms-2">{data.numberData.arrow=="Up" ? <FontAwesomeIcon icon={faCaretUp} className={`text-${data.textColor} text-lg`} /> : <FontAwesomeIcon icon={faCaretDown} className={`text-${data.textColor} text-lg`} />}
</span></p>
        <div className="text-xs flex flex-row">
            <p className={`  mb-1`}>{data.numberData.change}</p>
            <p className={` ms-1 mb-1`}>({data.numberData.changePercentage}%)</p>
        </div>
        <p className=" text-xs font-light">{data.price || "Price not available"}</p> 
      </div>
    </div>
  );
};


Card.propTypes = {
    data: PropTypes.shape({
      images:PropTypes.string,
      textColor:PropTypes.string,
      feature: PropTypes.string.isRequired,
      Description: PropTypes.string,
      numberData:PropTypes.shape({
        recent:PropTypes.number,
        arrow:PropTypes.string,
        change: PropTypes.string,
        changePercentage:PropTypes.string
      }),
      price: PropTypes.number
    }).isRequired
  };
  

export default Section2;
