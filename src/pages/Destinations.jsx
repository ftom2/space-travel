import { useEffect, useState } from "react";
import { destinations } from "../../data.json";
import PageTitle from "../components/PageTitle";
import Tab from "../components/DestinationTab";

export default function Destinations() {
  const [selectedTab, setSelectedTab] = useState("Moon");
  const [selectedDestination, setSelectedDestination] = useState(
    destinations.find((item) => item.name === selectedTab)
  );

  useEffect(() => {
    let root = document.documentElement;
    root.style.setProperty(
      "--bg-page",
      "url('images/background-destination-mobile.jpg')"
    );
  });

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
          } pb-2 cursor-pointer`}
          onClick={() => setSelectedTab(item.name)}
          key={item.name}
        >
          {item.name}
        </li>
      );
    });
  }

  return (
    <div className="text-white flex flex-col items-center mt-6 px-6 pb-15">
      <PageTitle number="01" text="PICK YOUR DESTINATION" />
      <img
        src={selectedDestination.images.webp}
        alt={selectedTab}
        className="w-170px h-170px mt-8"
      />

      <ul className="tabs flex mt-6 text-sm gap-x-6 tracking-wider font-barlow-cond">
        {renderTabs()}
      </ul>

      <div className="tab-content flex flex-col items-center">
        <Tab
          title={selectedDestination.name}
          description={selectedDestination.description}
          distance={selectedDestination.distance}
          travelTime={selectedDestination.travel}
        />
      </div>
    </div>
  );
}
