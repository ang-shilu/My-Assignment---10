import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AllVehicles from "./pages/AllVehicles";
import AddVehicle from "./pages/AddVehicle";
import MyVehicles from "./pages/MyVehicles";
import UpdateVehicle from "./pages/UpdateVehicle";
import MyBookings from "./pages/MyBookings";
import VehicleDetails from "./pages/VehicleDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allVehicles" element={<AllVehicles />} />
          <Route path="/addVehicle" element={<PrivateRoute><AddVehicle /></PrivateRoute>} />
          <Route path="/myVehicles" element={<PrivateRoute><MyVehicles /></PrivateRoute>} />
          <Route path="/updateVehicle/:id" element={<PrivateRoute><UpdateVehicle /></PrivateRoute>} />
          <Route path="/myBookings" element={<PrivateRoute><MyBookings /></PrivateRoute>} />
          <Route path="/vehicle/:id" element={<PrivateRoute><VehicleDetails /></PrivateRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
export default App;