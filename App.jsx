// App.jsx
import ThemeToggle from './ThemeToggle'; // Adjust path as needed
import React from 'react';
import { format } from 'date-fns';

function App() {
  // This calculates the formatted date string
  const formattedDate = format(new Date(vehicle.createdAt), 'PPP');
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <header className="flex justify-end p-4">
        <ThemeToggle />
      </header>
      <main className="p-8 text-gray-800 dark:text-gray-200">
        <h1>Welcome to my App!</h1>
        <p>This content will change based on the theme.</p>
      </main>
    </div>
  );
}
function App() {
return (
    <div>
      <h1>{vehicle.name} Details</h1>
      <p>This vehicle was created on: <strong>{formattedDate}</strong></p>
    </div>
  );
}

export default App;