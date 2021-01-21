import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './Components/Display/Navbar';
import Product from './Components/Display/Product';
import ProductDetails from './Components/Display/ProductDetails';
import Cart from './Components/Display/Cart';
import NewPost from './Components/PostScreen/NewPost';
import PostList from './Components/PostScreen/PostList';
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
   <Route path="/" exact  component={Product} />
   <Route path="/details/:productId" component={ProductDetails} />
   <Route path="/cart/:id?" component={Cart} />
   <Route path="/create" component={NewPost} />
   <Route path="/blog" component={PostList} />
    </BrowserRouter>
  );
}

export default App;
