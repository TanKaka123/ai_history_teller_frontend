import { Radio, Row, Typography } from "antd";
import React from "react";
import { IQuestionaire } from "../../interfaces";

type CheckKnowledgeModalProps = {
  onClose: () => void;
  isOpen: boolean;
  content: IQuestionaire[];
};

const { Text } = Typography;

export const CheckKnowledgeModal = React.memo(
  ({ isOpen, content, onClose }: CheckKnowledgeModalProps) => {
    const [answers, setAnswers] = React.useState<number[]>(
      Array.from({ length: content.length })
    );
    const onSelect = React.useCallback(
      (indexQuestion: number, indexAnswer: number) => {
        setAnswers((prevAnswers) =>
          prevAnswers.map((ans, index) => {
            if (indexQuestion === index) {
              return indexAnswer;
            }
            return ans;
          })
        );
      },
      []
    );
    const [results, setResults] = React.useState<(boolean | null)[]>(
      Array.from({ length: content.length }, () => null)
    );
    const checkAnswers = () => {
      const newResults = answers.map(
        (answer, index) => answer === content[index].answer
      );
      setResults(newResults);
    };

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
                Kiểm tra kiến thức
              </h2>
            </div>
            <div className="p-4 md:p-5 space-y-6">
              {content.map((questionaire, index) => {
                return (
                  <div className="flex flex-col gap-2 my-4">
                    <Row className="items-center gap-1">
                      <Text className="text-2xl text-primary font-bold">
                        {index + 1}.{" "}
                      </Text>
                      <Text className="text-xl">{questionaire.question}</Text>
                    </Row>
                    <Radio.Group
                      className="flex flex-wrap gap-4"
                      onChange={(e) => {
                        onSelect(index, e.target.value);
                      }}
                    >
                      {questionaire.options.map((option, optionIndex) => (
                        <Radio
                          key={optionIndex}
                          value={optionIndex}
                          className={`text-xl ${
                            results[index] !== null &&
                            content[index].answer === optionIndex
                              ? "text-green-600"
                              : ""
                          } ${
                            results[index] !== null &&
                            content[index].answer !== answers[index] &&
                            optionIndex === answers[index]
                              ? "text-red-600"
                              : ""
                          }`}
                        >
                          {option}
                        </Radio>
                      ))}
                    </Radio.Group>
                  </div>
                );
              })}
            </div>
            <Row className="gap-5 justify-center mr-10 my-10">
              <button
                className="border border-gray-300 rounded-md focus:outline-none"
                onClick={onClose}
              >
                <Text className="text-xl font-normal text-gray-500">Đóng</Text>
              </button>
              <button
                className="bg-primary rounded-md focus:outline-none"
                onClick={checkAnswers}
              >
                <Text className="text-xl font-normal text-white">
                  Kiểm tra kết quả
                </Text>
              </button>
            </Row>
          </div>
        </div>
      </div>
    );
  }
);
