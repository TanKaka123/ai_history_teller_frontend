import { Typography, Spin } from "antd";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useStoryTeller } from "../hook/useStoryTeller";
import { HistoricalVideo } from "../components/storyTeller/HistoricalVideo";

const { Text } = Typography;
const DynamicStory = React.memo(() => {
  const { id } = useParams();
  const { dataHistory, isLoading } = useStoryTeller(id!);
  console.log(isLoading);
  const navigate = useNavigate();

  return (
    <React.Fragment>
      {!isLoading ? (
        dataHistory ? (
          <HistoricalVideo
            dataHistory={dataHistory}
            historicalEvent={{
              eventName: dataHistory.title,
              mainCharacter: "",
              timePeriod: "",
              description: dataHistory.summary.historical_significance,
            }}
          />
        ) : (
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
        )
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

export default DynamicStory;
