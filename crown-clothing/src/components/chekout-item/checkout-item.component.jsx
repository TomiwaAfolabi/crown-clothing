import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";
import "./checkout-item.styles.scss";
const CheckoutItem = ({ checkoutItems }) => {
  const { removeCartItem, addCartItem, deleteCartItem } =
    useContext(CartContext);
  const { name, imageUrl, quantity, price } = checkoutItems;

  const removeItem = () => removeCartItem(checkoutItems);
  const addProduct = () => addCartItem(checkoutItems);
  const deleteProduct = () => deleteCartItem(checkoutItems);

  return (
    <div className="checkout-item-container">
      <div className="image-container ">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <div className="name">{name}</div>
      <div onClick={removeItem}>-</div>
      <div className="quantity">{quantity}</div>
      <div onClick={addProduct}>+</div>
      <div className="price">{price}</div>
      <div className="remove-button " onClick={deleteProduct}>
        &#10005;
      </div>
    </div>
  );
};
export default CheckoutItem;
