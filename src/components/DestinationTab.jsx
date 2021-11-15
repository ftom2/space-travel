export default function Tab({ title, description, distance, travelTime }) {
  return (
    <>
      <h1 className="mt-5 text-6xl uppercase md:text-5rem lg:text-6.25rem">
        {title}
      </h1>

      <p className="text-center font-barlow text-primary md:mt-4 md:text-base lg:text-lg">
        {description}
      </p>

      <hr className="my-8 border-gray-700 w-full md:mt-12" />

      <div className="md:flex md:gap-x-20">
        <div className="flex flex-col items-center gap-y-3 uppercase">
          <span className="text-sm font-barlow-cond tracking-2.36px text-primary">
            AVG. DISTANCE
          </span>
          <span className="text-3xl">{distance}</span>
        </div>
        <div className="flex flex-col items-center gap-y-3 uppercase mt-8 md:mt-0">
          <span className="text-sm font-barlow-cond tracking-2.36px text-primary">
            Est. travel time
          </span>
          <span className="text-3xl">{travelTime}</span>
        </div>
      </div>
    </>
  );
}
