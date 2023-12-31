import './App.css';
import Home from './Components/Home/Home';
import Forms from './Components/Forms/Forms'
import Sign from './Components/Sign/Sign';
import AuthDeatils from './Components/Sign/AuthDeatils';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Footer from './Components/Footer/Footer';
function App() {
  return (

    <div className="App">

        <Router>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            {/* <Route exact path="/forms" element={<Forms/>} /> */}
            <Route exact path="/sign" element={<Sign/>} />
            <Route exact path="/home" element={<Home/>} />
            <Route exact path="/forms" element={<Forms/>} />
            <Route exact path="/home" element={<Home/>} />
          </Routes>
        </Router>
          {/* <Home/> */}
          {/* <Footer/> */}
      {/* <SignRegister/> */}
      {/* <Navbar/> */}
      {/* <Forms/> */}
      {/* <Sign/> */}
      <AuthDeatils/>
    </div>

      );
}

export default App;
