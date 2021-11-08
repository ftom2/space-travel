import { useEffect, useState } from "react";
import { crew } from "../../data.json";
import PageTitle from "../components/PageTitle";
import Tab from "../components/MemberTab";

export default function Crew() {
  const [selectedTab, setSelectedTab] = useState(crew[0].name);
  const [selectedMember, setSelectedMember] = useState(
    crew.find((item) => item.name === selectedTab)
  );

  useEffect(() => {
    let root = document.documentElement;
    root.style.setProperty(
      "--bg-page",
      "url('images/background-crew-mobile.jpg')"
    );
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
    <div className="text-white flex flex-col items-center mt-6 px-6 pb-15">
      <PageTitle number="02" text="meet your crew" />
      <img
        src={selectedMember.images.webp}
        alt={selectedTab}
        className="w-full h-222px mt-8 border-b border-gray-700 object-contain"
      />

      <ul className="tabs flex mt-8 gap-x-4">{renderTabs()}</ul>

      <div className="tab-content flex flex-col items-center mt-8 text-white text-center">
        <Tab
          name={selectedMember.name}
          bio={selectedMember.bio}
          role={selectedMember.role}
        />
      </div>
    </div>
  );
}
