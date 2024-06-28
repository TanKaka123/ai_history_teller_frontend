import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import VideoList from "./pages/VideoList";
import PersonalizedInformation from "./pages/PersonalizedInformation";
import GenerateStory from "./pages/GenerateStory";
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
          <Route path="stories" element={<VideoList />} />
          <Route path="stories/:id" element={<VideoList />} />
          <Route path="generate-story" element={<GenerateStory />} />
          <Route path="history-teller/:id" element={<HistoryTeller />} />
        </Route>
      ) : (
        <Route path="*" element={<PersonalizedInformation />} />
      )}
    </Routes>
  );
}

export default App;
