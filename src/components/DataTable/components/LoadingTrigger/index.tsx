// external libraries
import { forwardRef } from "react";

const LoadingTrigger = forwardRef<
  HTMLTableRowElement,
  { hasMore: boolean; rows?: number }
>(({ hasMore, rows = 3 }, ref) => {
  if (!hasMore) return null;

  return (
    <>
      {Array.from({ length: rows }).map((_, index) => (
        <tr
          key={`skeleton-${index}`}
          ref={index === rows - 1 ? ref : null}
          className="animate-pulse"
        >
          <td className="px-4 py-3 border-b border-gray-200">
            <div className="h-4 bg-gray-200 rounded w-16"></div>
          </td>
          <td className="px-4 py-3 border-b border-gray-200">
            <div className="h-4 bg-gray-200 rounded w-32"></div>
          </td>
          <td className="px-4 py-3 border-b border-gray-200">
            <div className="h-4 bg-gray-200 rounded w-24"></div>
          </td>
          <td className="px-4 py-3 border-b border-gray-200">
            <div className="h-4 bg-gray-200 rounded w-12"></div>
          </td>
          <td className="px-4 py-3 border-b border-gray-200">
            <div className="h-4 bg-gray-200 rounded w-full"></div>
          </td>
        </tr>
      ))}
    </>
  );
});

export default LoadingTrigger;
