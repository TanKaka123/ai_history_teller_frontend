import React from "react";
import { IHistoryTeller } from "../interfaces";
import { MOCK_DATA } from "../constants/mockData";

export const useStoryTeller = (eventName: string) => {
  const [dataHistory, setDataHistory] = React.useState<IHistoryTeller>();
  const personalizedInformation = JSON.parse(
    localStorage.getItem("personalizedInformation") ?? "{}"
  );
  React.useEffect(() => {
    // Fetch data from API endpoint
    fetch(process.env.REACT_APP_API_HISTORY_ENDPOINT, {
      body: {
        ...personalizedInformation,
        eventName
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Assuming data is successfully fetched and parsed
        setDataHistory(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        // Fallback to mock data if fetching fails
        setDataHistory(MOCK_DATA);
      });
  }, []);

  return {
    dataHistory,
  };
};
