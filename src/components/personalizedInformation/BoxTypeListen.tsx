import { Typography } from "antd";
import React from "react";
import { TypeListenType } from "../../pages/PersonalizedInformation";

type props = {
  typeListen: TypeListenType;
};

export const BoxTypeListen = React.memo((props: props) => {
  const { title, description, image } = props.typeListen;
  const [isSelected, setIsSelected] = React.useState<boolean>(false);
  const { Text } = Typography;

  const handleSelect = () => {
    setIsSelected((prevSelect) => !prevSelect);
  };

  return (
    <div
      onClick={handleSelect}
      className={`bg-[#FAFBFC]  border ${
        isSelected ? "border-primary" : "border-gray-300"
      } border-4 w-full rounded-md cursor-pointer`}
    >
      <img
        src={image}
        alt="image"
        className="h-48 w-full object-cover rounded-t-md rounded-b-none select-none pointer-events-none"
       
      />
      <div className="flex flex-col items-start justify-between p-4">
        <Text className="font-bold text-left text-xl text-primary">{title}</Text>
        <Text className="line-clamp-4 text-left text-base mt-4">{description}</Text>
      </div>
    </div>
  );
});
