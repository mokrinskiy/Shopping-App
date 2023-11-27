import React, { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Link, NavLink } from "react-router-dom";
import { Person } from "@mui/icons-material";
import Cart from "./Cart";
import { useSelector } from "react-redux";

const NavBar = () => {
    const [showCart, setShowCart] = useState(false);
    const products = useSelector((state) => state.cart.products);

    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <MenuIcon />
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-50"
                        >
                            <li>
                                <NavLink to={"/products/1"}>Women</NavLink>
                            </li>

                            <li>
                                <NavLink to={"/products/2"}>Men</NavLink>
                            </li>
                        </ul>
                    </div>
                    <ul className="menu menu-horizontal px-1 hidden lg:flex z-50">
                        <li>
                            <NavLink className="text-lg" to={"/products/1"}>
                                Women
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                className="text-lg ml-2"
                                to={"/products/2"}
                            >
                                Men
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar-center">
                    <NavLink to={"/"} className="btn btn-ghost text-xl">
                        Home
                    </NavLink>
                </div>
                <div className="navbar-end">
                    <Link className="btn btn-circle mx-2 max-lg:btn-sm">
                        <SearchIcon />
                    </Link>
                    <div className="indicator">
                        <span className="indicator-item indicator-top badge badge-secondary p-[7px] right-4">{products.length}</span>

                        <button
                            className="btn btn-circle mx-2 max-lg:btn-sm"
                            onClick={() => setShowCart(!showCart)}
                        >
                            <ShoppingCartIcon />
                        </button>
                    </div>

                    <Link className="btn btn-circle mx-2 max-lg:btn-sm">
                        <FavoriteIcon />
                    </Link>
                    <Link className="btn btn-circle mx-2 max-lg:btn-sm">
                        <Person />
                    </Link>
                </div>
            </div>
            {showCart && <Cart />}
        </>
    );
};

export default NavBar;
