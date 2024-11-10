import React from 'react';
import { motion } from 'framer-motion';  // Import Framer Motion
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from 'next/link';

const ProjectCard = ({
  url,
  name,
  language,
  updated,
  stars,
  description
}: {
  url: string;
  name: string;
  language: string;
  updated: string;
  stars: number;
  description: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}  // Start slightly below and invisible
      animate={{ opacity: 1, y: 0 }}   // Fade in and move to normal position
      transition={{ duration: 0.4 }}   // Smooth transition effect
    >
      <Link
        href={`/project/${url}`}
        className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer flex flex-wrap"
      >
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold">
            <p className="text-blue-500 hover:underline">
              {name}
            </p>
          </h3>
          <span className="bg-gray-200 text-gray-700 text-sm py-1 px-2 rounded-md">
            {language}
          </span>
        </div>
        <p className="text-gray-600 mt-3">{description}</p>
        <div className="mt-4 flex justify-between text-sm text-gray-500">
          <span>Updated {updated}</span>
          <div className="flex space-x-2">
            <span>⭐ {stars}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default ProjectCard;
