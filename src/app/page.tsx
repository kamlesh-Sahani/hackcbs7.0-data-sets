"use client";
import { useState } from "react";
export default function Home() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loginAndRegister, setLoginAndRegister] = useState<string>('login');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation for empty fields
    if (!email || !password) {
      setError('Please fill in both fields.');
      return;
    } else {
      setError('');
      // Handle login or register logic here
      if (loginAndRegister === 'login') {
        console.log('Login successful');
      } else {
        console.log('Register successful');
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen p-10 bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-96 flex flex-col gap-3 items-center">
        <h1 className="text-4xl text-teal-400 mb-6 text-center">
          {loginAndRegister === "login" ? "Welcome Back!" : "Create Your Account"}
        </h1>

        {/* Form based on loginAndRegister state */}
        <form onSubmit={handleSubmit} className="w-full">
          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mt-2 text-gray-800 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm text-gray-300">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mt-2 text-gray-800 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter your password"
            />
          </div>

          {/* Error Message */}
          {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-teal-500 text-white font-semibold rounded-lg shadow-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400"
          >
            {loginAndRegister === "login" ? "Login" : "Register"}
          </button>
        </form>

        {/* Toggle between Login and Register */}
        <p
          onClick={() => {
            setLoginAndRegister(loginAndRegister === "login" ? "register" : "login");
            setError(''); // Reset error message when switching between forms
            setEmail(''); // Clear email and password
            setPassword('');
          }}
          className="font-medium underline text-white cursor-pointer mt-4"
        >
          {loginAndRegister === "login" ? (
            <span>Not a member? Sign up</span>
          ) : (
            <span>Already a member? Log in</span>
          )}
        </p>
      </div>
    </div>
  );
}
