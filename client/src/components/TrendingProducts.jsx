import { useData } from "../hooks/useData";
import TrendingItem from "./TrendingItem";

const TrendingProducts = ({ type }) => {
    const { data } = useData(
        `/products?populate=*&[filters][type][$eq]=${type}`
    );

    return (
        <div className="min-h-[600px] mx-[40px] mt-[200px]">
            <p className="text-4xl flex justify-end uppercase font-medium">
                Trending products
            </p>
            <div className="divider divider-neutral"></div>
            <div className="flex flex-col gap-10 lg:flex-row">
                <div className="flex flex-col gap-10 lg:w-1/2">
                    <div className="flex gap-10 h-1/2">
                        <div className="flex-grow h-full ">
                            <TrendingItem data={data} index={0} />
                        </div>
                        <div className="flex-grow h-full ">
                            <TrendingItem data={data} index={1} />
                        </div>
                    </div>
                    <div className="flex-grow ">
                        <TrendingItem data={data} index={2} />
                    </div>
                </div>
                <div className="flex-grow  lg:w-1/2">
                    <TrendingItem data={data} index={3} />
                </div>
            </div>
        </div>
    );
};

export default TrendingProducts;
