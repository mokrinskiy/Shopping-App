import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
    const [secondImage, setSecondImage] = useState(false);

    const products = useSelector((state) => state.cart.products);
    

    return (
        <Link
            to={`/product/${item.id}`}
            className="card max-w-[400px] bg-base-100 shadow-xl "
        >
            <figure>
                {item.isNew && (
                    <div className="badge badge-secondary absolute top-0 left-0 m-2">
                        NEW
                    </div>
                )}
                {secondImage ? (
                    <img
                        src={
                            import.meta.env.VITE_REACT_APP_UPLOAD_URL +
                            item.attributes.image2.data.attributes.url
                        }
                        alt="Shoes"
                        className="object-cover w-full h-full"
                        onMouseLeave={() => setSecondImage(!secondImage)}
                    />
                ) : (
                    <img
                        src={
                            import.meta.env.VITE_REACT_APP_UPLOAD_URL +
                            item.attributes.image.data.attributes.url
                        }
                        alt="Shoes"
                        className="object-cover w-full h-full"
                        onMouseEnter={() => setSecondImage(!secondImage)}
                    />
                )}
            </figure>
            <div className="mx-4 pt-2 card-title">
                <p>{item.attributes.price} $</p>
            </div>
            <div className="card-body p-4">
                <p>{item.attributes.title}</p>
            </div>
        </Link>
    );
};

export default Card;
