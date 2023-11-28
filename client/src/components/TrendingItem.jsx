import React, { useState } from "react";
import { Link } from "react-router-dom";

const TrendingItem = ({ data, index }) => {
    const [secondImage, setSecondImage] = useState(false);
    return (
        <Link to={`/product/${data[index]?.id}`}>
            {secondImage ? (
                <>
                    <img
                        src={
                            import.meta.env.VITE_REACT_APP_UPLOAD_URL +
                            data[index]?.attributes?.image2?.data?.attributes
                                ?.url
                        }
                        alt="Shoes"
                        className="object-cover w-full h-full"
                        onMouseLeave={() => setSecondImage(!secondImage)}
                    />
                </>
            ) : (
                <img
                    src={
                        import.meta.env.VITE_REACT_APP_UPLOAD_URL +
                        data[index]?.attributes?.image?.data?.attributes?.url
                    }
                    alt="Shoes"
                    className="object-cover w-full h-full"
                    onMouseEnter={() => setSecondImage(!secondImage)}
                />
            )}
        </Link>
    );
};

export default TrendingItem;
