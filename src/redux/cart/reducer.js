import CartActionTypes from "./action-types";

const initialState = {
  products: [],
  productsTotalPrice: 0,
  hidden: true,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_PRODUCT:
      const product = action.payload;

      const productIsAlreadyInCart = state.products.find(
        (p) => p.id === product.id
      );

      if (productIsAlreadyInCart) {
        return {
          ...state,
          products: state.products.map((p) => {
            if (p.id === product.id) {
              return {
                ...p,
                quantity: p.quantity + 1,
              };
            }
            return p;
          }),
          productsTotalPrice: state.productsTotalPrice + product.price,
        };
      }

      return {
        ...state,
        products: [...state.products, { ...product, quantity: 1 }],
      };

    case CartActionTypes.REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload.id
        ),
      };

    case CartActionTypes.INCREASE_PRODUCT_QUANTITY:
      return {
        ...state,
        products: state.products.map((product) => {
          if (product.id === action.payload.id) {
            return {
              ...product,
              quantity: product.quantity + 1,
            };
          }
          
          return product;
        }),
      };

    case CartActionTypes.DECREASE_PRODUCT_QUANTITY:
      return {
        ...state,
        products: state.products.map((product) => {
          if(product.id === action.payload.id) {
            return {
              ...product,
              quantity: product.quantity - 1
            }
          }

          return product
        })
      }
    default:
      return state;
  }
};

export default cartReducer;
