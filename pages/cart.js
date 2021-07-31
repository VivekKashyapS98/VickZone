import { useContext } from "react";
import { CartContext } from "../utils/context";

export default function Cart() {
  const { state, dispatch } = useContext(CartContext);
  const { cart } = state;

  return (
    <div>
      <h3 className="text-lg text-center font-semibold md:text-3xl">Cart</h3>
      {cart.map((elem, ind) => {
        return (
          <div
            key={`${elem.item.name}/${ind}`}
            className="m-2 md:m-4 p-2 md:p-4 flex flex-row flex-wrap justify-between bg-gray-100 rounded-full transition-gpu duration-200 ring-gray-200 hover:ring-2 md:hover:ring-4"
          >
            <h3 className="text-lg font-semibold md:text-3xl">
              {elem.item.name}
            </h3>
            <h3 className="text-base font-semibold md:text-lg">
              {"Quantity:" + String(elem.qty)}
            </h3>
            <h3 className="text-base font-semibold md:text-lg">
              {"$" + String(Number(elem.item.price) + Number(elem.qty))}
            </h3>
          </div>
        );
      })}
    </div>
  );
}
