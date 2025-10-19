export const TABLE_COLUMNS = ["ID", "Name", "Language", "Version", "Bio"];

const TableHeader = () => (
  <thead className="bg-gray-300 sticky top-[100px] z-20">
    <tr>
      {TABLE_COLUMNS.map((column) => (
        <th
          key={column}
          className="px-4 py-3 text-left font-semibold text-gray-800 border-b-2 border-gray-200 whitespace-nowrap"
        >
          {column}
        </th>
      ))}
    </tr>
  </thead>
);

export default TableHeader;
