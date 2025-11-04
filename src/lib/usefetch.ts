import { useState, useCallback, useRef } from "react";
import type { AxiosRequestConfig } from "axios";
import { api } from "./api";

type PaginatedResponse<T> = {
  data: T[];
  total: number;
  page: number;
  lastPage: number;
};

type UsePaginatedFetch<T> = {
  data: T[];
  loading: boolean;
  error: string | null;
  fetchNextPage: () => void;
  hasMore: boolean;
  reset: () => void;
};

export function useFetch<T>(
  url: string,
  limit = 10,
  extraConfig: AxiosRequestConfig = {}
): UsePaginatedFetch<T> {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);

  const offsetRef = useRef(0);
  const loadingRef = useRef(false);
  const hasMoreRef = useRef(true);

  const fetchNextPage = useCallback(async () => {
    if (loadingRef.current || !hasMoreRef.current) return;

    loadingRef.current = true;
    setLoading(true);
    setError(null);

    try {
      const response: any = await api.get<PaginatedResponse<T>>(url, {
        ...extraConfig,
        params: {
          ...(extraConfig.params || {}),
          limit,
          offset: offsetRef.current,
        },
      });

      setData((prev) => [...prev, ...response.data]);

      const more = response.data.length === limit;
      setHasMore(more);
      hasMoreRef.current = more;

      offsetRef.current += limit;
    } catch (err: any) {
      const message =
        err.response?.data?.message || err.message || "Error desconocido";
      setError(message);
    } finally {
      loadingRef.current = false;
      setLoading(false);
    }
  }, [url, limit, extraConfig]);

  const reset = () => {
    setData([]);
    setHasMore(true);
    offsetRef.current = 0;
    hasMoreRef.current = true;
  };

  return {
    data,
    loading,
    error,
    fetchNextPage,
    hasMore,
    reset,
  };
}
