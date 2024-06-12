import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('patient'); // Default role is set to 'patient'

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle signup logic
    console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
    console.log("Role:", role);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-xl w-full bg-white rounded-xl overflow-hidden shadow-xl border border-black">
        <div className="px-10 py-8">
          <h2 className="text-3xl font-semibold text-center mb-6">Sign up for a new account</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                id="fullName"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                autoComplete="name"
                required
                className="mt-1 block w-full h-12 border border-black rounded-md shadow-sm focus:ring-primaryColor focus:border-primaryColor sm:text-sm"
              />
            </div>
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
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="new-password"
                required
                className="mt-1 block w-full h-12 border border-black rounded-md shadow-sm focus:ring-primaryColor focus:border-primaryColor sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                autoComplete="new-password"
                required
                className="mt-1 block w-full h-12 border border-black rounded-md shadow-sm focus:ring-primaryColor focus:border-primaryColor sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
              <select
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="mt-1 block w-full h-12 border border-black rounded-md shadow-sm focus:ring-primaryColor focus:border-primaryColor sm:text-sm"
              >
                <option value="patient">Patient</option>
                <option value="doctor">Doctor</option>
              </select>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primaryColor hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primaryColor"
              >
                Sign up
              </button>
            </div>
          </form>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">Already have an account? <Link to="/login" className="font-medium text-primaryColor hover:text-primaryColor-dark">Log in</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
