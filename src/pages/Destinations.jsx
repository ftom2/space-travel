import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { destinations } from "../../data.json";
import PageTitle from "../components/PageTitle";
import Tab from "../components/DestinationTab";

export default function Destinations() {
  const isMobile = useMediaQuery({ query: "(max-width: 767.9px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  const [selectedTab, setSelectedTab] = useState("Moon");
  const [selectedDestination, setSelectedDestination] = useState(
    destinations.find((item) => item.name === selectedTab)
  );

  useEffect(() => {
    let root = document.documentElement;
    const size = isMobile ? "mobile" : isDesktop ? "desktop" : "tablet";
    const url = `url('images/background-destination-${size}.jpg')`;
    root.style.setProperty("--bg-page", url);
  });

  //when selectedTab changes, we pick a new destination accordingly
  useEffect(() => {
    const destination = destinations.find((item) => item.name === selectedTab);
    setSelectedDestination(destination);
  }, [selectedTab]);

  function renderTabs() {
    return destinations.map((item) => {
      return (
        <li
          className={`${
            selectedTab === item.name ? "border-b-2 border-white" : ""
          } pb-2 cursor-pointer uppercase md:text-base`}
          onClick={() => setSelectedTab(item.name)}
          key={item.name}
        >
          {item.name}
        </li>
      );
    });
  }

  return (
    <div className="text-white flex flex-col items-center mt-6 px-6 pb-15 md:mt-15  lg:pl-41 lg:pr-34">
      <PageTitle number="01" text="PICK YOUR DESTINATION" />
      <div className="flex flex-col items-center lg:flex-row lg:gap-x-39">
        <img
          src={selectedDestination.images.webp}
          alt={selectedTab}
          className="w-170px h-170px mt-8 w-300px h-300px"
        />

        <div className="flex flex-col items-center">
          <ul className="tabs flex mt-6 text-sm gap-x-6 tracking-wider font-barlow-cond md:mt-14">
            {renderTabs()}
          </ul>

          <div className="tab-content flex flex-col items-center md:mt-8 md:max-w-573px lg:max-w-auto">
            <Tab
              title={selectedDestination.name}
              description={selectedDestination.description}
              distance={selectedDestination.distance}
              travelTime={selectedDestination.travel}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
