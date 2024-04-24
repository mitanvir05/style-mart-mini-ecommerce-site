import { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import Cards from "../../components/Cards";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOptions, setSortOptions] = useState("default");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/products.json");
        const data = await res.json();
        setProducts(data);
        setFilteredItems(data);
      } catch (error) {
        console.log("error data fetch", error);
      }
    };
    fetchData();
  }, []);
 // console.log(products);
  //   filtering func
  const filtereItems = (category) => {
    const filtered =
      category === "all"
        ? products
        : products.filter((item) => item.category === category);
    setFilteredItems(filtered);
    selectedCategory(category);
  };
  //   show all
  const showAll = () => {
    setFilteredItems(products);
    setSelectedCategory("all");
  };
  // sorting func
  const handleSortChange = (option) => {
    setSortOptions(option);

    // logic for sort
    let sortedItems = [...filteredItems];
    switch (option) {
      case "A-Z":
        sortedItems.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "Z-A":
        sortedItems.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "low-high":
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      case "high-low":
        sortedItems.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    setFilteredItems(sortedItems)
  };

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-28 px-4 mb-12">
      <h2 className="title">Or Subscribe to the Newsletter</h2>
      <div>
        {/* products card */}
        <div className="flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8">
          {/* all btn */}
          <div className="flex flex-row justify-start md:items-center md:gap-8 gap-5 flex-wrap">
            <button onClick={showAll}>All Products</button>
            <button onClick={() => filtereItems("Dress")}>Cloths</button>
            <button onClick={() => filtereItems("Hoodies")}>Hoodies</button>
            <button onClick={() => filtereItems("Bag")}>Bag</button>
          </div>
          {/* sorting options */}
          <div className="flex justify-end mb-4 rounded-sm">
            <div className="bg-black p-2">
              <FaFilter className="text-white h-4 w-4" />
            </div>


            <select
            id="sort"
            onChange={(e)=>handleSortChange(e.target.value)}
            value={sortOptions}
             className="bg-black text-white px-2 py-1 rounded-sm">
              <option value="default">Default</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
              <option value="low-high">Low to High</option>
              <option value="high-low">High to Low</option>
            </select>
          </div>
        </div>

        <Cards filteredItems={filteredItems} />
      </div>
    </div>
  );
};

export default Products;
