import NavbarList from "../navbar/Navbar-list";
import MainList from "../mainCart/MainList";
import Cart from "../Cart";
import Bank from "../BankOffer";
import CityBank from "../CityBank";
import OfferSection from "../offer-section/OfferSection";
import Slider from "../slider/Slider";

const Home = () => {
  return (
    <>
      <NavbarList />
      <Cart />
      <CityBank />
      <MainList />
      <Bank />
      <OfferSection />
      <OfferSection />
      <Slider />
    </>
  );
};

export default Home;
