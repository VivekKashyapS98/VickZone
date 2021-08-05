import { useState } from "react";
import mainData from "../data.json";

export default function NewItem() {
  const [data, setData] = useState({});

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mainData.push({
      id: mainData.length,
      ...data,
    });
  };

  return (
    <form
      className="max-w-md flex flex-col justify-center"
      onSubmit={handleSubmit}
    >
      <input
        className="m-4 bg-gray-100"
        type="text"
        name="name"
        placeholder="Name"
        value={data.name}
        onChange={handleChange}
      />
      <input
        className="m-4 bg-gray-100"
        type="number"
        name="price"
        placeholder="Price"
        value={data.price}
        onChange={handleChange}
      />
      <input
        className="m-4 bg-gray-100"
        type="text"
        name="vendor"
        placeholder="Vendor"
        value={data.vendor}
        onChange={handleChange}
      />
      <input
        className="m-4 bg-gray-100"
        type="number"
        name="available"
        placeholder="Available"
        value={data.available}
        onChange={handleChange}
      />
      <input
        className="m-4 bg-gray-100"
        type="text"
        name="category"
        placeholder="Category"
        value={data.category}
        onChange={handleChange}
      />
      <input
        className="my-auto py-1 px-2 md:py-2 md:px-4 bg-purple-500 text-white text-base md:text-lg font-medium text-center shadow-lg rounded-md md:rounded-lg transition duration-100 ease-in cursor-pointer hover:bg-purple-400  hover:shadow-xl active:bg-purple-700 active:shadow-md active:text-white"
        type="submit"
        value="add"
      />
    </form>
  );
}
