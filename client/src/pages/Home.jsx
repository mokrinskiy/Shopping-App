import React from "react";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import TrendingProducts from "../components/TrendingProducts";
import FeaturedProducts from "../components/FeaturedProducts";

const Home = () => {
    return (
        <div>
            <Slider />
            <FeaturedProducts type="featured"/>
            <TrendingProducts />
            <Categories />
        </div>
    );
};

export default Home;
