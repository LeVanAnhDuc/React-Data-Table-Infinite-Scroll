// external libraries
import { memo } from "react";

// types
import type { DataRow } from "@/types";

const TableRow = memo(({ row }: { row: DataRow }) => (
  <tr className="hover:bg-gray-50 transition-colors">
    <td className="px-4 py-3 border-b border-gray-200 text-gray-700">
      {row.id}
    </td>
    <td className="px-4 py-3 border-b border-gray-200 text-gray-700 min-w-[200px]">
      {row.name}
    </td>
    <td className="px-4 py-3 border-b border-gray-200 text-gray-700">
      {row.language}
    </td>
    <td className="px-4 py-3 border-b border-gray-200 text-gray-700">
      {row.version}
    </td>
    <td className="px-4 py-3 border-b border-gray-200 text-gray-700">
      {row.bio}
    </td>
  </tr>
));

export default TableRow;
