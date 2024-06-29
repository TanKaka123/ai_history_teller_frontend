import { Typography } from "antd";
import React from "react";
import { FaChevronRight, FaGithub } from "react-icons/fa6";

const { Text } = Typography;

const Home = () => {
  return (
    <div className="text-center mt-[10vh]">
      <Text className="text-center text-primary text-6xl font-extrabold font-mono">
        &#123; AI Histor Teller &#125;
      </Text>
      <div className="my-20 px-[20vw]">
        <Text className=" text-wrap text-2xl font-mono font-medium text-primary">
          Là công cụ hiệu quả giúp bạn dễ dàng hiểu và ghi nhớ những câu chuyện
          lịch sử hào hùng của dân tộc Việt Nam.{" "}
          <b>
            Sứ mệnh là công cụ gắn liền với học sinh Việt Nam trên hành trình
            khám phá, chinh phục và ươm mầm tình yêu, niềm tự hào lịch sử dân
            tộc
          </b>
        </Text>
      </div>
      <div className="w-full flex justify-center gap-6">
        <button className="bg-primary border border-transparent  px-8 py-3 rounded-sm flex items-center gap-4 w-52">
          <Text className="text-white text-xl">Dùng ngay</Text>
          <FaChevronRight className="text-xl text-white mt-2" />
        </button>
        <button className="border border-primary px-8 py-3 rounded-sm flex items-center justify-center gap-4 w-52 ">
          <FaGithub className="text-xl text-primary mt-1" />
          <Text className="text-primary text-xl text-center">Repository</Text>
        </button>
      </div>
    </div>
  );
};

export default Home;
