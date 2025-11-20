import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const UpdateVehicle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [vehicle, setVehicle] = useState(null);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/vehicles/${id}`)
      .then(res => setVehicle(res.data))
      .catch(() => toast.error("Failed to load vehicle"));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVehicle({ ...vehicle, [name]: value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${import.meta.env.VITE_API_URL}/vehicles/${id}`, vehicle);
      toast.success("Vehicle updated!");
      navigate("/myVehicles");
    } catch {
      toast.error("Update failed");
    }
  };

  if (!vehicle) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded shadow">
      <Toaster />
      <h2 className="text-2xl font-semibold mb-4 text-center">Update Vehicle</h2>

      <form onSubmit={handleUpdate} className="space-y-4">
        <input name="vehicleName" value={vehicle.vehicleName} onChange={handleChange} className="input" />
        <input name="owner" value={vehicle.owner} onChange={handleChange} className="input" />
        <select name="category" value={vehicle.category} onChange={handleChange} className="input">
          <option value="Sedan">Sedan</option>
          <option value="SUV">SUV</option>
          <option value="Electric">Electric</option>
          <option value="Van">Van</option>
        </select>
        <input name="pricePerDay" value={vehicle.pricePerDay} onChange={handleChange} className="input" />
        <input name="location" value={vehicle.location} onChange={handleChange} className="input" />
        <select name="availability" value={vehicle.availability} onChange={handleChange} className="input">
          <option>Available</option>
          <option>Booked</option>
        </select>
        <textarea name="description" value={vehicle.description} onChange={handleChange} className="input" rows="3"></textarea>
        <input name="coverImage" value={vehicle.coverImage} onChange={handleChange} className="input" />

        <button className="bg-blue-600 text-white px-4 py-2 w-full rounded">Save Changes</button>
      </form>
    </div>
  );
};
export default UpdateVehicle;