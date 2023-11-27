import Card from "./Card";
import { useData } from "../hooks/useData";

const List = ({ sort, selectedSubCats, id, maxPrice }) => {
    const { data, loading, error } = useData(
        `/products?populate=*&[filters][categories][id]=${id}${selectedSubCats
            .map((item) => `&[filters][sub_categories][id][$eq]=${item}`)
            .join("")}&[filters][price][$lte]=${maxPrice}`
    );
    // &sort=price:${sort}

    return (
        <ul className="grid-cols-4 grid gap-10 max-xl:grid-cols-3 max-lg:grid-cols-2 min-h-screen">
            {loading
                ? "loading..."
                : data?.map((item) => (
                      <li key={item.id}>
                          <Card item={item} />
                      </li>
                  ))}
        </ul>
    );
};

export default List;
