import { Typography, Spin } from "antd";
import React from "react";
import { useParams } from "react-router-dom";
import { useStoryTeller } from "../hook/useStoryTeller";
import { HistoricalVideo } from "../components/storyTeller/HistoricalVideo";
import { HISTORICAL_EVENT } from "../constants/historicalEvents";

const { Text } = Typography;
const HistoryTeller = React.memo(() => {
  const { id } = useParams();
  const { dataHistory } = useStoryTeller(id!);

  const selectedHistoricalEvent = React.useMemo(() => {
    if (!id) return undefined;
    return HISTORICAL_EVENT.find(
      (event) => event.eventName.toLowerCase() == id.toLowerCase()
    );
  }, [id]);
  return (
    <React.Fragment>
      {!selectedHistoricalEvent ? (
        <Text>Không tìm thấy sự kiện lịch sử</Text>
      ) : dataHistory ? (
        <HistoricalVideo dataHistory={dataHistory} historicalEvent={selectedHistoricalEvent}/>
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
