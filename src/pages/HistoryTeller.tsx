import { Typography, Spin } from "antd";
import React from "react";
import { useParams } from "react-router-dom";
import { useStoryTeller } from "../hook/useStoryTeller";
import { HistoricalVideo } from "../components/storyTeller/HistoricalVideo";

const { Text } = Typography;
const HistoryTeller = React.memo(() => {
  const { id } = useParams();

  const { dataHistory } = useStoryTeller(id!);
  console.log({ dataHistory });
  return (
    <React.Fragment>
      {dataHistory ? (
        <HistoricalVideo dataHistory={dataHistory} />
      ) : (
        <div className="w-full h-screen  flex justify-center items-center flex-col">
          <Spin size="large"></Spin>
          <Text className="text-primary text-2xl mt-10">
            {" "}
            Đang gen câu chuyện...
          </Text>
        </div>
      )}
    </React.Fragment>
  );
});

export default HistoryTeller;
