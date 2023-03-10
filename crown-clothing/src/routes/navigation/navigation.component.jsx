import { Fragment } from "react";

import { Outlet, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { selectCartdropdown } from "../../store/cart/cart-selector";
import { selectCurrentUser } from "../../store/user/user-selector";
import { setCartdropDown } from "../../store/cart/cart-action";
import "./navigation.styles.scss";
import { signUserOut } from "../../store/user/user-action";
const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  const cartdropDown = useSelector(selectCartdropdown);

  const signOutHandler = async () => {
    dispatch(signUserOut());
  };
  const toggleCart = () => dispatch(setCartdropDown(!cartdropDown));
  return (
    <Fragment>
      <div className="navigation">
        <div className="logo-container">
          <Link to="/">
            <CrwnLogo className="logo" />
          </Link>
        </div>
        <div className="nav-links-container">
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              SIGN OUT{" "}
            </span>
          ) : (
            <Link className="nav-link" to="/sign-in">
              LOGIN
            </Link>
          )}
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>

          <CartIcon onPress={toggleCart} />
        </div>
        {cartdropDown && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
