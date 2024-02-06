import './App.css';
import { Routes, Route } from 'react-router-dom';
import {Header} from "./components/header.js"
import {Footer} from "./components/footer.js"
import {Home} from "./pages/home.js";
import {User} from "./pages/user.js";
import {Login} from "./pages/login.js";


function App() {
  return (
    <div className='container'>
    <Header />
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="login" element={<Login />} />
  <Route path="user" element={<User />} />
   {/*  <Route path="/" element={<Locations />} />
    <Route path="/loca/:id" element={<Location />} />
    <Route path="apropos" element={<Apropos />}/>
    <Route path="*" element={<Page404 />}/> */}
  </Routes>
  <Footer />
 </div>
  );
}

export default App;
