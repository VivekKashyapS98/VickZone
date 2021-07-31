import { useRouter } from "next/router";
import { useContext, useState } from "react";
import Button from "../../components/Button";
import { CartContext } from "../../utils/context";
import { dataByName } from "../../utils/data";

export default function ID({ item }) {
  const [qty, setQty] = useState(item.available === 0 ? 0 : 1);
  const router = useRouter();
  const { state, dispatch } = useContext(CartContext);

  const contains = () => {
    var found = false;
    var a = state.cart.some((elem) => Number(elem.item.id) === Number(item.id));
    if (a || !item.available) {
      found = true;
    }
    console.log(found, a, state.cart);
    return found;
  };

  const setQuantity = (e) => {
    setQty(e.target.value);
  };

  const handleAddToCart = () => {
    if (contains) {
      dispatch({ type: "ADD", payload: { item: item, qty } });
      router.push("/cart");
    }
  };

  return (
    <div className="m-2 md:m-4 container h-60 flex flex-col justify-around items-center bg-gray-100 rounded-lg">
      <h3 className="text-lg font-semibold md:text-3xl">{item.name}</h3>
      <h3 className="text-base font-semibold md:text-lg">
        Category: {item.category}
      </h3>
      <h3 className="text-base font-semibold md:text-lg">
        Vendor: {item.vendor}
      </h3>
      <div className="p-4 w-full flex felx-row flex-wrap justify-between items-center">
        <h3 className="text-lg font-semibold md:text-2xl">
          {item.available ? "In Stock:" + item.available : "Out of stock"}
        </h3>
        <select
          value={qty}
          onChange={setQuantity}
          className="m-2 p-2 w-40 md:w-60 h-8 md:h-10 rounded-full transition-gpu duration-200 ring-gray-200 hover:ring-2 md:hover:ring-4"
        >
          {contains() ? (
            <option value="0">0</option>
          ) : (
            <>
              <option value="0">0</option>
              <option value="1">1</option>
            </>
          )}
        </select>
        <div
          style={{
            opacity: contains() ? "0.5" : 1,
          }}
        >
          <Button onClick={handleAddToCart}>Add to cart</Button>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps({ params }) {
  return {
    props: {
      item: dataByName.find((elem) => Number(elem.id) === Number(params.id)),
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
      { params: { id: "4" } },
    ],
    fallback: false,
  };
}
