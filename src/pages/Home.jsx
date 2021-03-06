import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

export default function Home() {
  const isMobile = useMediaQuery({ query: "(max-width: 767.9px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });

  useEffect(() => {
    let root = document.documentElement;
    const size = isMobile ? "mobile" : isDesktop ? "desktop" : "tablet";
    const url = `url('images/background-home-${size}.jpg')`;
    root.style.setProperty("--bg-page", url);
  });

  const navigate = useNavigate();

  function goToDestination(e) {
    e.preventDefault();
    navigate("/destinations");
  }

  return (
    <div className="text-primary text-center mt-12 px-6 flex flex-col items-center pb-12 md:mt-26 lg:flex-row lg:justify-between lg:px-165px  ">
      <div>
        <h4 className="text-base text-xl font-barlow-cond">
          SO, YOU WANT TO TRAVEL TO
        </h4>
        <h1 className="text-80px text-white my-4 leading-100px md:text-9.375rem">
          SPACE
        </h1>

        <p className="font-barlow leading-6 md:max-w-28.125rem lg:text-lg">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>

      <a
        href="#"
        className="explore-btn relative mt-20 rounded-full bg-white h-150px w-150px flex items-center justify-center text-dark text-2rem cursor-pointer md:h-242px md:w-242px"
        onClick={goToDestination}
      >
        <span>EXPLORE</span>
      </a>
    </div>
  );
}
