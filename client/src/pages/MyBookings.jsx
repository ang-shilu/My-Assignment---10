import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { AuthContext } from "../context/AuthProvider";
import { format } from "date-fns";

const MyBookings = () => {
  const { user } = useContext(AuthContext);

  const { data: bookings = [], isLoading } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/bookings?email=${user.email}`);
      return res.data;
    },
    enabled: !!user?.email,
  });

  if (isLoading) return <p className="text-center mt-10">Loading bookings...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4 text-center">My Bookings</h2>

      {bookings.length === 0 ? (
        <p className="text-center text-gray-600">You haven’t booked any vehicles yet.</p>
      ) : (
        <div className="space-y-4">
          {bookings.map((b) => (
            <div key={b._id} className="border p-4 rounded shadow-sm flex justify-between">
              <div>
                <h3 className="font-bold text-lg">{b.vehicleName}</h3>
                <p className="text-sm text-gray-500">Booked on: {format(new Date(b.date), "PPP")}</p>
              </div>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded text-sm">Confirmed</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBookings;