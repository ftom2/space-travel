export default function TechTab({ name, description }) {
  return (
    <>
      <h3 className="text-base text-primary font-barlow-cond tracking-wider">
        THE TERMINOLOGY…
      </h3>
      <h1 className="text-2xl uppercase mt-2">{name}</h1>
      <p className="text-primary mt-4 font-barlow">
        A launch vehicle or carrier rocket is a rocket-propelled vehicle used to
        carry a payload from Earth's surface to space, usually to Earth orbit or
        beyond. Our WEB-X carrier rocket is the most powerful in operation.
        Standing 150 metres tall, it's quite an awe-inspiring sight on the
        launch pad!
      </p>
    </>
  );
}
