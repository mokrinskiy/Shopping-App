import React, { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../components/List";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { useData } from "../hooks/useData";
import ProductsFilter from "../components/ProductsFilter";

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
        <div className="flex mx-[40px] mb-[40px]">
            <details className="dropdown lg:hidden">
                <summary className="m-1 btn w-[50px]">
                    <FilterAltIcon />
                </summary>
                <div className="p-4 shadow-xl menu dropdown-content z-[1] bg-base-100 rounded-box w-[250px]">
                    <ProductsFilter
                        data={data}
                        handleChange={handleChange}
                        setMaxPrice={setMaxPrice}
                        setSort={setSort}
                        maxPrice={maxPrice}
                    />
                </div>
            </details>
            <div className="w-[300px] h-auto sticky top-0 max-lg:hidden">
                <ProductsFilter
                    data={data}
                    handleChange={handleChange}
                    setMaxPrice={setMaxPrice}
                    setSort={setSort}
                    maxPrice={maxPrice}
                />
            </div>

            <div className="max-lg:ml-4 ml-[120px] ">
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
