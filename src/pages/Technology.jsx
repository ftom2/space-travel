import { useEffect, useState } from "react";
import { technology } from "../../data.json";
import PageTitle from "../components/PageTitle";
import Tab from "../components/TechTab";

export default function Technology() {
  const [selectedTab, setSelectedTab] = useState(technology[0].name);
  const [selectedTechnology, setSelectedTechnology] = useState(
    technology.find((item) => item.name === selectedTab)
  );

  useEffect(() => {
    let root = document.documentElement;
    root.style.setProperty(
      "--bg-page",
      "url('images/background-technology-mobile.jpg')"
    );
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
          } cursor-pointer rounded-full w-10 h-10 flex items-center justify-center`}
          onClick={() => setSelectedTab(item.name)}
          key={item.name}
        >
          {idx + 1}
        </li>
      );
    });
  }

  return (
    <div className="text-white flex flex-col items-center mt-6 pb-15">
      <PageTitle number="03" text="space launch 101" />
      <img
        src={selectedTechnology.images.portrait}
        alt={selectedTab}
        className="w-full h-170px mt-8 border-b border-gray-700 object-cover"
      />

      <ul className="tabs flex mt-8 gap-x-4 px-6">{renderTabs()}</ul>

      <div className="tab-content flex flex-col items-center mt-6 px-6 text-white text-center">
        <Tab
          name={selectedTechnology.name}
          description={selectedTechnology.description}
        />
      </div>
    </div>
  );
}
