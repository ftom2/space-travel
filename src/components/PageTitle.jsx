export default function PageTitle(props) {
  return (
    <h4 className="text-base font-barlow-cond text-white flex tracking-3.37px font-barlow-cond md:w-full md:text-xl">
      <span className="font-bold opacity-25 mix-blend-normal text-white">
        {props.number}
      </span>
      <span className="ml-4 uppercase">{props.text}</span>
    </h4>
  );
}
