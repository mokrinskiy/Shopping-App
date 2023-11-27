import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { removeItem } from "../redux/cartReducer";

const CartItem = ({ item, dispatch }) => {
    return (
        <div className="card card-side bg-base-100 shadow-md mt-[10px]">
            {console.log(item)}
            <figure>
                <img
                    className="w-[200px] h-[200px]"
                    src={import.meta.env.VITE_REACT_APP_UPLOAD_URL + item.image}
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{item?.title} </h2>
                <div className="flex justify-between items-center">
                    <div className="card-actions">
                        {item.amount} x {item.price} ={" "}
                        {item.amount * item.price}
                    </div>
                    <div className="card-actions justify-end">
                        <button
                            onClick={() => dispatch(removeItem(item.id))}
                            className="btn btn-error btn-circle"
                        >
                            <DeleteIcon />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
