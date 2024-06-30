import { Row, Typography } from "antd";
import { HistoricalEvent } from "../../type";

const { Text } = Typography;

export const HistoricalEventItem = ({
  event,
  isSelected = false,
  onClick,
}: {
  event: HistoricalEvent;
  isSelected?: boolean;
  onClick?: () => void;
}) => {
  return (
    <Row
      className={`${
        isSelected ? "bg-blue-50 border-primary" : "border-gray-300"
      } w-full flex flex-nowrap hover:bg-blue-50 border hover:border-primary  px-4 py-4 rounded-md cursor-pointer`}
      onClick={() => {
        if (onClick) onClick();
      }}
    >
      <div className="w-40">
        <Text className="text-lg font-bold text-primary">
          {event.timePeriod}
        </Text>
      </div>
      <div className="flex-1 space-y-2">
        <Text className="text-base font-bold text-primary">
          {event.mainCharacter} - {event.eventName}
        </Text>
        <br />
        <Text ellipsis={true} className="text-base text-gray-500 text-wrap line-clamp-1">
          {event.description}
        </Text>
      </div>
    </Row>
  );
};
