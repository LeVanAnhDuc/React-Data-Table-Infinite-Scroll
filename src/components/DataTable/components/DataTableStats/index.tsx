const DataTableStats = ({
  currentCount,
  totalCount,
}: {
  currentCount: number;
  totalCount: number;
}) => {
  return (
    <div className="mb-5 bg-white p-5 rounded-lg shadow-sm sticky top-0 z-30">
      <h1 className="m-0 mb-2.5 text-2xl text-gray-800 font-bold">
        React Data Table - Infinite Scroll
      </h1>
      <p className="m-0 text-gray-600 text-sm">
        Showing <span className="font-semibold">{currentCount}</span> of{" "}
        <span className="font-semibold">{totalCount}</span> rows
      </p>
    </div>
  );
};

export default DataTableStats;
