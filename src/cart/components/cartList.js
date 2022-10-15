import { useState } from "react";
import useStore from "../../zustand/store";

export const CartList = () => {
  const [edit, setEdit] = useState("");
  const [inputValue, setInputValue] = useState("");
  const cart = useStore((state) => state.cart);

  const total = useStore((state) => state.total);
  const removeItemToCart = useStore((state) => state.removeItemToCart);
  const editItemToCart = useStore((state) => state.editItemToCart);
  
  const handleRemoveItemToCart = (item) => {
    removeItemToCart(item)
  };

  const handleEdit = (id) => {
    setEdit(id);
  };

  const handleSaveEdit = (item) => {
    setEdit("");
    editItemToCart({...item, quantity : inputValue})
  };

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <>
      <h1>Cart List</h1>
      <div className="List">
        <ul>
          {cart?.map((item) => (
            <li key={item.id}>
              {item.title} - {item.price} :
              {edit !== item.id ? (
                `số lượng ${item.quantity}`
              ) : (
                <input defaultValue={item.quantity} onChange={onChange} />
              )}
              {edit !== item.id ? (
                <button onClick={() => handleEdit(item.id)}>Edit cart</button>
              ) : (
                <button onClick={() => handleSaveEdit(item)}>Lưu</button>
              )}
              <button onClick={() => handleRemoveItemToCart(item)}>
                delete item
              </button>
            </li>
          ))}
        </ul>

        <div className="total">
          <h3>total : {total}</h3>
        </div>
      </div>
    </>
  );
};
