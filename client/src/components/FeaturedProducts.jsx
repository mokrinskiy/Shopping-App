import React from "react";
import { useData } from "../hooks/useData";
import { Link } from "react-router-dom";

const FeaturedProducts = ({ type }) => {
    const { data, loading, error } = useData(
        `/products?populate=*&[filters][type][$eq]=${type}`
    );

    return (
        <div className="mx-[40px] mt-[200px]">
            <p className="text-4xl uppercase font-medium">Featured products</p>
            <div className="divider divider-neutral"></div>
            <div className="flex justify-between max-lg:flex-col">
                {error
                    ? ""
                    : loading
                    ? "loading..."
                    : data.map((item, index) => (
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
                                  <img
                                      src={
                                          import.meta.env
                                              .VITE_REACT_APP_UPLOAD_URL +
                                          item.attributes.image.data.attributes
                                              .url
                                      }
                                      alt="Shoes"
                                      className="object-cover w-full h-full"
                                  />
                              </figure>
                              <div className="card-body">
                                  <p>
                                      If a dog chews shoes whose shoes does he
                                      choose?
                                  </p>
                              </div>
                          </Link>
                      ))}
            </div>
        </div>
    );
};

export default FeaturedProducts;
