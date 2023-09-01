import {Routes, Route} from "react-router-dom";
// import { FilterPanel } from 'components/FilterPanel';
// import { JobList } from 'components/JobList';
import { NavBar } from 'components/NavBar/NavBar';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { addPositions } from 'store/positions/position-actions';

import data from './mock/data.json'
import WelcomePage from "pages/Welcome/WelcomePage";
import MainPage from "pages/MainPage/MainPage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addPositions(data))
  })


  return (
    <>
    <NavBar />
    <Routes >
      <Route exact path="/" element={ <WelcomePage /> } />
      <Route path="/main" element={ <MainPage /> } />
    </Routes>
    </>
  );
}

export default App;
