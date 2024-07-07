import { Typography, Spin } from "antd";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useStoryTeller } from "../hook/useStoryTeller";
import { HistoricalVideo } from "../components/storyTeller/HistoricalVideo";
import { HISTORICAL_EVENT } from "../constants/historicalEvents";

const { Text } = Typography;
const HistoryTeller = React.memo(() => {
  const { id } = useParams();
  const { dataHistory } = useStoryTeller(id!);
  const navigate = useNavigate();
  const selectedHistoricalEvent = React.useMemo(() => {
    if (!id) return undefined;
    return HISTORICAL_EVENT.find(
      (event) => event.eventName.toLowerCase() == id.toLowerCase()
    );
  }, [id]);
  return (
    <React.Fragment>
      {!selectedHistoricalEvent ? (
        <div className="h-[80vh] w-[100vw] flex-col gap-10 flex justify-center items-center">
          <Text className=" font-sans text-3xl font-bold">
            😭 Không tìm thấy sự kiện lịch sử 😭
          </Text>
          <button
            className="bg-primary rounded-md focus:outline-none"
            onClick={() => {
              navigate(-1);
            }}
          >
            <Text className="text-xl font-normal text-white">Quay lại</Text>
          </button>
        </div>
      ) : dataHistory ? (
        <HistoricalVideo
          dataHistory={dataHistory}
          historicalEvent={selectedHistoricalEvent}
        />
      ) : (
        <div className="w-full h-screen  flex justify-center items-center flex-col">
          <Spin size="large"></Spin>
          <Text className="text-primary text-2xl mt-10">
            {" "}
            Đang kiểm tra và gen câu chuyện...
          </Text>
        </div>
      )}
    </React.Fragment>
  );
});

export default HistoryTeller;
