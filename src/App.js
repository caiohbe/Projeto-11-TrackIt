import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage";
import GlobalStyle from "./assets/styles/globalStyles";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import HabitsPage from "./components/HabitsPage/HabitsPage";
import TodayPage from "./components/TodayPage/TodayPage";
import HistoryPage from "./components/HistoryPage/HistoryPage";
import AuthProvider from "./contexts/auth";
import { useState } from "react";

function App() {
  const [token, setToken] = useState('')

  return (
    <BrowserRouter>
      <GlobalStyle />
      <AuthProvider>
        <Routes>
          <Route path='/' element={<LoginPage setToken={setToken} />} />
          <Route path="/cadastro" element={<RegisterPage />} />
          <Route path="/habitos" element={<HabitsPage token={token} />} />
          <Route path="/hoje" element={<TodayPage token={token} />} />
          <Route path="/historico" element={<HistoryPage token={token} />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
