import Hr from "../components/Hr";
import Navbar from "../components/Navbar";
import Carousel from "../layouts/Carousel";
import About from "../layouts/About";
import Gallery from "../layouts/Gallery";
import Specification from "../layouts/Specification";
import Footer from "../components/Footers";


const Home = () => {
    return ( 
        <>
            <Navbar/>
            <Carousel />
            <About/>
            <Hr />
            <Gallery/>
            <Hr />
            <Specification />
            <Footer/>
        </>
    );
}
export default Home;