export default function Tab({ title, description, distance, travelTime }) {
  return (
    <>
      <h1 className="mt-5 text-6xl uppercase">{title}</h1>

      <p className="text-center font-barlow text-primary">{description}</p>

      <hr className="my-8 border-gray-700 w-full" />

      <div className="flex flex-col items-center gap-y-3 uppercase">
        <span className="text-sm font-barlow-cond tracking-wider">
          AVG. DISTANCE
        </span>
        <span className="text-3xl">{distance}</span>
      </div>
      <div className="flex flex-col items-center gap-y-3 uppercase mt-8">
        <span className="text-sm font-barlow-cond tracking-wider">
          Est. travel time
        </span>
        <span className="text-3xl">{travelTime}</span>
      </div>
    </>
  );
}
