import React, { useMemo, useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useData } from "../hooks/useData";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartReducer";

const Product = () => {
    const { id } = useParams();
    const { data, loading, error } = useData(`/products/${id}?populate=*`);
    const [image, setImage] = useState(0);
    const [quantity, setQuantity] = useState(1);

    const images = useMemo(
        () => [
            import.meta.env.VITE_REACT_APP_UPLOAD_URL +
                data?.attributes?.image?.data?.attributes?.url,
            import.meta.env.VITE_REACT_APP_UPLOAD_URL +
                data?.attributes?.image2?.data?.attributes?.url,
        ],
        [data]
    );

    const dispatch = useDispatch();

    return (
        <div className="mx-[40px] flex justify-between mb-[100px] mt-[50px]">
            {loading ? (
                "loading..."
            ) : (
                <>
                    <div className="w-[50%] flex justify-between">
                        <div>
                            <div className="w-[150px] h-[150px] cursor-pointer">
                                <img
                                    src={images[0]}
                                    onClick={() => setImage(0)}
                                />
                            </div>
                            <div className="w-[150px] h-[150px] mt-3 cursor-pointer">
                                <img
                                    src={images[1]}
                                    onClick={() => setImage(1)}
                                />
                            </div>
                        </div>
                        <div className="ml-3 w-full">
                            <img src={images[image]} />
                        </div>
                    </div>
                    <div className="w-[50%]">
                        <div className="ml-[40px] w-[500px]">
                            <p className="text-2xl uppercase">
                                {data?.attributes?.title}
                            </p>
                            <p className="text-2xl my-1">
                                {data?.attributes?.price}
                            </p>
                            <p className="mt-5 text-lg">
                                {data?.attributes?.description}
                            </p>
                            <div className="mt-10">
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="btn btn-outline btn-square"
                                >
                                    +
                                </button>
                                <p className="btn btn-square btn-outline">
                                    {quantity}
                                </p>
                                <button
                                    disabled={quantity <= 1}
                                    onClick={() => setQuantity(quantity - 1)}
                                    className="btn btn-outline btn-square"
                                >
                                    -
                                </button>
                            </div>
                            <button
                                className="btn btn-neutral mt-5"
                                onClick={() =>
                                    dispatch(
                                        addToCart({
                                            id: data.id,
                                            title: data.attributes.title,
                                            description:
                                                data.attributes.description,
                                            price: data.attributes.price,
                                            image: data.attributes.image.data
                                                .attributes.url,
                                            amount: quantity,
                                        })
                                    )
                                }
                            >
                                <ShoppingCartIcon />
                                Add to cart
                            </button>

                            <div>
                                <button className="btn btn-primary btn-sm mt-5">
                                    <FavoriteBorderIcon />
                                    Add to whishlist
                                </button>
                                <button className="btn btn-primary btn-sm ml-2 mt-5">
                                    <CompareArrowsIcon />
                                    Add to compare
                                </button>
                            </div>
                            <div className="mt-[200px]">
                                <p>Product type: t-shirt</p>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Product;
