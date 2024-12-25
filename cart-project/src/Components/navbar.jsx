
const Navbar = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light ms-5">
            <a className="navbar-brand" href="#">CART PROJECT</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse container d-flex justify-content-center" id="navbarNav">
                <ul className="navbar-nav ">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home <span className="sr-only"></span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/product">Product</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/cart">Cart</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/login">Login</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;