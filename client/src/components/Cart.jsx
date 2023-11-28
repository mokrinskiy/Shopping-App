import React from "react";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { resetCart } from "../redux/cartReducer";

const Cart = () => {
    const products = useSelector((state) => state.cart.products);
    const dispatch = useDispatch();
    const totalPrice = () => {
        let total = 0;
        products.forEach((item) => (total += item.amount * item.price));
        return total.toFixed(2);
    };

    const handlePayment = async () => {
        try {
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="max-w-[600px] p-4 absolute top-0 right-0 mt-[65px] z-50 bg-base-200 rounded-lg shadow-xl mx-3">
            <p className="text-xl">Products in your cart</p>
            <div className="mt-[10px]">
                {products?.map((item) => (
                    <CartItem key={item.id} item={item} dispatch={dispatch} />
                ))}
            </div>
            <div className="flex justify-between mt-[20px]">
                <p className="text-xl">Subtotal</p>
                <p className="text-xl">${totalPrice()}</p>
            </div>
            <div className="mt-[20px] flex justify-between items-center">
                <button className="btn btn-wide uppercase btn-neutral">
                    Checkout
                </button>
                <button
                    onClick={() => dispatch(resetCart())}
                    className="btn btn-ghost btn-sm btn-neutral text-error"
                >
                    Reset card
                </button>
            </div>
        </div>
    );
};

export default Cart;
