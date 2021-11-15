export default function PageTitle({ number, text, className }) {
  return (
    <h4
      className={`text-base font-barlow-cond text-white flex tracking-3.37px font-barlow-cond md:w-full md:text-xl lg:text-2xl ${
        className ? className : ""
      }`}
    >
      <span className="font-bold opacity-25 mix-blend-normal text-white">
        {number}
      </span>
      <span className="ml-4 uppercase">{text}</span>
    </h4>
  );
}
