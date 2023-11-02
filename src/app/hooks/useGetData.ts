import { getDocData } from "@/lib/api";
import { useEffect, useState } from "react";

export const useGetData = (id: any, url: string) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
    error: false,
  });

  useEffect(() => {
    const getUserData = async () => {
      if (!id) {
        setState({ data: [], loading: false, error: true });
        return;
      }
      const res = await getDocData(url, id);

      if (!res || !res.data) {
        setState({ data: [], loading: false, error: true });
      } else {
        setState({ data: res.data, loading: false, error: false });
      }
    };

    getUserData();
  }, [id]);
  return state;
};
