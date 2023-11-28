import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeItem } from "../redux/wishListReducer";
import DeleteIcon from "@mui/icons-material/Delete";

const WishListItem = ({ item }) => {
    const dispatch = useDispatch();

    return (
        <div className="card w-[300px] h-[450px] bg-base-100 shadow-xl">
            <figure>
                <Link to={`/product/${item.id}`}>
                    <img
                        src={
                            import.meta.env.VITE_REACT_APP_UPLOAD_URL +
                            item.image
                        }
                    />
                </Link>
            </figure>
            <div className="mx-4 pt-2 card-title">
                <p>{item.price} $</p>
            </div>
            <div className="card-body p-4">
                <p>{item.title}</p>
            </div>
            <div className="flex justify-end p-4">
                <button
                    onClick={() => dispatch(removeItem(item.id))}
                    className="btn btn-error btn-circle btn-sm"
                >
                    <DeleteIcon />
                </button>
            </div>
        </div>
    );
};

export default WishListItem;
