import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
    return (
        <div className="mt-[200px] mx-[40px]">
            <div className="divider divider-neutral"></div>
            <div className="w-full h-[600px] max-md:flex-col flex justify-around items-center py-[50px]">
                <div className=" flex justify-around items-center w-[400px] flex-col h-full">
                    <Link to={"/products/2"} className="uppercase text-4xl">
                        / Men{" "}
                    </Link>
                </div>
                <div className="w-[400px] flex justify-around flex-col h-full items-center">
                    <Link to={"/products/1"} className="uppercase text-4xl">
                        / Women{" "}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Categories;
