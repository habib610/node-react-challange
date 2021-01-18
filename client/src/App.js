import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './Components/Display/Navbar';
import Product from './Components/Display/Product';
import ProductDetails from './Components/Display/ProductDetails';
import Cart from './Components/Display/Cart';
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
   <Route path="/" exact  component={Product} />
   <Route path="/details/:productId" component={ProductDetails} />
   <Route path="/cart" component={Cart} />
    </BrowserRouter>
  );
}

export default App;
