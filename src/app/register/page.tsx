"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { auth  } from '@/auth';
import { redirect } from 'next/navigation';
export default function SignUp() {
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const router = useRouter();
    const signUp = async (formData: FormData) => {
        setLoading(true);
        setErrorMessage(null);
        try {
            const name = formData.get("name") as string | undefined;
            const email = formData.get("email") as string | undefined;
            const password = formData.get("password") as string | undefined;
            const response = await fetch("/api/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password }),
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Error in Sign Up");
            }
            router.push("/login");
        } catch (error: any) {
          
            setErrorMessage(error.message);
        } finally {
            setLoading(false);
        }
    };
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        await signUp(formData);
    };
    return (
        <div className="flex justify-center items-center h-screen p-10">
            <div className="bg-gray-100 p-8 w-[450px] flex flex-col gap-3 items-center rounded-xl border-2 border-gray-200">
                <h1 className="text-4xl text-[#003366] mb-6 text-center">
                    Create Your Account
                </h1>

                {/* Form based on loginAndRegister state */}
                <form onSubmit={handleSubmit} className="w-full">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm text-gray-600">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full px-4 py-2 mt-2 text-gray-800 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003366] border border-gray-200"
                            placeholder="Enter your fullname"
                        />
                    </div>
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
                            name="password"
                            className="w-full px-4 py-2 mt-2 text-gray-800 bg-gray-100 rounded-lg focus:outline-none focus:ring-2  focus:ring-[#003366] border border-gray-200"
                            placeholder="Enter your password"
                        />
                    </div>

                    {/* Submit Button */}
                    <Link href="/"><p
                        onClick={() => {
                        }}
                        className="font-medium  hover:underline text-gray-600 cursor-pointer my-4 "
                    >

                        <span>Already a member? Log in</span>

                    </p>
                    </Link>
                    <button
                        type="submit"
                        className="w-full py-3 bg-[#003366] text-white font-semibold rounded-lg shadow-lg hover:bg-[#003366c8] focus:outline-none "
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
}
