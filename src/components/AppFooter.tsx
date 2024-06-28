import { Typography } from "antd";

import React from "react";

const AppFooter: React.FC = () => {
  return (
    <div className="bg-primary px-40 py-2 text-center">
      <Typography.Text className="font-bold text-white text-2xl">
        © 2024 Copyright: openUS
      </Typography.Text>
    </div>
  );
};

export default AppFooter;
