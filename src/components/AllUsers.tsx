import React, { useEffect, useState } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  image?: string;
}

const AllUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users');

        // Check if the response is ok
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }

        // Parse the JSON body once
        const fetchedUsers: User[] = await response.json();

        // Log the data after parsing the response
        console.log("Fetched users:", fetchedUsers);

        setUsers(fetchedUsers);
      } catch (error: any) {
        setError(error.message || 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <p>Loading users...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold">All Users</h2>
      <ul className="mt-4">
        {users.length === 0 ? (
          <li>No users found</li>
        ) : (
          users.map((user) => (
            <li key={user.id} className="flex items-center space-x-4 py-2">
              <img
                src={user.image || '/path/to/default-avatar.png'}
                alt={user.name}
                className="h-8 w-8 rounded-full"
              />
              <div>
                <p className="font-semibold">{user.name}</p>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default AllUsers;
