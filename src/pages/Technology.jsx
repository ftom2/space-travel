import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { technology } from "../../data.json";
import PageTitle from "../components/PageTitle";
import Tab from "../components/TechTab";

export default function Technology() {
  const isMobile = useMediaQuery({ query: "(max-width: 767.9px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  const [selectedTab, setSelectedTab] = useState(technology[0].name);
  const [selectedTechnology, setSelectedTechnology] = useState(
    technology.find((item) => item.name === selectedTab)
  );

  useEffect(() => {
    const root = document.documentElement;
    const size = isMobile ? "mobile" : isDesktop ? "desktop" : "tablet";
    const url = `url('images/background-technology-${size}.jpg')`;
    root.style.setProperty("--bg-page", url);
  });

  useEffect(() => {
    const tech = technology.find((item) => item.name === selectedTab);
    setSelectedTechnology(tech);
  }, [selectedTab]);

  function renderTabs() {
    return technology.map((item, idx) => {
      return (
        <li
          className={`${
            selectedTab === item.name
              ? "bg-white text-gray-900"
              : "text-white border border-gray-300"
          } cursor-pointer rounded-full w-10 h-10 flex items-center justify-center md:h-15 md:w-15 md:text-2xl`}
          onClick={() => setSelectedTab(item.name)}
          key={item.name}
        >
          {idx + 1}
        </li>
      );
    });
  }

  return (
    <div className="text-white flex flex-col items-center mt-6 pb-15 md:mt-15 lg:pl-41 lg:grid lg:grid-cols-3">
      <PageTitle
        number="03"
        text="space launch 101"
        className="md:w-full md:px-6 lg:col-span-3"
      />
      <img
        src={
          isMobile || isDesktop
            ? selectedTechnology.images.portrait
            : selectedTechnology.images.landscape
        }
        alt={selectedTab}
        className="w-full h-170px mt-8 border-b border-gray-700 object-cover md:h-310px lg:col-start-3 lg:border-none lg:w-515px lg:h-527px lg:justify-self-end"
      />
      <div className="flex flex-col items-center lg:flex-row lg:row-start-2 lg:col-span-2 lg:mr-12">
        <ul className="tabs flex mt-8 gap-x-4 px-6 md:mt-14 lg:flex-col lg:gap-y-8">
          {renderTabs()}
        </ul>

        <div className="tab-content flex flex-col items-center mt-6 px-6 text-white text-center md:mt-11 lg:text-left lg:items-start">
          <Tab
            name={selectedTechnology.name}
            description={selectedTechnology.description}
          />
        </div>
      </div>
    </div>
  );
}
