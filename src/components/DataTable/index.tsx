// external libraries
import { useInView } from "react-intersection-observer";

// hooks
import { useInfiniteData } from "@/hooks/useInfiniteData";

// types
import type { DataRow } from "@/types";

// components
import DataTableStats from "./components/DataTableStats";
import EndMessage from "./components/EndMessage";
import ErrorMessage from "./components/ErrorMessage";
import LoadingTrigger from "./components/LoadingTrigger";
import TableHeader from "./components/TableHeader";
import TableRow from "./components/TableRow";
import FetchNextPage from "./ghosts/FetchNextPage";

const DataTable = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
  } = useInfiniteData();

  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "500px",
  });

  if (error)
    return <ErrorMessage message={`Error loading data: ${error.message}`} />;

  const { total = 0 } = data?.pages[0] ?? {};

  const allRows = data?.pages.flatMap((page) => page.data) ?? [];

  return (
    <>
      <div className="w-full min-h-screen p-5 bg-gray-100">
        <DataTableStats currentCount={allRows.length} totalCount={total} />

        <div className="bg-white rounded-lg shadow-sm">
          <table className="w-full border-collapse min-w-[1200px]">
            <TableHeader />
            <tbody>
              {allRows.map((row: DataRow) => (
                <TableRow key={row.id} row={row} />
              ))}

              <LoadingTrigger
                ref={ref}
                hasMore={hasNextPage}
                rows={isLoading ? 10 : 3}
              />
            </tbody>
          </table>
        </div>

        {!hasNextPage && allRows.length > 0 && (
          <EndMessage totalCount={total} />
        )}
      </div>
      <FetchNextPage
        {...{ inView, hasNextPage, isFetchingNextPage, fetchNextPage }}
      />
    </>
  );
};

export default DataTable;
