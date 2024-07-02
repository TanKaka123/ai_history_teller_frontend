import { Row, Typography } from "antd";
import React from "react";
import { ISummary } from "../../interfaces";

type AcademicModalProps = {
  onClose: () => void;
  isOpen: boolean;
  content: ISummary;
};

const genTitle = (key: string) => {
  switch (key) {
    case "context":
      return "Ngữ cảnh trước sự kiện";
    case "historical_significance":
      return "Ý nghĩa lịch sử";
    case "main_happenings":
      return "Diễn biến chính";
    case "result":
      return "Kết quả";
    default:
      return "Undified title";
  }
};

const { Text } = Typography;

export const AcademicModal = React.memo(
  ({ isOpen, content, onClose }: AcademicModalProps) => {
    if (!isOpen) return null;
    return (
      <div
        id="static-modal"
        className=" overflow-y-auto overflow-x-hidden fixed top-28 right-0 left-0 z-50  md:inset-0 flex justify-center items-center"
      >
        <div className="relative p-4 h-fit w-[80vw] mb-10">
          <div className="mb-10 overflow-y-auto relative bg-white rounded-lg shadow h-full">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
                Thông tin học thuật
              </h2>
            </div>
            <div className="p-4 md:p-5 space-y-6">
              {Object.entries(content).map(([key, value], index) => {
                return (
                  <div key={index}>
                    <Text className="text-xl font-bold text-primary">
                      {genTitle(key)}
                    </Text>
                    <p className="text-lg leading-relaxed text-gray-500 dark:text-gray-400">
                      {value}
                    </p>
                  </div>
                );
              })}
            </div>
            <Row className="gap-5 justify-center mr-10 my-10">
              <button className="border border-gray-300 rounded-md focus:outline-none" onClick={onClose}>
                <Text className="text-xl font-normal text-gray-500">Đóng</Text>
              </button>
              <button className="bg-primary rounded-md focus:outline-none">
                <Text className="text-xl font-normal text-white">
                  Kiểm tra kiến thức
                </Text>
              </button>
            </Row>
          </div>
        </div>
      </div>
    );
  }
);
