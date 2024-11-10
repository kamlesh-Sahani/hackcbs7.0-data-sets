// "use client";
// import { useState } from "react";
// import Link from "next/link";
// export default function Home() {
//   const [email, setEmail] = useState<string>('');
//   const [password, setPassword] = useState<string>('');
//   const [error, setError] = useState<string>('');
//   // const [loginAndRegister, setLoginAndRegister] = useState<string>('login');

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     // Basic validation for empty fields
//     if (!email || !password) {
//       setError('Please fill in both fields.');
//       return;
//     } else {
//       setError('');
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen p-10">
//       <div className="bg-gray-100 p-8 w-[450px] flex flex-col gap-3 items-center rounded-xl border-2 border-gray-200">
//         <h1 className="text-4xl text-[#003366] mb-6 text-center">
//           Welcome Back
//         </h1>

//         {/* Form based on loginAndRegister state */}
//         <form onSubmit={handleSubmit} className="w-full">
//           {/* Email */}
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-sm text-gray-600">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-4 py-2 mt-2 text-gray-800 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003366] border border-gray-200"
//               placeholder="Enter your email"
//             />
//           </div>

//           {/* Password */}
//           <div className="mb-6">
//             <label htmlFor="password" className="block text-sm text-gray-600">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-4 py-2 mt-2 text-gray-800 bg-gray-100 rounded-lg focus:outline-none focus:ring-2  focus:ring-[#003366] border border-gray-200"
//               placeholder="Enter your password"
//             />
//           </div>

//           {/* Error Message */}
//           {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

//           {/* Submit Button */}
//           <Link href="/register"><p
//             onClick={() => {
//             }}
//             className="font-medium  hover:underline text-gray-600 cursor-pointer my-4 "
//           >
//             <span>Not a member? Sign up</span>
//           </p></Link>
//           <button
//             type="submit"
//             className="w-full py-3 bg-[#003366] text-white font-semibold rounded-lg shadow-lg hover:bg-[#003366c8] focus:outline-none "
//           >
//             login
//           </button>
//         </form>

//       </div>
//     </div>
//   );
// }
import React from 'react'
import { getUserData } from '@/action/auth.action';
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";

const page = async() => {
  const session = await auth();
  if (!session) {
    redirect("/login");
    return null;
  }
  return (
    <div>
      
    </div>
  )
}

export default page
