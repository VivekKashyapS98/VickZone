export default function Button(props) {
  return (
    <button
      className="my-auto py-1 px-2 md:py-2 md:px-4 bg-purple-500 text-white text-base md:text-lg font-medium text-center shadow-lg rounded-md md:rounded-lg transition duration-100 ease-in cursor-pointer hover:bg-purple-400  hover:shadow-xl active:bg-purple-700 active:shadow-md active:text-white"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
