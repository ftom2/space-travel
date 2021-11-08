export default function PageTitle(props) {
  return (
    <h4 className="text-base font-barlow-cond text-white flex tracking-wider font-barlow-cond">
      <span className="font-bold opacity-25 mix-blend-normal text-white">
        {props.number}
      </span>
      <span className="ml-4 uppercase">{props.text}</span>
    </h4>
  );
}
