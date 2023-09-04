import { Routes, Route } from "react-router-dom";
import NavBar from 'components/NavBar/NavBar';
import WelcomePage from "pages/Welcome/WelcomePage";
import MainPage from "pages/MainPage/MainPage";

function App() {

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
