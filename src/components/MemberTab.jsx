export default function MemeberTab(props) {
  return (
    <>
      <h3 className="text-base opacity-50 uppercase tracking-wider md:text-2xl lg:text-3xl">
        {props.role}
      </h3>
      <h1 className="mt-2 text-2xl uppercase tracking-wider md:text-2.5rem lg:text-3.5rem lg:mt-4">
        {props.name}
      </h1>
      <p className="text-primary text-base font-barlow text-center mt-4 lg:text-left lg:text-lg lg:mt-7">
        {props.bio}
      </p>
    </>
  );
}
