import React from "react";
import Parent from "./Props/parent";
import Notes from "./useStateExamples/notes";
import DataFetch from "./useEffect/dataFetch";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import LocalStoragePractice from "./localStoragePractice/localStoragePractice";
import Counter from "./useStateExamples/counter";
import Responsive from "./pages/responsive";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/props" element={<Parent />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/localStorageDemo" element={<LocalStoragePractice />} />
        <Route path="/responsive" element={<Responsive />} />
      </Routes>
    </>
  );
};

export default App;
