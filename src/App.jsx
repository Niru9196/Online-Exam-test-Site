import React from "react";
import {
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import FirstPage from "./component/FirstPage";
import SecondPage from "./component/SecondPage";
import ThirdPage from "./component/ThirdPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/second" element={<SecondPage />} />
        <Route path="/third" element={<ThirdPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App