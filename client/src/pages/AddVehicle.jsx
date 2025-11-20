import { useContext, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

const AddVehicle = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    vehicleName: "",
    owner: "",
    category: "",
    pricePerDay: "",
    location: "",
    availability: "Available",
    description: "",
    coverImage: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user?.email) return toast.error("Please login first.");

    try {
      const payload = { ...formData, userEmail: user.email, createdAt: new Date() };
      await axios.post(`${import.meta.env.VITE_API_URL}/vehicles`, payload);
      toast.success("Vehicle added successfully!");
      navigate("/myVehicles");
    } catch (err) {
      console.error(err);
      toast.error("Failed to add vehicle");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded shadow">
      <Toaster />
      <h2 className="text-2xl font-semibold mb-4 text-center">Add a Vehicle</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="vehicleName" onChange={handleChange} placeholder="Vehicle Name" className="input" required />
        <input name="owner" onChange={handleChange} placeholder="Owner Name" className="input" required />
        <select name="category" onChange={handleChange} className="input" required>
          <option value="">Select Category</option>
          <option value="Sedan">Sedan</option>
          <option value="SUV">SUV</option>
          <option value="Electric">Electric</option>
          <option value="Van">Van</option>
        </select>
        <input name="pricePerDay" type="number" onChange={handleChange} placeholder="Price Per Day" className="input" required />
        <input name="location" onChange={handleChange} placeholder="Location" className="input" required />
        <select name="availability" onChange={handleChange} className="input">
          <option>Available</option>
          <option>Booked</option>
        </select>
        <textarea name="description" onChange={handleChange} placeholder="Description" className="input" rows="3" required></textarea>
        <input name="coverImage" onChange={handleChange} placeholder="Image URL" className="input" required />

        <button className="bg-blue-600 text-white px-4 py-2 w-full rounded hover:bg-blue-700 transition">
          Add Vehicle
        </button>
      </form>
    </div>
  );
};

export default AddVehicle;