import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage";
import GlobalStyle from "./assets/styles/globalStyles";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<LoginPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
