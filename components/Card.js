import Link from "next/link";

export default function Card({ item }) {
  return (
    <Link href={`/item/${item.id}`} passHref>
      <div className="m-2 md:m-4 p-2 md:p-4 flex flex-row flex-nowrap justify-between bg-gray-100 rounded-full transition-gpu duration-200 ring-gray-200 hover:ring-2 md:hover:ring-4">
        <h3 className="text-lg font-semibold md:text-3xl">{item.name}</h3>
        <h3 className="text-base font-semibold md:text-lg">
          {"$" + String(item.price)}
        </h3>
      </div>
    </Link>
  );
}
