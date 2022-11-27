import { Route } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';
import ProductInfo from './routes/ProductInfo/ProductInfo';
import Products from './routes/Products/Products';
import Login from './routes/registr/Login';
import Shop from './routes/shop/Shop';

function App() {
  return (
    <div className="App">
      <Route>
      <Header/>
      </Route>
<Route exact path='/'>
  <Main/>
</Route>

  <Route path='/signin'>
    <Login/>
  </Route>
  <Route path='/products'>
    <Products/>
  </Route>
<Route exact path='/shop'>
<Shop/>
</Route>
<Route path='/shop/:productId'>
  <ProductInfo/>
</Route>
<Route>
<Footer/>
</Route>
    </div>
  );
}

export default App;
