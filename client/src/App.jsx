import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import WishList from "./pages/WishList";

const Layout = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/products/:id",
                element: <Products />,
            },
            {
                path: "/product/:id",
                element: <Product />,
            },
            {
                path: "/wishlist",
                element: <WishList />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
