import './HomePage.css';
import Carousel from '../Components/Carousel/Carousel';
import { CarouselData } from '../Components/CarouselData'
import Navbar from '../Components/Navbar/Navbar';
import ProductCard from '../Components/ProductCard/index';
import Footer from '../Components/Footer/Footer'



function HomePage() {
  return (
    <div className="HomePage">
      <Navbar />
      <Carousel slides={CarouselData} />
      <ProductCard items={CarouselData} />
      <Footer />
    </div>
  );
}

export default HomePage;
