import React from "react";
import { IHistoryTeller } from "../interfaces";
import { MOCK_DATA } from "../constants/mockData";

export const useStoryTeller = (eventName: string) => {
  const [dataHistory, setDataHistory] = React.useState<IHistoryTeller>();

  React.useEffect(() => {
    setDataHistory(MOCK_DATA);
  }, []);
  
  return {
    dataHistory,
  };
};
