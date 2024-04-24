import Banner from "./Banner";
import BestSellers from "./BestSellers";
import Category from "./Category";
import Collections from "./Collections";
import Products from "./Products";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Category></Category>
           <Products></Products>
           <Collections></Collections>
           <BestSellers></BestSellers>
        </div>
    );
};

export default Home;