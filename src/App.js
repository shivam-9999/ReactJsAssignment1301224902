import logo from './logo.svg';
import './App.css';
import LoginPage from './Component/LoginPage';
import FinalPage from './Component/FinalPage';
import StudentDetails from './Component/StudentDetails';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />}/>
            <Route path="/StudentDetails/*" element={<StudentDetails />} />
            <Route path='/Finalpage' element={<FinalPage/>}/>
          </Routes>
        </BrowserRouter>
//         {/* <LoginPage/> */}
     
    </div>
  );
}

export default App;
