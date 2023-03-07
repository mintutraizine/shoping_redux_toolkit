import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import { PersistGate } from 'redux-persist/integration/react';
import store,{persistor} from './store/store';
import MuiNavbar from './components/MuiNavbar';
import ProductDetails from './pages/productdetails/ProductDetails';
const navitmelist=[{ScreenName:'Home',Path:'/'},{ScreenName:'About Us',Path:'/Services'},
{ScreenName:'Showcase',Path:'/Services'},{ScreenName:'Headphones',Path:'/'},
{ScreenName:'Merchandise',Path:'/Services'},{ScreenName:'Contact Us',Path:'/Services'}]

function App() {
    return (
        <div className="App">
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={null}>
            <BrowserRouter>
               <MuiNavbar navitems={navitmelist}/>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/cart" element={<Cart />}></Route>
                    <Route path="/productdetails" element={<ProductDetails />}></Route>
                </Routes>
            </BrowserRouter>
            </PersistGate>
        </Provider>
    </div>
    );
}

/*  return (
        <div className="App">
            <Provider store={store}>
                <PersistGate persistor={persister} loading={null}>
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/cart" element={<Cart />}></Route>
                    </Routes>
                </BrowserRouter>
                </PersistGate>
            </Provider>
        </div>
    ); */
export default App;
