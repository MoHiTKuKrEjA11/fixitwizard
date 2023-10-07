import './App.css';
import Home from './Components/Home/Home';
import SignRegister from './Components/SignRegister/SignRegister'
import Forms from './Components/Forms/Forms'
import Sign from './Components/Sign/Sign';
import AuthDeatils from './Components/Sign/AuthDeatils';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
function App() {
  return (

    <div className="App">

        <Router>
        {/* <Navbar /> */}
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/forms" element={<Forms/>} />
            <Route exact path="/sign" element={<Sign/>} />
            <Route exact path="/home" element={<Home/>} />
            <Route exact path="/forms" element={<Forms/>} />
            <Route exact path="/home" element={<Home/>} />
            <Route exact path="/forms" element={<Forms/>} />
            <Route exact path="/forms" element={<Forms/>} />
          </Routes>
        </Router>
          {/* <Home/> */}

      {/* <SignRegister/> */}
      {/* <Navbar/> */}
      {/* <Forms/> */}
      {/* <Sign/> */}
      {/* <AuthDeatils/> */}
    </div>

      );
}

export default App;
