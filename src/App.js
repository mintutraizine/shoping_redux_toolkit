import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import { PersistGate } from 'redux-persist/integration/react';
import store,{persistor} from './store/store';

function App() {
    return (
        <div className="App">
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={null}>
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
