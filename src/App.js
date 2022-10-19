import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage";
import GlobalStyle from "./assets/styles/globalStyles";
import RegisterPage from "./components/RegisterPage/RegisterPage";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path="/cadastro" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
