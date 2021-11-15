import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { crew } from "../../data.json";
import PageTitle from "../components/PageTitle";
import Tab from "../components/MemberTab";

export default function Crew() {
  const isMobile = useMediaQuery({ query: "(max-width: 767.9px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  const [selectedTab, setSelectedTab] = useState(crew[0].name);
  const [selectedMember, setSelectedMember] = useState(
    crew.find((item) => item.name === selectedTab)
  );

  useEffect(() => {
    let root = document.documentElement;
    const size = isMobile ? "mobile" : isDesktop ? "desktop" : "tablet";
    const url = `url('images/background-crew-${size}.jpg')`;
    root.style.setProperty("--bg-page", url);
  });

  useEffect(() => {
    const member = crew.find((item) => item.name === selectedTab);
    setSelectedMember(member);
  }, [selectedTab]);

  function renderTabs() {
    return crew.map((item) => {
      return (
        <li
          className={`${
            selectedTab === item.name ? "" : "opacity-20"
          } pb-2 cursor-pointer bg-white rounded-full w-10px h-10px`}
          onClick={() => setSelectedTab(item.name)}
          key={item.name}
        ></li>
      );
    });
  }

  return (
    <div className="text-white grid grid-cols-1 justify-items-center  mt-6 px-6 pb-15 md:mt-15 md:pb-0 lg:pl-41 lg:pr-34 lg:grid-cols-2 lg:justify-items-start">
      <PageTitle number="02" text="meet your crew" className="lg:hidden" />
      <img
        src={selectedMember.images.webp}
        alt={selectedTab}
        className="w-full h-222px mt-8 border-b border-gray-700 object-contain md:border-none md:mt-10 md:h-572px md:row-start-5 lg:row-start-1 lg:col-start-2"
      />

      <div className="grid grid-cols-1 justify-items-center lg:justify-items-start">
        <PageTitle number="02" text="meet your crew" />
        <ul className="tabs flex mt-8 gap-x-4 md:mt-10 lg:grid-row-3">
          {renderTabs()}
        </ul>

        <div className="tab-content flex flex-col items-center mt-8 text-white text-center md:max-w-458px lg:items-start lg:text-left lg:max-w-800px">
          <Tab
            name={selectedMember.name}
            bio={selectedMember.bio}
            role={selectedMember.role}
          />
        </div>
      </div>
    </div>
  );
}
