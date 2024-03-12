import logo from "./logo.svg";
import "./App.css";
import Banner from "./component/Banner";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js"
import Categories from "./component/Categories";
import ShoppingList from "./component/ShoppingList";
import Footer from "./component/Footer";
import Cart from "./component/Cart";
// import fleur1 from "./images/fleur1.jpg"


function App() {
  return (
    <div>
      <Banner />
      <div className="div">
        <div>
        
          <Cart />
        </div>
        <div>
          <Categories />
          <ShoppingList  />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
