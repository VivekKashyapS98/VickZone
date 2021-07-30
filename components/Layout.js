import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";

export default function Layout({ children }) {
  const router = useRouter();
  //page indicators
  const homeBorder = router.pathname === "/" ? "border-b-2  md:border-b-4" : "";
  const blogBorder = router.pathname.includes("/cart")
    ? "border-b-2  md:border-b-4"
    : "";

  return (
    <div className="w-screen min-h-screen cursor-default text-gray-600">
      <Head>
        <title>VickZone</title>
        <meta property="og:title" content="VickZone" key="title" />
        <meta name="description" content="A Ecommerce site" key="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="h-20 sticky z-10 bg-gray-100 top-0 border-b-2 border-gray-200 backdrop-filter flex flex-row px-4 justify-between items-center dark:bg-gray-700 dark:text-gray-100">
        <h1 className="text-2xl font-bold font-mono md:text-4xl">VickZone</h1>
        <nav className="flex flex-row flex-nowrap">
          <Link href="/" passHref>
            <h3
              className={`m-1 sm:text-lg py-1 px-2 md:py-2 md:px-4 transition-gpu delay-100 duration-100 ${homeBorder} border-purple-500 cursor-pointer`}
            >
              Home
            </h3>
          </Link>
          <Link href="/cart" passHref>
            <h3
              className={`m-1 sm:text-lg py-1 px-2 md:py-2 md:px-4 transition-gpu delay-100 duration-100 ${blogBorder} border-purple-500 cursor-pointer`}
            >
              Cart
            </h3>
          </Link>
        </nav>
      </header>
      <div className="container m-auto dark:text-gray-100">
        <div>{children}</div>
      </div>
      <footer className="bg-gray-100 border-gray-200 flex flex-col dark:bg-gray-700 dark:text-gray-100">
        <h1
          className="text-2xl mt-2 ml-2 md:mt-4 md:ml-4 font-bold font-mono md:text-4xl cursor-pointer"
          onClick={() => router.push("/")}
        >
          VickZone
        </h1>
        <h3 className="m-2 md:m-4 text-lg font-semibold text-center sm:text-xl">
          Crafted by <span className="text-purple-500">Vivek Kashyap</span>
        </h3>
      </footer>
    </div>
  );
}
