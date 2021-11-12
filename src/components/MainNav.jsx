import { NavLink } from "react-router-dom";

export default function MainNav(props) {
  const links = [
    {
      number: "00",
      text: "Home",
      path: "/",
    },
    {
      number: "01",
      text: "Destination",
      path: "/destinations",
    },
    {
      number: "02",
      text: "Crew",
      path: "/crew",
    },
    {
      number: "03",
      text: "Technology",
      path: "/technology",
    },
  ];

  return (
    <nav
      className={`main-nav fixed right-0 top-0 h-full bg-white bg-opacity-5 w-8/12 text-white mobile-nav p-8 transition transform origin-right z-50 md:h-auto md:w-auto md:py-0 md:absolute ${
        props.show ? "scale-x-100" : "scale-x-0 md:scale-x-100"
      }`}
    >
      <img
        src="images/icon-close.svg"
        alt=""
        className="w-5 h-5 ml-auto md:hidden"
        onClick={props.onClick}
      />
      <ul className="uppercase text-white space-y-8 font-barlow-cond tracking-wider mt-16 md:flex md:mt-0 md:space-y-0 md:space-x-9">
        {links.map((link) => {
          return (
            <li key={link.number}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "flex py-8 md:border-b-2 md:border-white"
                    : "flex py-8"
                }
                onClick={props.onClick}
              >
                <span className="font-bold md:hidden">{link.number}</span>
                <span className="ml-3 md:ml-0">{link.text}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
