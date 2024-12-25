import {HashRouter, Route, Routes} from "react-router-dom";
import ProductListPage from "./Pages/product-list-page.jsx";
import CartListPage from "./Pages/cart-list-page.jsx";
import LoginPage from "./Pages/login-page.jsx";
import VerifyLoginPage from "./Pages/verify-login-page.jsx";
import HomePage from "./Pages/home-page.jsx";



const App = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/product" element={<ProductListPage/>} />
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/verify" element={<VerifyLoginPage/>} />
                <Route path="/cart" element={<CartListPage/>} />
            </Routes>

        </HashRouter>
    );
};

export default App;



/*const App = () => {
    return (
        <div>
            <h1>Cart Project</h1>
        </div>
    );
};

export default App;*/