import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle login logic
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-lg w-full bg-white rounded-xl overflow-hidden shadow-xl border border-black">
        <div className="px-10 py-8">
          <h2 className="text-3xl font-semibold text-center mb-6">Sign in to your account</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                required
                className="mt-1 block w-full h-12 border border-black rounded-md shadow-sm focus:ring-primaryColor focus:border-primaryColor sm:text-sm"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
                className="mt-1 block w-full h-12 border border-black rounded-md shadow-sm focus:ring-primaryColor focus:border-primaryColor sm:text-sm"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primaryColor hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primaryColor"
              >
                Sign in
              </button>
            </div>
          </form>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">Don't have an account? <Link to="/Signup" className="font-medium text-primaryColor hover:text-primaryColor-dark">Register</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
