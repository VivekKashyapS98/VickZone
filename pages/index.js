import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import sortObjectArray from "sort-objects-array";
import Button from "../components/Button";
import Card from "../components/Card";
import { data } from "../utils/data";

export default function Home() {
  const router = useRouter();
  const [list, setList] = useState(data);
  const [sort, setSort] = useState("name");

  //set the list by sort order
  const handleChange = (e) => {
    setSort(e.target.value);
    setList(sortObjectArray(data, e.target.value));
  };

  return (
    <>
      <Head>
        <title>Home | VickZone</title>
        <meta property="og:title" content="Home | VickZone" key="title" />
        <meta name="description" content="A Ecommerce site" key="description" />
      </Head>
      <div className="m-2 md:m-4 flex flex-row flex-nowrap justify-center items-center">
        <h3 className="text-base font-semibold md:text-lg">Sort By</h3>
        <select
          value={sort}
          onChange={handleChange}
          className="m-2 p-2 w-40 md:w-60 h-8 md:h-10 rounded-full bg-gray-100 transition-gpu duration-200 ring-gray-200 hover:ring-2 md:hover:ring-4"
        >
          <option value="name">Name</option>
          <option value="price">Price</option>
          <option value="category">Category</option>
          <option value="available">Availablity</option>
        </select>
      </div>
      {list.map((item, ind) => (
        <Card key={`${item.name}/${ind}`} item={item} />
      ))}
      <Button onClick={() => router.push("/new-item")}>Add Item</Button>
    </>
  );
}
