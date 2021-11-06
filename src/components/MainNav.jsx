export default function MainNav(props) {
  return (
    <nav
      className={`main-nav fixed right-0 top-0 h-full bg-white bg-opacity-5 w-8/12 text-white mobile-nav p-8 transition transform origin-right ${
        props.show ? "scale-x-100" : "scale-x-0"
      }`}
    >
      <img
        src="images/icon-close.svg"
        alt=""
        className="w-5 h-5 ml-auto"
        onClick={props.onClick}
      />
      <ul className="uppercase text-white space-y-8 font-barlow-cond tracking-wider mt-16">
        <li className="flex">
          <span className="font-bold ">00</span>
          <span className="ml-3">Home</span>
        </li>
        <li className="flex">
          <span className="font-bold">01</span>
          <span className="ml-3">Destination</span>
        </li>
        <li className="flex">
          <span className="font-bold">02</span>
          <span className="ml-3">Crew</span>
        </li>
        <li className="flex">
          <span className="font-bold">03</span>
          <span className="ml-3">Technology</span>
        </li>
      </ul>
    </nav>
  );
}
