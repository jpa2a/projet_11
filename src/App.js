import './App.css';
import { Routes, Route } from 'react-router-dom';
import {Header} from "./components/header.js"
import {Footer} from "./components/footer.js"
import {Home} from "./pages/home.js";
import {User} from "./pages/user.js";
import {Login} from "./pages/login.js";


function App() {
  return (
    <>
    <Header />
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="login" element={<Login />} />
  <Route path="user" element={<User />} />
  </Routes>
  <Footer />
 </>
  );
}

export default App;
