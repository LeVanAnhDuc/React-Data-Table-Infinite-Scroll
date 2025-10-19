// external libraries
import { useInfiniteQuery } from "@tanstack/react-query";

// services
import { fetchPaginatedData } from "@/services/api";

const PAGE_SIZE = 50;

export const useInfiniteData = () => {
  return useInfiniteQuery({
    queryKey: ["tableData"],
    queryFn: ({ pageParam = 0 }) => fetchPaginatedData(pageParam, PAGE_SIZE),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.hasMore ? allPages.length : undefined;
    },
    initialPageParam: 0,
  });
};
