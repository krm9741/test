import logo from "./logo.svg";
import "./App.css";
import Navigationbar from "./Pages/Navigationbar";
import {Routes,Route} from 'react-router-dom'
import Homepage from "./Pages/Homepage";
import Loginpage from "./Pages/Loginpage";
import Signuppage from "./Pages/Signuppage";
import Profilepage from "./Pages/Profilepage";

function App() {
  return (
    <div>
      <Navigationbar />
      <Routes>
      <Route path='/' element={<Homepage/>}/>
       <Route path='/login' element={<Loginpage/>}/>
        <Route path='/signup' element={<Signuppage/>}/>
        <Route path='/profile' element={<Profilepage/>}/>
      </Routes>
    </div>
    
  );
}

export default App;
