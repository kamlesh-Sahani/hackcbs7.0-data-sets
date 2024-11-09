import React from 'react'

const Navbar = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-3xl font-bold">Datasets</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#" className="hover:underline">Home</a></li>
          <li><a href="#" className="hover:underline">Explore</a></li>
          <li><a href="#" className="hover:underline">Create Project</a></li>
          <li><a href="#" className="hover:underline">Profile</a></li>
        </ul>
      </nav>
    </div>
  </header>
  )
}

export default Navbar
