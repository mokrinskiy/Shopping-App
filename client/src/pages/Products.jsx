import React, { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../components/List";
import { useData } from "../hooks/useData";

const Products = () => {
    const { id } = useParams();
    const [maxPrice, setMaxPrice] = useState(150);
    const [sort, setSort] = useState();
    const [selectedSubCats, setSelectedSubCats] = useState([]);

    const { data, loading, error } = useData(
        `/sub-categories?[filters][categories][id][$eq]=${id}`
    );

    const handleChange = (e) => {
        const value = e.target.value;
        const isChecked = e.target.checked;

        setSelectedSubCats(
            isChecked
                ? [...selectedSubCats, value]
                : selectedSubCats.filter((item) => item !== value)
        );
    };

    return (
        <div className="flex mx-[40px]">
            <div className="max-w-[300px] h-auto sticky top-0">
                <div>
                    <p className="text-xl">Product Categories</p>
                    <div className="mt-[30px]">
                        {data.map((item) => (
                            <div key={item.id} className="flex items-center">
                                <input
                                    type="checkbox"
                                    className="checkbox checkbox-xs"
                                    value={item.id}
                                    onChange={(e) => handleChange(e)}
                                />
                                <span className="ml-3">
                                    {item.attributes.title}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-[50px]">
                    <p className="text-xl">Filter by Price</p>
                    <div className="w-[200px] mt-[30px]">
                        <input
                            type="range"
                            min={0}
                            max={150}
                            step={25}
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(e.target.value)}
                            className="range range-xs"
                        />
                        <span>0 - {maxPrice} $</span>
                    </div>
                </div>
                <div className="mt-[50px]">
                    <p className="text-xl">Sort by</p>
                    <div className="flex flex-col mt-[30px]">
                        <div className="flex items-center">
                            <input
                                type="radio"
                                name="radio-1"
                                className="radio"
                                onChange={() => setSort("asc")}
                            />
                            <span className="ml-2">Price (lowest first)</span>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="radio"
                                name="radio-1"
                                className="radio"
                                onChange={() => setSort("desc")}
                            />
                            <span className="ml-2">Price (highest first)</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-xl:ml-[80px] ml-[120px]">
                <List
                    sort={sort}
                    selectedSubCats={selectedSubCats}
                    id={id}
                    maxPrice={maxPrice}
                />
            </div>
        </div>
    );
};

export default Products;
