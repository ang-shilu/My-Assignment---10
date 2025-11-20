import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const links = (
    <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/allVehicles">All Vehicles</Link></li>
      {user && <>
        <li><Link to="/addVehicle">Add Vehicle</Link></li>
        <li><Link to="/myVehicles">My Vehicles</Link></li>
        <li><Link to="/myBookings">My Bookings</Link></li>
      </>}
    </>
  );

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <Link to="/" className="font-bold text-xl">TravelEase</Link>
      <ul className="flex gap-4 items-center">
        {links}
        {user ? (
          <div className="flex items-center gap-2">
            <img src={user.photoURL} alt="user" className="w-8 h-8 rounded-full" title={user.displayName} />
            <button onClick={logout} className="bg-red-500 px-3 py-1 rounded">Logout</button>
          </div>
        ) : (
          <>
            <Link to="/login" className="bg-white text-blue-600 px-3 py-1 rounded">Login</Link>
            <Link to="/register" className="bg-green-400 px-3 py-1 rounded">Register</Link>
          </>
        )}
      </ul>
    </nav>
  );
};
export default Navbar;