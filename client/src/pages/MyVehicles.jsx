import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../context/AuthProvider";
import { Link } from "react-router-dom";

const MyVehicles = () => {
  const { user } = useContext(AuthContext);
  const { data: vehicles = [], refetch } = useQuery({
    queryKey: ["myVehicles", user?.email],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/vehicles`);
      return res.data.filter((v) => v.userEmail === user.email);
    },
    enabled: !!user?.email,
  });

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this vehicle?")) return;
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/vehicles/${id}`);
      toast.success("Vehicle deleted");
      refetch();
    } catch {
      toast.error("Failed to delete");
    }
  };

  return (
    <div className="container mx-auto p-6">
      <Toaster />
      <h2 className="text-2xl font-semibold mb-4 text-center">My Vehicles</h2>

      {vehicles.length === 0 ? (
        <p className="text-center text-gray-600">No vehicles found.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {vehicles.map((v) => (
            <div key={v._id} className="border p-4 rounded shadow-sm">
              <img src={v.coverImage} alt={v.vehicleName} className="h-40 w-full object-cover rounded" />
              <h3 className="font-bold mt-2">{v.vehicleName}</h3>
              <p className="text-sm">{v.category}</p>
              <p className="text-sm text-gray-500">{v.location}</p>
              <div className="flex justify-between mt-3">
                <Link to={`/updateVehicle/${v._id}`} className="bg-green-500 text-white px-3 py-1 rounded">Edit</Link>
                <button onClick={() => handleDelete(v._id)} className="bg-red-500 text-white px-3 py-1 rounded">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyVehicles;