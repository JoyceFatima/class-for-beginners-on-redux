import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";
import { loginUser, logoutUser } from "../../redux/user/action";

function Header() {
  const { user } = useSelector((reducer) => reducer.userReducer);
  const { products } = useSelector((reducer) => reducer.cartReducer);
  const dispatch = useDispatch();
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const productsCount = useMemo(() => {
    return products.reduce((acc, product) => acc + product.quantity, 0);
  }, [products])

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  const handleLogin = () => {
    dispatch(loginUser({ name: "John Doe", email: "johndoe@example.com" }));
  };

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        {user ? (
          <div onClick={handleLogout}>Sair</div>
        ) : (
          <div onClick={handleLogin}>Login</div>
        )}
        <div onClick={handleCartClick}>Carrinho ({productsCount})</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
