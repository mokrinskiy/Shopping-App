import React, { useState } from "react";
import { Link } from "react-router-dom";

const FeaturedItem = ({ item, index }) => {
    const [secondImage, setSecondImage] = useState(false);

    return (
        <Link
            to={`/product/${item.id}`}
            key={item.id}
            className={`card ${
                index == 0
                    ? "max-w-[750px] max-h-[850px] max-lg:max-w-[500px] max-lg:h-[550px]"
                    : "max-w-[500px] h-[550px]"
            } bg-base-100 shadow-xl mx-2`}
        >
            <figure>
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
            {item.attributes.isNew && (
                <div className="badge badge-secondary absolute top-0 left-0 m-2">
                    NEW
                </div>
            )}
            <div className="card-body flex items-center flex-row justify-between">
                <h2 className="card-title">{item.attributes.title}</h2>
                <button className="btn btn-primary">Check</button>
            </div>
        </Link>
    );
};

export default FeaturedItem;
