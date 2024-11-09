"use client";
import React, { useState, useEffect } from 'react';
import { FaFolder } from "react-icons/fa6";
import ReactMarkdown from 'react-markdown';
// FileCard Component
const FileCard = ({ file }: any) => {
    return (
        <div className="cursor-pointer shadow p-2">
            <p className=" text-gray-500 flex gap-3  items-center text-xl hover:text-black"> < FaFolder className='text-blue-700 ' />{file.name}</p>
        </div>
    );
};

// RepositoryMenu Component
const RepositoryMenu = () => {
    // Dummy JSON data for files
    const [files, setFiles] = useState([]);
    const [readmeContent, setReadmeContent] = useState<string>("");

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
        const dummyReadme = `# Leave Management System

        ## Description
        This is a Leave Management System. It allows employees to manage their leaves efficiently.
        
        ## Installation
        1. Clone the repository.
        2. Run \`npm install\` to install dependencies.
        3. Run \`npm start\` to start the application.
        
        ## Files
        - \`index.js\`: JavaScript file.
        - \`App.css\`: CSS file.
        - \`README.md\`: Markdown file.
        - \`package.json\`: JSON file.
        - \`server.js\`: JavaScript file.
        
        ## License
        This project is licensed under the MIT License.
        
        ### More Info
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales vehicula tortor sit amet cursus.`;

        setReadmeContent(dummyReadme); // Setting dummy README content


    }, []);

    return (
        <div className="flex flex-1 gap-4 flex-col p-10">

            <div className='flex w-full gap-4'>
                <div className='w-full'>
                    <div className='flex flex-col gap-1 w-full'>
                        <h1 className="text-3xl font-semibold mt-6">Leave management system</h1>
                        <p className='text-gray-500 w-[80%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem aliquid autem ad in eos cupiditate magni ex tempora dignissimos ut obcaecati sunt reprehenderit veniam aut consequuntur recusandae dolorum nihil iusto illo minima eaque nam, quae, ducimus quisquam. Modi, nulla facilis?</p>
                        <p className='text-gray-600 font-semibold text-sm'>Last update - 25 june 2050</p>
                        <div className='w-full mt-5 flex '>
                            <div className="mt-4 flex flex-col gap-3 w-[50%]">
                                {files.length > 0 ? (
                                    files.map((file,index) => (
                                        <FileCard key={index} file={file} />
                                    ))
                                ) : (
                                    <p>No files available</p>
                                )}
                            </div>

                            <div className='bg-red-400 max-w-[50%]'>
                  gdg
                  </div>

                        </div>

                    </div>
                </div>

               

            </div>


            <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">README.md Content</h2>
                <div className="prose">
                    <ReactMarkdown>{readmeContent}</ReactMarkdown>
                </div>
            </div>

        </div>
    );
};

export default RepositoryMenu;
