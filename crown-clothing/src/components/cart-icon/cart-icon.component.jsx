import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
const CartIcon = ({ onPress }) => {
  return (
    <div className="cart-icon-container" onClick={onPress}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};
export default CartIcon;
