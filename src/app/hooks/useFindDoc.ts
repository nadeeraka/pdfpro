import { getDocById } from "@/lib/api";
import { useEffect, useState } from "react";
import React from "react";

export const useFindDoc = (id: string) => {
  const [state, setState] = useState(
    useState({
      data: [],
      loading: true,
      error: false,
    })
  );

  const apiCall = async (id: string) => {
    // console.log(id);
    const result = await getDocById("api/document", id);
    if (result) {
      setState(result);
    }
  };

  useEffect(() => {
    apiCall(id);
  }, [state]);

  return state;
};
