import './HomePage.css';
import Carousel from '../Components/Carousel/Carousel';
import Navbar from '../Components/Navbar/Navbar';
import SignedNavbar from '../Components/Navbar/SignedNavbar';
import ProductCard from '../Components/ProductCard/index';
import Footer from '../Components/Footer/Footer';
import { CarouselData } from '../Components/CarouselData';
import { useEffect, useState } from 'react';
import axios from 'axios';


function HomePage() {


  const [gotToken, setGotToken] = useState(false);

  useEffect(() => {
    let token = localStorage.getItem('auth-token');

    if (token) {
      // @ts-ignore
      axios.get('http://localhost:3000', { headers: { Authorization: token } })
        .then(response => {
          setGotToken(true);
          // localStorage.setItem('name',response.data.user.name);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, []);

  return (
    <div className="HomePage">
      {!gotToken && <Navbar />}
      {gotToken && <SignedNavbar />}
      <Carousel slides={CarouselData} />
      <ProductCard items={CarouselData} />
      <Footer />
    </div>
  );
}

export default HomePage;
