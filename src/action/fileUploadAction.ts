"use server";
import fs from 'fs';
import path from 'path';
import Project from '@/models/Project';

export const fileUpload = async (data: FormData) => {
    try {
        // Get the file from the form data
        const repoName = data.get("name");
        const description = data.get("description");
        const file = data.get("file") as File;
        console.log(repoName,description);
        if (!file) {
            throw new Error("No file uploaded");
        }

        // Get the file content as an ArrayBuffer
        const fileData = await file.arrayBuffer();

        // Safely format the file name using a timestamp without invalid characters
        const timestamp = new Date().toISOString().replace(/:/g, "-"); // Replace colons with dashes
        const filePath = path.join(process.cwd(), "projectFolderData", `${timestamp} ${file.name}`);

        console.log(filePath, "path");

        // Ensure the target directory exists
        const dir = path.dirname(filePath);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true }); // Create directory if it doesn't exist
        }

        // Write the file to disk as a buffer
        await fs.promises.writeFile(filePath, Buffer.from(fileData));


        const project = await Project.create({
            repoName,
            description,
            files: [filePath]  
        })

        if(!project){
            console.log("project upload error")
        }

        console.log(project)
        return {
            message:"successfuly porject strored"
        }
    } catch (error) {
        // Enhanced error logging
        console.error("Error during file upload:", error instanceof Error ? error.message : error);
    }
};
