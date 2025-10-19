// types
import type { DataRow } from "@/types";

const API_URL =
  "https://microsoftedge.github.io/Demos/json-dummy-data/5MB.json";

export const fetchAllData = async (): Promise<DataRow[]> => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return await response.json();
};

export const fetchPaginatedData = async (
  page: number,
  pageSize: number
): Promise<{
  data: DataRow[];
  hasMore: boolean;
  total: number;
}> => {
  const allData = await fetchAllData();
  const start = page * pageSize;
  const end = start + pageSize;

  return {
    data: allData.slice(start, end),
    hasMore: end < allData.length,
    total: allData.length,
  };
};
