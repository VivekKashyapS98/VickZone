import { useContext } from "react";
import Button from "../components/Button";
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
            <div
              onClick={() => dispatch({ type: "REMOVE", payload: elem.item })}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
        );
      })}
      {cart.length > 0 && (
        <Button onClick={() => alert(JSON.stringify(cart))}>Purchase</Button>
      )}
    </div>
  );
}
