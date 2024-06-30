import React from "react";
import { Button, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { HISTORICAL_EVENT } from "../constants/historicalEvents";
import { HistoricalEventItem } from "../components/generateStory/HistoricalEventItem";
import { HistoricalEvent } from "../type";

const VideoList: React.FC = () => {
  // const [data, setData] = useState<unknown[]>([]);
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = React.useState<string>("");
  const [selectedEvent, setSelectedEvent] = React.useState<HistoricalEvent>();

  const visibleHistoricalEvents = React.useMemo(() => {
    return HISTORICAL_EVENT.filter(
      (event) =>
        event.eventName
          .toLocaleLowerCase()
          .includes(searchValue.toLocaleLowerCase()) ||
        event.mainCharacter
          .toLocaleLowerCase()
          .includes(searchValue.toLocaleLowerCase()) ||
        event.description
          .toLocaleLowerCase()
          .includes(searchValue.toLocaleLowerCase())
    );
  }, [searchValue]);

  return (
    <div>
      <h1 className="font-bold text-center mt-8 font-sans text-primary">
        Chọn câu chuyện
      </h1>
      <p className="text-center mt-5 text-lg">
        Ở đây bạn sẽ xem được những câu chuyện được cộng đồng chia sẻ
      </p>
      <Row align="middle" justify="center" className="gap-x-3 mt-10">
        <div className="gap-0 flex">
          <input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="outline-none focus:outline-none border-primary border-2 h-12 w-[30vw] rounded-sm border-r-0 text-xl pl-4"
            placeholder="Tìm kiếm theo tên sự kiện, anh hùng lịch sử"
          />
          <IoSearch className="border-primary border-2 h-12 w-16 text-primary text-3xl cursor-pointer" />
        </div>
        <Button
          type="primary"
          size="large"
          onClick={() => {
            navigate(`/history-teller/${selectedEvent?.eventName}`);
          }}
          disabled={!selectedEvent}
          className="py-2 h-auto rounded-none font-bold text-lg bg-primary"
        >
          Tạo câu chuyện
        </Button>
      </Row>
      <div className="my-28" />
      <div className={`mb-10 mx-[29.5vw] ${!selectedEvent ? "h-24" : ""}`}>
        {selectedEvent ? (
          <HistoricalEventItem event={selectedEvent} isSelected={true} />
        ) : null}
      </div>
      <div className="flex flex-col items-center ">
        <div className="space-y-6 mb-10 w-[40vw] h-[45vh] overflow-y-scroll">
          {visibleHistoricalEvents.map((event) => (
            <HistoricalEventItem
              event={event}
              key={event.eventName}
              onClick={() => setSelectedEvent(event)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoList;
