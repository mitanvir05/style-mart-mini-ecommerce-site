import { useEffect, useState } from "react";
import { FaArrowAltCircleRight, FaStar } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/products.json");
        const data = await res.json();
        const product = data.filter((p) => p.id == id);
        //console.log(product);

        setProducts(product[0]);
      } catch (error) {
        console.log("error data fetch", error);
      }
    };
    fetchData();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);
  const { title, category, price, image, status } = products;
  //console.log(id);
  return (
    <div className="mt-28 max-w-screen-2xl container mx-auto xl:px-28 px-4">
      <div className="p-3 max-w-7xl mx-auto">
        <div className="mt-5">
          <Link to="/" className="text-gray-600">
           
            Home
          </Link>

          <Link className="font-bold text-black"> / Shop</Link>
        </div>
        <div className="mt-6 sm:mt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6 h-max">
            <div>
              <img src={image} alt="" className="w-full" />
            </div>
            {/* product details */}
            <div>
              <h1 className="text-3xl font-semibold capitalize  my-8 text-left">
                {title}
              </h1>
              <p className="mt-3 text-gray-700 text-base leading-6 text-justify sm:text-left sm:mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                nesciunt non consequatur eos, fuga aut consectetur sed ducimus
                sit exercitationem quae accusantium quidem voluptas ab ex
                explicabo maiores unde amet commodi tempore nobis placeat enim
                iste animi. Rerum, doloremque eveniet eius expedita pariatur
                incidunt architecto unde, quam explicabo atque ipsum.
              </p>
              <span className="text-xl my-2 text-yellow-400 flex items-center gap-2 sm:my-4">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>
              <p className="text-xl text-red-600 font-semibold sm:text-2xl ">
                ${price}
              </p>

              <div className="mt-4">
                <div className="text-left flex flex-col gap-2 w-full">
                  <label className=" font-semibold">Quantity</label>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    defaultValue={1}
                    required
                    className="border border-gray-400 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 px-4 md:py-3 md:px-4 focus:border-red-600"
                  />
                </div>
                <div className="w-full text-left my-4">
                  <button className="flex justify-center items-center gap-2 w-full py-3 px-4 bg-red-500 text-white font-bold border border-red-600 rounded-md ease-in-out duration-150 shadow-slate-600 hover:bg-white hover:text-red-500 lg:m-0 md:px-6">
                    <span>Confirmed Order</span> <FaArrowAltCircleRight />{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
