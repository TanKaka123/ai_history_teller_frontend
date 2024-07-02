import { Typography } from "antd";
import { IoShareSocial } from "react-icons/io5";
import { MdOutlinePublic } from "react-icons/md";
import { IHistoryTeller } from "../../interfaces";
import useDisclosure from "../../hook/useDisclosure";
import { AcademicModal } from "./AcademicModal";
import { CheckKnowledgeModal } from "./CheckKnowledgeModal";
import { HistoricalEvent } from "../../type";
import React from "react";
import { AudioPlayer } from "./AudioPlayer";
import { SubtitleStory } from "./SubtitleStory";

type HistoricalVideoProps = {
  dataHistory: IHistoryTeller;
  historicalEvent: HistoricalEvent;
};

const { Text } = Typography;

export const HistoricalVideo = ({
  dataHistory,
  historicalEvent,
}: HistoricalVideoProps) => {
  const ANIMATIONS_IMAGE = ["scaling-image", "scaling-and-move-image"];
  const {
    isOpen: isOpenAcademicInfo,
    onClose: onCloseAcademicInfo,
    onOpen: onOpenAcademicInfo,
  } = useDisclosure();
  const {
    isOpen: isOpenCheckKnowledge,
    onClose: onCloseCheckKnowledge,
    onOpen: onOpenCheckKnowledge,
  } = useDisclosure();
  const [indexImage, setIndexImage] = React.useState<number>(0);

  const [indexAnimationImage, setIndexAnimationImage] =
    React.useState<number>(0);

  React.useEffect(() => {
    if (!dataHistory) return;
    const interval = setInterval(() => {
      setIndexImage((prevIndexImage) => prevIndexImage + 1);

      setIndexAnimationImage((prevIndexAnimationImage) =>
        prevIndexAnimationImage ? 0 : 1
      );
    }, 19500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-background h-[100vh]">
      <AcademicModal
        isOpen={isOpenAcademicInfo}
        onClose={onCloseAcademicInfo}
        content={dataHistory.summary}
      />
      <CheckKnowledgeModal
        isOpen={isOpenCheckKnowledge}
        onClose={onCloseCheckKnowledge}
        content={dataHistory.questionaire}
      />
      {dataHistory ? <AudioPlayer data={dataHistory.content} /> : <></>}

      <div className="scaling-image-container bg-black">
        <img
          src={dataHistory?.imgs[indexImage]}
          alt="Scaling Image"
          className={`${ANIMATIONS_IMAGE[indexAnimationImage]} `}
          style={{
            height: "70vh",
            width: "90vw",
          }}
        />
      </div>
      <div className="bg-black px-20 py-10">
        {dataHistory ? <SubtitleStory data={dataHistory.content} /> : <></>}
      </div>

      <div className="flex flex-col mt-6">
        <div className="flex px-[5vw] justify-between">
          <Text className="text-black text-4xl font-bold">
            {/* {data?.title} */}
            {historicalEvent.eventName}
          </Text>

          <div className="flex justify-end gap-4 items-center">
            <button
              className="gap-0 bg-primary py-2 flex items-center justify-between rounded-full px-6 h-16 w-[280px]"
              onClick={onOpenAcademicInfo}
            >
              <MdOutlinePublic className="text-white text-xl" />
              <Text className="text-white text-xl">Thông tin học thuật</Text>
            </button>
            <button
              className="gap-2 bg-primary py-2 flex items-center justify-between rounded-full px-6 h-16 w-[250px]"
              onClick={onOpenCheckKnowledge}
            >
              <IoShareSocial className="text-white text-xl" />
              <Text className="text-white text-lg">Kiểm tra kiến thức</Text>
            </button>
          </div>
        </div>
        <div
          className="flex justify-between items-center gap-5 pt-3"
          style={{ paddingRight: "5vw", paddingLeft: "5vw" }}
        >
          <Text className="text-black text-xl">
            <b>Nhân vật lịch sử: </b> {historicalEvent.mainCharacter}
          </Text>
        </div>
        <div
          className="flex justify-between items-center gap-5 pt-3"
          style={{ paddingRight: "5vw", paddingLeft: "5vw" }}
        >
          <Text className="text-black text-xl">
            <b>Thời điểm sự kiện: </b> {historicalEvent.timePeriod}
          </Text>
        </div>
        <div
          className="flex justify-between items-center gap-5 pt-3"
          style={{ paddingRight: "5vw", paddingLeft: "5vw" }}
        >
          <Text className="text-black text-xl">
            <b>Mô tả: </b> {historicalEvent.description}
          </Text>
        </div>
        <div className="mt-14 text-center px-48">
          {/* {data ? <SubtitleStory data={data} /> : <></>} */}
        </div>
      </div>
    </div>
  );
};
