import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const Choose = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1 className="font-bold text-center mt-8 font-sans text-primary">
        Cách chọn câu chuyện
      </h1>
      <div className="h-[60vh] w-[98vw] flex justify-center items-center gap-20">
        <Button
          type="primary"
          size="large"
          onClick={() => {
            navigate(`/pick-stories`);
          }}
          className="py-2 h-auto rounded-none font-bold text-lg bg-primary"
        >
          Chọn danh sách câu chuyện có sẵn
        </Button>
        <Button
          type="primary"
          size="large"
          onClick={() => {
            navigate(`/prompt-story`);
          }}
          className="py-2 h-auto rounded-none font-bold text-lg bg-primary"
        >
          Nhập mô tả câu chuyện
        </Button>
      </div>
    </>
  );
};
export default Choose;
