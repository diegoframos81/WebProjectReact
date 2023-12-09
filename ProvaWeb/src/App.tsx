import Aos from "aos";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useCustomThemeContext } from "./hooks/useCustomTheme";
import { Main } from "./pages/Main/index";

import { GlobalStyles } from "./styles/GlobalStyles";

import "aos/dist/aos.css";
import { Header } from "./components/Header";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { UserLists } from "./pages/ListaUsers";

function App() {
  const { currentTheme } = useCustomThemeContext();

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <ThemeProvider theme={currentTheme}>
      <Header />
      <BrowserRouter>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/main" element={<Main />} />
          <Route path="/register" element={<Register />} />
          <Route path="/userList" element={<UserLists />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
