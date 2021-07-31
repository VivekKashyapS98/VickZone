import { dataByName } from "../../utils/data";

export default function ID({ item }) {
  return (
    <div className="container h-60 flex flex-col justify-around items-center bg-gray-100 rounded-lg">
      <h3 className="text-lg font-semibold md:text-3xl">{item.name}</h3>
      <h3 className="text-base font-semibold md:text-lg">
        Category: {item.category}
      </h3>
      <h3 className="text-base font-semibold md:text-lg">
        Vendor: {item.vendor}
      </h3>
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
