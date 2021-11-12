export default function TechTab({ name, description }) {
  return (
    <>
      <h3 className="text-base text-primary font-barlow-cond tracking-2.7px">
        THE TERMINOLOGY…
      </h3>
      <h1 className="text-2xl uppercase mt-2 md:text-2.5rem md:mt-4">{name}</h1>
      <p className="text-primary mt-4 font-barlow leading-25px text-base max-w-458px md:leading-28px ">
        A launch vehicle or carrier rocket is a rocket-propelled vehicle used to
        carry a payload from Earth's surface to space, usually to Earth orbit or
        beyond. Our WEB-X carrier rocket is the most powerful in operation.
        Standing 150 metres tall, it's quite an awe-inspiring sight on the
        launch pad!
      </p>
    </>
  );
}
