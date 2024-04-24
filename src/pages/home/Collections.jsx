import collectionbg from "../../assets/images/collection-bg.png";
import zaraLogo from "../../assets/images/zara-logo.png";

const Collections = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat xl-px-28 px-4 my-20"
      style={{ backgroundImage: `url(${collectionbg})` }}
    >
      <div className="h-[580px] flex justify-between items-center ml-28  md:flex-row ">
        <div className="md:w-1/2"></div>
        <div className="md:w-1/2">
          <img src={zaraLogo} alt="" />
          <p className="text-white text-lg capitalize my-5 md:w-2/3 leading-[32px]">
            Lustrous yet understated. The new evening wear collection
            exclusively offered at the reopened Giorgio Armani boutique in Los
            Angeles.
          </p>
          <button className="bg-white text-black font-semibold px-6 py-2 text-lg rounded-sm mb-5">
            See Collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default Collections;
