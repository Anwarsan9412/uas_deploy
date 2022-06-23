import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Indonesia from "./pages/Indonesia";
import Layout from "./Layout";
import Provinces from "./pages/Provinces";
import { ThemeProvider } from "styled-components";
import theme from "./utils/constants/theme";

function App() {
  return (
    <div>
      {/*
       * Render Halaman Home
       * Jika ingin diubah, maka ubah di Halaman Home.
       */}
      <ThemeProvider theme={theme}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Indonesia" element={<Indonesia />}></Route>
            <Route path="/Provinces" element={<Provinces />}></Route>
          </Routes>
        </Layout>
      </ThemeProvider>
    </div>
  );
}

export default App;
