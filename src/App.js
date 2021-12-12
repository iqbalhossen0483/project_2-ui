import { Routes, Route, useLocation } from 'react-router-dom';
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
import MyOrder from './Component/MyOrder/MyOrder';
function App() {
  const location = useLocation();
  return (
    <div className="bg-gray-100">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/add-service" element={<PrivateRouter element={<AddService />} />} />
        <Route path="/place-order/:id" element={<PrivateRouter element={<PlaceOrder />} />} />
        <Route path="/services" element={<Survices />} />
        <Route path="/manage-orders" element={<PrivateRouter element={<ManageOrder />} />} />
        <Route path="/sign-in" element={<LogIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/my-order" element={<PrivateRouter element={<MyOrder />} />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      {location.pathname !== "/my-order" && location.pathname !== "/manage-orders" && <Footer />}
    </div>
  );
}

export default App;
