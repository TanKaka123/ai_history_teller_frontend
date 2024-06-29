import React from "react";
import AppHeader from "../components/AppHeader";
import { Outlet, useLocation } from "react-router-dom";
import AppFooter from "../components/AppFooter";

const DISABLE_ROUTE = ["/personalized-information", "/history-teller"];
const MainLayout: React.FC = () => {
  const history = useLocation();
  const isEnableLayout = React.useMemo(() => {
    console.log(history.pathname);
    if (DISABLE_ROUTE.some((route) => history.pathname.includes(route)))
      return false;
    return true;
  }, [history]);
  
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div className={`${isEnableLayout ? "px-40 " : ""}`}>
        {isEnableLayout ? <AppHeader /> : <></>}
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
      {isEnableLayout ? <AppFooter /> : <></>}
    </div>
  );
};

export default MainLayout;
