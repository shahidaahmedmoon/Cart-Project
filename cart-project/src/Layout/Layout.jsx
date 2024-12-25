import Navbar from '../Components/navbar.jsx';
import Footer from '../Components/footer.jsx';

const Layout = (props) => {
    return (
        <>
        <Navbar/>
            {props.children}
        <Footer/>

        </>
    );
};

export default Layout;