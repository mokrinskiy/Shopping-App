const TrendingProducts = () => {
    return (
        <div className="min-h-[600px] mx-[40px] mt-[200px]">
            <p className="text-4xl flex justify-end uppercase font-medium">
                Trending products
            </p>
            <div className="divider divider-neutral"></div>
            <div className="flex flex-col gap-10 lg:flex-row">
                <div className="flex flex-col gap-10 lg:w-1/2">
                    <div className="flex gap-10 h-1/2">
                        <div className="flex-grow h-full bg-blue-500">
                            <img
                                src="https://www.nuuds.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0654%2F5565%2F3115%2Fproducts%2FNUD260_WS-010-017_Women_sPajamaShirt_PajamaShortsSet_Black_Front_Crop.jpg%3Fv%3D1697575718&w=1080&q=75"
                                alt="Kitten 1"
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="flex-grow h-full bg-green-500">
                            <img
                                src="https://www.nuuds.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0654%2F5565%2F3115%2Ffiles%2FNUD335_unknown_style_code_unknown_item_name_Bone_OF_Front_Crop.jpg%3Fv%3D1697575722&w=1080&q=75"
                                alt="Kitten 2"
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>
                    <div className="flex-grow bg-red-500">
                        <img
                            src="https://www.nuuds.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0654%2F5565%2F3115%2Ffiles%2FNUD707_W-073_Sweater-Bodysuit_Chocolate_OM_Side_Crop_1.jpg%3Fv%3D1700496125&w=1080&q=75"
                            alt="Long Kitten"
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
                <div className="flex-grow bg-yellow-500 lg:w-1/2">
                    <img
                        src="https://www.nakedcashmere.com/cdn/shop/files/N20954_TYLER_BLACK_01154.jpg?v=1697729690&width=832"
                        alt="Tall Kitten"
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default TrendingProducts;
