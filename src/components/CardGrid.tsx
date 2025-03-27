function CardGrid({
  children,
  title = "",
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <div className="h-full w-full">
      <div className="mx-auto my-0 max-w-screen-xl">
        {title && <h2 className="my-4 px-2 text-2xl">{title}</h2>}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-5">
          {children}
        </div>
      </div>
    </div>
  );
}

export default CardGrid;
