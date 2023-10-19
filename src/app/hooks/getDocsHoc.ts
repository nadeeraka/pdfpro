import { getDocData } from "@/lib/api";
import { useEffect, useState } from "react";

export const useDocsHoc = (id: any) => {
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

      const res = await getDocData("api/docs/get", id);

      if (!res || !res.data) {
        setState({ data: [], loading: false, error: true });
      } else {
        setState({ data: res.data.documents, loading: false, error: false });
      }
    };

    getUserData();
  }, [id]);
  return state;
};
