"use client";
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { FaFolder } from "react-icons/fa6";
import { usePathname } from 'next/navigation';

const FileCard = ({ file }: any) => {
    return (
        <div className="cursor-pointer shadow p-2">
            <p className=" text-gray-500 flex gap-3 items-center text-xl hover:text-black">
                <FaFolder className='text-blue-700 ' />{file.name}
            </p>
        </div>
    );
};

// RepositoryMenu Component
const RepositoryMenu = () => {
    // Dummy JSON data for files
    const [files, setFiles] = useState([]);
    const [readmeContent, setReadmeContent] = useState<string>("");
    const [readmePrompt, setReadmePrompt] = useState<string>("");  // State to hold the input for README generation
    const pathname = usePathname();

    useEffect(() => {
        // Hardcoding dummy data for files
        const dummyData: any = [
            { id: 1, name: 'index.js', type: 'JavaScript file' },
            { id: 2, name: 'App.css', type: 'CSS file' },
            { id: 3, name: 'README.md', type: 'Markdown file' },
            { id: 4, name: 'package.json', type: 'JSON file' },
            { id: 5, name: 'server.js', type: 'JavaScript file' },
        ];

        // Setting the dummy data to state
        setFiles(dummyData);
    }, []); // No need for dummy README data anymore

    useEffect(() => {
        (async function () {
            let parts = pathname.split('/');
            let id = parts[parts.length - 1];
            try {
                const { data } = await axios.post(`/api/projects/one`, id);
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    // Function to handle generating the README content using AI (dummy request for now)
    const generateReadme = async () => {
        try {
            // Here, you can integrate an AI service (like OpenAI) to generate the README file based on the input.
            // For now, we simulate the AI response:
            const generatedReadme = `# ${readmePrompt}

## Description
This project is a ${readmePrompt} application that demonstrates how to generate a README file using AI.

## Installation
1. Clone the repository.
2. Run \`npm install\` to install dependencies.
3. Run \`npm start\` to start the application.

## License
This project is licensed under the MIT License.
`;

            setReadmeContent(generatedReadme);
        } catch (error) {
            console.error("Error generating README:", error);
        }
    };

    return (
        <div className="flex flex-1 gap-4 flex-col p-10">
            <div className='flex w-full gap-4'>
                <div className='w-full'>
                    <div className='flex flex-col gap-1 w-full'>
                        <h1 className="text-3xl font-semibold mt-6">Leave management system</h1>
                        <p className='text-gray-500 w-[80%]'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem aliquid autem ad in eos cupiditate magni ex tempora dignissimos ut obcaecati sunt reprehenderit veniam aut consequuntur recusandae dolorum nihil iusto illo minima eaque nam, quae, ducimus quisquam. Modi, nulla facilis?
                        </p>
                        <p className='text-gray-600 font-semibold text-sm'>Last update - 25 June 2050</p>

                        <div className='w-full mt-5 flex  flex-col gap-10'>
                            <div className="mt-4 flex flex-col gap-3 w-[50%]">
                                {files.length > 0 ? (
                                    files.map((file, index) => (
                                        <FileCard key={index} file={file} />
                                    ))
                                ) : (
                                    <p>No files available</p>
                                )}
                            </div>

                            <div className='w-[50%]'>
                                <div className="flex flex-col">
                                    <h2 className="text-2xl font-semibold mb-4">Generate README.md Using <span className='text-[#003366]'> AI</span></h2>
                                    <input
                                        type="text"
                                        className="w-full p-3 border border-gray-300 rounded-lg"
                                        placeholder="Enter project name or description..."
                                        value={readmePrompt}
                                        onChange={(e) => setReadmePrompt(e.target.value)}
                                    />
                                    <button
                                        onClick={generateReadme}
                                        className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg"
                                    >
                                        Generate README
                                    </button>

                                    {readmeContent && (
                                        <div className="w-full bg-white p-6 my-10">
                                            <h3 className="text-2xl font-semibold mb-4">Generated README.md  </h3>
                                            <div className="prose">
                                                <pre>{readmeContent}</pre>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RepositoryMenu;
