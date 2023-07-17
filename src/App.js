import { Route,Routes } from "react-router-dom";
import Home from './components/home';
import LoginPage from './components/login';
import RegisterPage from "./components/register";
import AboutUs from "./components/about";
import Scheduletimes from "./components/calender";
import ContactUs from "./components/contact";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/cal" element={<Scheduletimes/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
      </Routes>
    </div>
  );
}

export default App;
