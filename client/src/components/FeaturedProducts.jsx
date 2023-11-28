import { useData } from "../hooks/useData";
import FeaturedItem from "./FeaturedItem";

const FeaturedProducts = ({ type }) => {
    const { data, loading, error } = useData(
        `/products?populate=*&[filters][type][$eq]=${type}`
    );
    return (
        <div className="mx-[40px] mt-[200px]">
            <p className="text-4xl uppercase font-medium">Featured products</p>
            <div className="divider divider-neutral"></div>
            <div className="flex justify-between max-lg:flex-col gap-5 max-lg:items-center">
                {error
                    ? ""
                    : loading
                    ? "loading..."
                    : data.map((item, index) => (
                          <FeaturedItem key={index} item={item} index={index} />
                      ))}
            </div>
        </div>
    );
};

export default FeaturedProducts;
