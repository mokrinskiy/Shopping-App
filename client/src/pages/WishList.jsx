import React from "react";
import { useDispatch, useSelector } from "react-redux";
import WishListItem from "../components/WishListItem";

const WishList = () => {
    const products = useSelector((state) => state.wishList.products);

    if (products) {
        return (
            <div className="min-h-screen flex justify-center items-center">
                <p className="mb-[300px]">There is no products!</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-wrap mx-[100px] gap-10 max-xl:items-center max-lg:flex-col mb-[40px]">
            {products.map((item) => (
                <WishListItem item={item} />
            ))}
        </div>
    );
};

export default WishList;
