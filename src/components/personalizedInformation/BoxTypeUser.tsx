import { Typography } from "antd";
import React from "react";
import { TypeUserType } from "../../pages/PersonalizedInformation";

type props = {
  typeUser: TypeUserType;
};

const COLOR_LIST = [
  "bg-green-600",
  "bg-blue-600",
  "bg-violet-600",
  "bg-cyan-600",
  "bg-zinc-600",
  "bg-red-600",
  "bg-orange-600",
];
export const BoxTypeUser = React.memo((props: props) => {
  const { title, icon, description } = props.typeUser;
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
        isSelected ? "border-secondary" : "border-[#F1F2F4]"
      } border-2 w-full flex items-center rounded-md cursor-pointer gap-4`}
    >
      <div className={`${randomColor} text-white p-2 rounded-md`}>{icon}</div>
      <div className="flex flex-col items-start justify-between">
        <Text className="font-bold text-left">{title}</Text>
        <Text className="line-clamp-1 text-left">{description}</Text>
      </div>
    </div>
  );
});
