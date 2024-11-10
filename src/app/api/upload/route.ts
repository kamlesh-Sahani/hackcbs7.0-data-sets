import { NextResponse } from "next/server";
import connectToMongoDb from "@/utils/dbConnect";
import nextConnect from "next-connect";
import multer from "multer";
import path from "path";
import fs from "fs";




export const POST = async (req: any, res: NextResponse) => {
  try {
    // Connect to MongoDB
    await connectToMongoDb();

    // Extract repository data from the request body (assuming it's JSON)
    const { name, description } = req.body;

    // Process files and store metadata (if necessary)
    const files = req.files; // `files` will contain all the uploaded files

    console.log("Repository Info:", { name, description });
    console.log("Uploaded Files:", files);

    // Here, you can insert repository and file data into MongoDB, for example:
    // const repository = new Repository({ name, description });
    // await repository.save();

    // Optionally, you can process and save file metadata in MongoDB

    // Return success response
    // return res.json({
    //   message: "Repository and files created successfully!",
    //   files,
    // });
  } catch (error) {
    console.error("Error:", error);
   
  }

}