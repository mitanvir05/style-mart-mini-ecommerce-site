import { Link } from "react-router-dom";
import logo1 from "../../assets/brand/brand-1.png";
import logo2 from "../../assets/brand/brand-2.png";
import logo3 from "../../assets/brand/brand-3.png";
import logo4 from "../../assets/brand/brand-4.png";
import logo5 from "../../assets/brand/brand-5.png";
import img1 from "../../assets/grid/img1.png";
import img2 from "../../assets/grid/img2.png";
import img3 from "../../assets/grid/img3.png";
import img4 from "../../assets/grid/img4.png";
import img5 from "../../assets/grid/img5.png";
const companyLogo = [
  { id: 1, img: logo1 },
  { id: 2, img: logo2 },
  { id: 3, img: logo3 },
  { id: 4, img: logo4 },
  { id: 5, img: logo5 },
];
const Category = () => {
  return (
    <div className="max-w-screen-2xl mx-auto container xl:px-28 px-4 py-28">
      {/* brand logo*/}

      <div className="flex items-center justify-around flex-wrap gap-5 py-5">
        {companyLogo.map(({ id, img }) => (
          <div key={id}>
            <img src={img} alt="" />
          </div>
        ))}
      </div>
      {/* categoiry grid*/}
      <div className="m-8 flex flex-col md:flex-row items-center gap-4">
        <p className="font-semibold uppercase md:-rotate-90 text-center bg-black text-white md:p-1.5 p-2 rounded-sm inline-flex">
          Explore new and popular styles
        </p>
        <div>
          <Link to="/">
            <img src={img1} alt="" className="w-full hover:scale-105 transition-all duration-300"/>
          </Link>
        </div>
        <div className="md:w-1/2">
            <div className="grid grid-cols-2 gap-2">
            <img src={img2} alt="" className="w-full hover:cursor-pointer hover:scale-105 transition-all duration-300"/>
            <img src={img3} alt="" className="w-full hover:cursor-pointer hover:scale-105 transition-all duration-300"/>
            <img src={img4} alt="" className="w-full hover:cursor-pointer hover:scale-105 transition-all duration-300"/>
            <img src={img5} alt="" className="w-full hover:cursor-pointer hover:scale-105 transition-all duration-300"/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
