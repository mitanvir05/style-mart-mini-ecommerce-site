import Banner from "./Banner";
import BestSellers from "./BestSellers";
import Category from "./Category";
import Collections from "./Collections";
import NewsLetter from "./NewsLetter";
import Products from "./Products";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Category></Category>
           <Products></Products>
           <Collections></Collections>
           <BestSellers></BestSellers>
           <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;