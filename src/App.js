import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import AddService from './Component/AddService/AddService';
import Footer from './Component/Footer/Footer';
import NotFound from './Component/NotFound/NotFound';
import PlaceOrder from './Component/PlaceOrder/PlaceOrder';
import Survices from './Component/ServicesPage/Survices';
import ManageOrder from './Component/ManageOrder/ManageOrder';
import LogIn from './Component/Firebase/LogIn';
import SignUp from './Component/Firebase/SignUp';
import PrivateRouter from './Component/Firebase/PrivateRouter';
import AuthProvider from './Component/Firebase/AuthProvider';
import MyOrder from './Component/MyOrder/MyOrder';
function App() {
  return (
    <div className="app">
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/add-service" element={<PrivateRouter element={<AddService />} />} />
            <Route path="/place-order" element={<PrivateRouter element={<PlaceOrder />} />} />
            <Route path="/services" element={<Survices />} />
            <Route path="/manage-orders" element={<PrivateRouter element={<ManageOrder />} />} />
            <Route path="/sign-in" element={<LogIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/my-order" element={<PrivateRouter element={<MyOrder />} />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
