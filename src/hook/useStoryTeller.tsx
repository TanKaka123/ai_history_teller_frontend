import React from "react";
import { IHistoryTeller } from "../interfaces";
import axios from "axios";

const END_POINT = "http://18.141.185.208:8000/api/v1/story/create-story/";

export const useStoryTeller = (eventName: string) => {
  const [dataHistory, setDataHistory] = React.useState<IHistoryTeller | undefined>();
  const [ isLoading, setIsLoading ] = React.useState<boolean>(false)

  React.useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(async () => {
      const personalizedInformation = {
        text_search: eventName,
        ...JSON.parse(localStorage.getItem("personalizedInformation") ?? "{}"),
      };

      try {
        const response = await axios.post(END_POINT, personalizedInformation);

        if(response.data && !response.data.msg){
            setDataHistory(response.data);
        }
     
      } catch (error) {
        console.error("Error:", error);
      }
      finally{
        setIsLoading(false);
      }
    }, 8000);

    return () => clearTimeout(timer);
  }, [eventName]);

  return {
    dataHistory,
    isLoading
  };
};