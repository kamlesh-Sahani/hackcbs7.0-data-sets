// pages/index.tsx

"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";  // Import Framer Motion

export default function Home() {

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="text-black h-screen flex flex-col items-center justify-center text-center px-6">
        <motion.h1
          className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to the SyncSource
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Build and deploy your projects with cutting-edge technology, fast
          deployment, and smooth integration.
        </motion.p>
        <div className="flex gap-2">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Link
              href="#features"
              className="px-8 py-3 text-lg font-semibold bg-white text-[#003366] rounded-full shadow-lg hover:bg-blue-50 transition duration-300"
            >
              Explore Features
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <Link
              href="/project"
              className="px-8 py-3 text-lg font-semibold text-white bg-[#003366] rounded-full shadow-lg hover:bg-[#0033668f] transition duration-300"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <motion.section
        id="features"
        className="py-20 bg-gray-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Key Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Feature Card 1 */}
            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300  cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-4">Fast Deployment</h3>
              <p className="text-gray-600">
                Deploy your projects in minutes with continuous integration and
                easy-to-use deployment pipelines.
              </p>
            </motion.div>

            {/* Feature Card 2 */}
            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300  cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-4">Real-time Monitoring</h3>
              <p className="text-gray-600">
                Stay on top of your project’s health with real-time analytics and
                error tracking.
              </p>
            </motion.div>

            {/* Feature Card 3 */}
            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300  cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-4">Collaboration</h3>
              <p className="text-gray-600">
                Collaborate seamlessly with your team, manage projects, and
                streamline workflows.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

    </div>
  );
}
