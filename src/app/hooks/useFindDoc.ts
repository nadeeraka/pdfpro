import { getDocById } from "@/lib/api";
import { useEffect, useState } from "react";
import React from "react";

export const useFindDoc = (id: string) => {
  const abortController = new AbortController();
  let isMounted: boolean = true;
  const [state, setState] = useState(
    useState({
      data: [],
      loading: true,
      error: false,
    })
  );
  const signal = abortController.signal;
  const apiCall = async (id: string) => {
    // console.log(id);
    const result = await getDocById("api/document", id);
    if (result) {
      setState(result);
    }
  };

  useEffect(() => {
    apiCall(id);
    return () => {
      isMounted = false;
    };
  }, [id]);

  return state;
};
