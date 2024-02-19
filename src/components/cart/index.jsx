// Styles
import { useSelector } from "react-redux";
import * as Styles from "./styles";

import CardItem from "../cart-item/index";

const Cart = ({ isVisible, setIsVisible }) => {
  const { products } = useSelector(reducer => reducer.cartReducer)
  const handleEscapeAreaClick = () => setIsVisible(false);

  return (
    <Styles.CartContainer isVisible={isVisible}>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent>
        <Styles.CartTitle>Seu Carrinho</Styles.CartTitle>

        {products.map(product => <CardItem product={product}/>)}
      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

export default Cart;
