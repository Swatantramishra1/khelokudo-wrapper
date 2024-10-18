import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 flex flex-col justify-center items-center text-white">
      <Trophy size={64} className="mb-8" />
      <h1 className="text-5xl font-bold mb-4">Sport Score Management</h1>
      <p className="text-xl mb-8">Track and manage your sports scores with ease</p>
      <div className="space-x-4">
        <Link
          to="/login"
          className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="bg-transparent border-2 border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition duration-300"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Home;