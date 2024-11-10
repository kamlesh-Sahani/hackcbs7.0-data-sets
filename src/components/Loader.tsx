// components/Loading.tsx
"use client";

import { motion } from "framer-motion";

const Loader = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <motion.div
                className="w-16 h-16 border-4 border-t-4 border-blue-600 rounded-full"
                animate={{
                    rotate: 360,
                }}
                transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear",
                }}
            ></motion.div>
        </div>
    );
};

export default Loader;
