"use client";
import React, { useState, useEffect } from 'react';
import { FaFolder } from "react-icons/fa6";
import ReactMarkdown from 'react-markdown';
// FileCard Component
import { auth  } from '@/auth';
import { redirect } from 'next/navigation';
import RepositoryMenu from '@/components/projects/ProfileId';
const ProfileIdPage =async ({ file }: any) => {
    const session=await auth();
    if (!session) {
      redirect("/login");
      return null;
    }
    return (
       <>
       <RepositoryMenu/>
       </>
    );
};

export default ProfileIdPage;
