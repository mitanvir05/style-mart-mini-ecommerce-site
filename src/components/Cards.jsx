/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Cards = ({ filteredItems }) => {
  return (
    <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center justify-center gap-12 shadow-sm">
      {filteredItems.map((item) => (
        <div key={item.id}>
          <Link to={`/shop/${item.id}`}>
            <img src={item.image} alt="" className="mx-auto w-full hover:scale-105 transition-all duration-200"/>
          </Link>
          <div className="mt-4 px-4">
            <h4 className="text-base font-semibold mb-2">{item.title}</h4>
            <div className="flex justify-between">
              <h3 className="text-black ">{item.category}</h3>
              <h3 className="font-semibold">${item.price}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
