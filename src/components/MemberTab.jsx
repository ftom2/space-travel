export default function MemeberTab(props) {
  return (
    <>
      <h3 className="text-base opacity-50 uppercase tracking-wider">
        {props.role}
      </h3>
      <h1 className=" mt-2 text-2xl uppercase tracking-wider">{props.name}</h1>
      <p className="text-primary text-base font-barlow text-center mt-4">
        {props.bio}
      </p>
    </>
  );
}
