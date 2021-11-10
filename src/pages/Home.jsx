import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  useEffect(() => {
    let root = document.documentElement;
    root.style.setProperty(
      "--bg-page",
      "url('images/background-home-mobile.jpg')"
    );
  });

  const navigate = useNavigate();

  return (
    <div className="text-primary text-center mt-12 px-6 flex flex-col items-center pb-12 md:mt-26">
      <h4 className="text-base text-xl font-barlow-cond">
        SO, YOU WANT TO TRAVEL TO
      </h4>
      <h1 className="text-80px text-white my-4 leading-100px md:text-9.375rem">
        SPACE
      </h1>

      <p className="font-barlow leading-6 md:max-w-28.125rem">
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>

      <div
        className="mt-20 rounded-full bg-white h-150px w-150px flex items-center justify-center text-dark text-2rem cursor-pointer md:h-242px md:w-242px"
        onClick={() => navigate("/destinations")}
      >
        <span>EXPLORE</span>
      </div>
    </div>
  );
}
