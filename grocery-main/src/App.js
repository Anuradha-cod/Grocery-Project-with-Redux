import "./App.css";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import MainRouter from "./router2/MainRouter";
import Home from "./component/Router/Home";

const App = () => {
  return (
    <div className="App">
      <MainRouter />
      {/* <Home /> */}
      <Footer />
    </div>
  );
};

export default App;
