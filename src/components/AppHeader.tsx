import { Col, Row } from "antd";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { HEADER_HEIGHT } from "../constants";

interface MenuItem {
  key: string;
  label: string;
  path: string;
}

const items: MenuItem[] = [
  {
    label: "Trang chủ",
    key: "home",
    path: "/",
  },
  {
    label: "Lịch sử",
    key: "2",
    path: "/choose",
  },
  {
    label: "Cộng đồng",
    key: "3",
    path: "/communication",
  },
];

const AppHeader: React.FC = () => {
  const location = useLocation();

  return (
    <Row
      justify={"space-between"}
      align={"middle"}
      style={{ width: "100%", height: HEADER_HEIGHT }}
      className="border-b border-b-gray-300 shadow-black flex justify-end"
    >
      <Col>
        <Row align="middle" gutter={54}>
          <Col flex={1}>
            <Row align={"middle"} className="gap-x-8">
              {items.map((item, i) => (
                <Link
                  to={item.path}
                  className={`hover:underline underline-offset-2 text-xl font-mono font-black",
                    ${
                      item.path === location.pathname
                        ? "text-primary"
                        : "text-black"
                    }`}
                  key={i}
                >
                  {item.label}
                </Link>
              ))}
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default AppHeader;
