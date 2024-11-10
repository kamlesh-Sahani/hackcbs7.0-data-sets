import { NextRequest, NextResponse } from 'next/server';
import connectToMongoDb from '@/utils/dbConnect';
import { MyEventUser } from '@/models/User';

interface User {
  id: string;
  name: string;
  email: string;
  image?: string;
}

export const GET = async (req: NextRequest) => {
  try {
    // Connect to the database (you can make this part conditional for edge cases)
    await connectToMongoDb();
    
    // Fetch all users from MongoDB
    const users = await MyEventUser.find({}); // You can add filters here

    // Map users to include their `_id` as a string for frontend use
    const formattedUsers: User[] = users.map((user: any) => ({
      id: user._id.toString(),
      name: user.name,
      email: user.email,
      image: user.image || '/path/to/default-avatar.png',
    }));

    console.log("All Users", formattedUsers);

    // Return response using NextResponse for Edge API Routes
    return NextResponse.json(formattedUsers, { status: 200 });
  } catch (error) {
    console.error('Error fetching users:', error);

    // Return error response
    return NextResponse.json({ error: 'Failed to fetch users from MongoDB' }, { status: 500 });
  }
};
