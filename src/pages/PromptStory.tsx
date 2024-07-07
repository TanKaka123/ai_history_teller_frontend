import React from "react";
import { Button, Row } from "antd";
import { useNavigate } from "react-router-dom";

const PromptStory: React.FC = () => {
  // const [data, setData] = useState<unknown[]>([]);
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = React.useState<string>("");

  return (
    <div>
      <h1 className="font-bold text-center mt-8 font-sans text-primary">
        Prompt mô tả câu chuyện
      </h1>
      <p className="text-center mt-5 text-lg">
        Mô tả câu chuyện yêu thích của bạn và trải nghiệm nó.
      </p>
      <Row align="middle" justify="center" className="gap-x-3 mt-10">
        <div className="flex flex-col gap-4">
          <Button
            type="primary"
            size="large"
            onClick={() => {
              navigate(`/pick-stories`);
            }}
            className="py-2 h-auto rounded-none font-bold text-lg bg-primary"
          >
            Chọn list câu chuyện
          </Button>
          <Button
            type="primary"
            size="large"
            onClick={() => {
              navigate(`/dynamic-history-teller/${searchValue}`);
            }}
            disabled={!searchValue}
            className="py-2 h-auto rounded-none font-bold text-lg bg-primary"
          >
            Tạo câu chuyện
          </Button>
        </div>
        <div className="gap-0 flex">
          <input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="outline-none focus:outline-none border-primary border-2 h-28 w-[45vw] rounded-sm text-2xl pl-4"
            placeholder=" Nhập mô tả sự kiện, anh hùng lịch sử"
          />
        </div>
      </Row>
      <div className="text-center mt-32  mb-20 text-2xl underline text-blue-800 cursor-pointer">
        <a  target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSeE2iA59BeJSYYVUYS3kV95iFGMcMtVQNVD-C8P0-H1IfCKAw/viewform">
          Feedback về dự án AI History Teller để giúp chúng tôi phát triển hơn
        </a>
      </div>
    </div>
  );
};

export default PromptStory;
