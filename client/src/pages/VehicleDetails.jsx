import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../context/AuthProvider";

const VehicleDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const { data: vehicle, isLoading } = useQuery({
    queryKey: ["vehicle", id],
    queryFn: async () => (await axios.get(`${import.meta.env.VITE_API_URL}/vehicles/${id}`)).data,
  });

  const handleBook = async () => {
    if (!user?.email) return toast.error("Please login to book.");
    try {
      const bookingData = {
        vehicleId: vehicle._id,
        vehicleName: vehicle.vehicleName,
        userEmail: user.email,
      };
      await axios.post(`${import.meta.env.VITE_API_URL}/bookings`, bookingData);
      toast.success("Booking successful!");
      navigate("/myBookings");
    } catch (err) {
      console.error(err);
      toast.error("Failed to book vehicle.");
    }
  };

  if (isLoading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow">
      <Toaster />
      <img src={vehicle.coverImage} alt={vehicle.vehicleName} className="w-full h-64 object-cover rounded" />
      <h2 className="text-3xl font-bold mt-4">{vehicle.vehicleName}</h2>
      <p className="text-gray-600">{vehicle.category} | {vehicle.location}</p>
      <p className="mt-2">Owned by: <strong>{vehicle.owner}</strong></p>
      <p className="mt-2 text-lg text-blue-600 font-semibold">${vehicle.pricePerDay}/day</p>
      <p className="mt-4">{vehicle.description}</p>

      <button
        onClick={handleBook}
        className="bg-blue-600 text-white px-6 py-2 mt-6 rounded hover:bg-blue-700 transition"
      >
        Book Now
      </button>
    </div>
  );
};

export default VehicleDetails;