"use client";
import { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
export default function Home() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  // const [loginAndRegister, setLoginAndRegister] = useState<string>('login');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null); // State for error messages

  const loginHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission
    setLoading(true);
    setError(null); // Reset error state

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string | undefined;
    const password = formData.get("password") as string | undefined;

    if (!email || !password) {
      setError("Please provide all fields");
      setLoading(false);
      return; // Exit if fields are not filled
    }

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false, // Don't automatically redirect
        callbackUrl: "/", // Use this for manual redirection
      });

      if (result?.error) {
        console.log("Error during sign-in:", result.error);
        // Custom error handling
        if (result.error === "CredentialsSignin") {
          setError("Invalid email or password."); // Set a user-friendly error message
        } else {
          setError("An unexpected error occurred. Please try again."); // Handle any other error
        }
      } else {
        // Redirect on success
        window.location.href = "/project";
      }
    } catch (error) {
      console.error("Login failed", error);
      setError("Login failed. Please try again."); // Set a general error message
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="flex justify-center items-center h-screen p-10">
      <div className="bg-gray-100 p-8 w-[450px] flex flex-col gap-3 items-center rounded-xl border-2 border-gray-200">
        <h1 className="text-4xl text-[#003366] mb-6 text-center">
          Welcome Back
        </h1>

        {/* Form based on loginAndRegister state */}
        <form onSubmit={loginHandler} className="w-full">
          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
               name="email"
              className="w-full px-4 py-2 mt-2 text-gray-800 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003366] border border-gray-200"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 mt-2 text-gray-800 bg-gray-100 rounded-lg focus:outline-none focus:ring-2  focus:ring-[#003366] border border-gray-200"
              placeholder="Enter your password"
            />
          </div>

          {/* Error Message */}
          {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

          {/* Submit Button */}
          <Link href="/register"><p
            onClick={() => {
            }}
            className="font-medium  hover:underline text-gray-600 cursor-pointer my-4 "
          >
            <span>Not a member? Sign up</span>
          </p></Link>
          <button
            type="submit"
            className="w-full py-3 bg-[#003366] text-white font-semibold rounded-lg shadow-lg hover:bg-[#003366c8] focus:outline-none "
          >
            login
          </button>
        </form>

      </div>
    </div>
  );
}
