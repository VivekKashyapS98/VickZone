import "../styles/globals.css";
import Layout from "../components/Layout";
import { useReducer } from "react";
import { CartContext } from "../utils/context";

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "REMOVE":
      return [
        ...state.filter((elem) => Number(elem.id) !== Number(action.payload)),
      ];
    default:
      throw new Error();
  }
}

function MyApp({ Component, pageProps }) {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <Layout>
      <CartContext.Provider value={{ state, dispatch }}>
        <Component {...pageProps} />
      </CartContext.Provider>
    </Layout>
  );
}
export default MyApp;
