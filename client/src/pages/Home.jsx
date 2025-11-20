import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { format } from "date-fns";

const Home = () => {
  const { data: vehicles = [] } = useQuery({
    queryKey: ["latestVehicles"],
    queryFn: async () => (await axios.get(`${import.meta.env.VITE_API_URL}/vehicles`)).data,
  });

  return (
    <div>
      <section className="hero bg-blue-100 p-8 text-center">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-3xl font-bold mb-4"
        >
          Welcome to TravelEase
        </motion.h1>
        <p className="mb-4">Find the perfect vehicle for your next trip!</p>
        <a href="/allVehicles" className="bg-blue-600 text-white px-4 py-2 rounded">Explore Vehicles</a>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">Latest Vehicles</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {vehicles.slice(0, 6).map(v => (
            <div key={v._id} className="border p-4 rounded">
              <img src={v.coverImage} alt={v.vehicleName} className="h-40 w-full object-cover rounded" />
              <h3 className="font-bold mt-2">{v.vehicleName}</h3>
              <p className="text-sm text-gray-600">{v.category}</p>
              <p>${v.pricePerDay}/day</p>
              <p className="text-xs text-gray-400">{format(new Date(v.createdAt), "PPP")}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
export default Home;