import { FaShoppingBag } from "react-icons/fa";
import banner from "/banner/banner1.png";
const Banner = () => {
  return (
    <div className="bg-primary-bg py-12 xl:px-28 px-4">
      <div className="py-28 flex flex-col md:flex-row justify-between items-center gap-14">
        <div className="md:w-1/2">
          <h1 className="text-6xl mb-5">Collections</h1>
          <p className="text-3xl mb-7">
            you can explore ans shop many differnt collection from various
            barands here.
          </p>
          <button className="flex items-center gap-2 bg-black hover:bg-orange-500 px-6 py-2 text-white font semibold rounded-sm">
            <FaShoppingBag className="inline-flex" /> Shop Now
          </button>
        </div>
        {/* img div */}
        <div className="md:w-1/2">
          <img src={banner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
