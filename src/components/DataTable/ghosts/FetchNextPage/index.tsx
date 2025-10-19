// external libraries
import { useEffect } from "react";

const FetchNextPage = ({
  inView,
  hasNextPage,
  isFetchingNextPage,
  fetchNextPage,
}: {
  inView: boolean;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  fetchNextPage: () => void;
}) => {
  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      const timer = setTimeout(() => {
        fetchNextPage();
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [inView]);

  return null;
};

export default FetchNextPage;
