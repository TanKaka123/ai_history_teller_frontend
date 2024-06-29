import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import PickStory from "./pages/PickStory";
import PersonalizedInformation from "./pages/PersonalizedInformation";
import HistoryTeller from "./pages/HistoryTeller";
import { useEffect, useState } from "react";

function App() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const isProvidePersonalizedInformation = localStorage.getItem(
      "personalizedInformation"
    );
    if (isProvidePersonalizedInformation) {
      setIsAuthorized(true);
    }
    setIsChecking(false);
  }, []);

  if (isChecking) {
    return null;
  }
  return (
    <Routes>
      {isAuthorized ? (
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="pick-stories" element={<PickStory />} />
          <Route path="history-teller/:id" element={<HistoryTeller />} />
        </Route>
      ) : (
        <Route path="*" element={<PersonalizedInformation />} />
      )}
    </Routes>
  );
}

export default App;
