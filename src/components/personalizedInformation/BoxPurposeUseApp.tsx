import { Typography } from "antd";
import React from "react";
import { PurposeUseAppType } from "../../pages/PersonalizedInformation";

type props = {
  purposeUserApp: PurposeUseAppType;
};

const COLOR_LIST = [
  "bg-green-600",
  "bg-blue-600",
  "bg-violet-600",
  "bg-cyan-600",
  "bg-zinc-600",
  "bg-red-600",
  "bg-orange-600"
];
export const BoxPurposeUseApp = React.memo((props: props) => {
  const { title, icon, description } = props.purposeUserApp;
  const [isSelected, setIsSelected] = React.useState<boolean>(false);
  const { Text } = Typography;

  const handleSelect = () => {
    setIsSelected((prevSelect) => !prevSelect);
  };

  const randomColor = React.useMemo(() => {
    const randomColorIndex = Math.floor(Math.random() * COLOR_LIST.length);

    return COLOR_LIST[randomColorIndex];
  }, []);

  return (
    <div
      onClick={handleSelect}
      className={`bg-[#FAFBFC] p-4 border ${
        isSelected ? "border-primary" : "border-gray-300"
      } border-2 w-full flex items-center rounded-md cursor-pointer gap-6`}
    >
      <div className={`${randomColor} text-white p-4 rounded-md`}>{icon}</div>
      <div className="flex flex-col items-start justify-between">
        <Text className="font-bold text-left text-xl text-primary">{title}</Text>
        <Text className="line-clamp-2 text-left text-lg">{description}</Text>
      </div>
    </div>
  );
});
