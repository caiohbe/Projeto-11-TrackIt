import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage";
import GlobalStyle from "./assets/styles/globalStyles";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import HabitsPage from "./components/HabitsPage/HabitsPage";
import TodayPage from "./components/TodayPage/TodayPage";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path="/cadastro" element={<RegisterPage />} />
        <Route path="/habitos" element={<HabitsPage />} />
        <Route path="/hoje" element={<TodayPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
