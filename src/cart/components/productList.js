import useStore from "../../zustand/store";

export const ProductList = () => {
  const productList = useStore((state) => state.product);
  const addToCart = useStore((state) => state.addToCart);
  const handleAddToCart = (item) => {
    addToCart(item);
  };

  return (
    <>
      <h1>Product List</h1>
      <div className="List">
        <ul>
          {productList.map((item) => (
            <li key={item.id}>
              {item.title} - {item.price}{" "}
              <button onClick={() => handleAddToCart(item)}>
                Thêm {item.title} vào giỏ hàng
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
