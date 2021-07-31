import "../styles/globals.css";
import Layout from "../components/Layout";
import { useReducer } from "react";
import { CartContext } from "../utils/context";
import { dataByName } from "../utils/data";

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "ADD":
      return {
        cart: [...state.cart, action.payload],
      };
    case "REMOVE":
      return {
        cart: [
          ...state.cart.filter(
            (elem) => Number(elem.id) !== Number(action.payload)
          ),
        ],
      };
    default:
      return state;
  }
}

function MyApp({ Component, pageProps }) {
  const [state, dispatch] = useReducer(reducer, {
    cart: [],
  });

  return (
    <Layout>
      <CartContext.Provider value={{ state, dispatch }}>
        <Component {...pageProps} />
      </CartContext.Provider>
    </Layout>
  );
}
export default MyApp;
