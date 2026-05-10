import React, { useState } from 'react'

import Navbar from './shared/Navbar'

import { Avatar, AvatarImage } from './ui/avatar'

import { Button } from './ui/button'

import {
    Contact,
    Mail,
    Pen,
    Download,
    BriefcaseBusiness,
    Sparkles
} from 'lucide-react'

import { Badge } from './ui/badge'

import { Label } from './ui/label'

import AppliedJobTable from './AppliedJobTable'

import UpdateProfileDialog from './UpdateProfileDialog'

import { useSelector } from 'react-redux'

import useGetAppliedJobs from '@/hooks/useGetAppliedJobs'

import { motion } from 'framer-motion'

const Profile = () => {

    useGetAppliedJobs();

    const [open, setOpen] = useState(false);

    const { user } = useSelector(store => store.auth);

    const isResume = user?.profile?.resume;

    return (

        <div className='min-h-screen bg-[#f4f5f9]'>

            <Navbar />

            {/* MAIN CONTAINER */}

            <div className='max-w-6xl mx-auto px-4 py-10'>

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 30
                    }}
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        duration: 0.4
                    }}
                    className='rounded-[32px] overflow-hidden shadow-[0_15px_60px_rgba(106,56,194,0.15)] bg-white'
                >

                    {/* TOP SECTION */}

                    <div className='
                        relative
                        bg-gradient-to-r
                        from-[#6A38C2]
                        via-purple-600
                        to-pink-500
                        px-8
                        md:px-12
                        py-10
                    '>

                        <div className='absolute top-0 right-0 h-72 w-72 bg-white/10 rounded-full blur-3xl'></div>

                        <div className='relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8'>

                            {/* LEFT */}

                            <div className='flex flex-col sm:flex-row items-center sm:items-start gap-6'>

                                {/* PROFILE IMAGE */}

                                <div className='relative'>

                                    <Avatar className='h-32 w-32 border-[5px] border-white shadow-2xl'>

                                        <AvatarImage
                                            src={
                                                user?.profile?.profilePhoto ||

                                                "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                                            }
                                        />

                                    </Avatar>

                                    <div className='absolute bottom-2 right-2 h-6 w-6 bg-green-500 border-4 border-white rounded-full'></div>

                                </div>

                                {/* USER INFO */}

                                <div className='text-center sm:text-left'>

                                    <div className='flex items-center justify-center sm:justify-start gap-2'>

                                        <h1 className='text-3xl md:text-4xl font-black text-white'>
                                            {user?.fullname}
                                        </h1>

                                        <Sparkles className='text-yellow-300 h-6 w-6' />

                                    </div>

                                    <p className='text-white/80 mt-3 max-w-xl leading-7 text-sm md:text-base'>

                                        {
                                            user?.profile?.bio ||

                                            "Passionate developer building amazing digital experiences."
                                        }

                                    </p>

                                    {/* BADGES */}

                                    <div className='flex flex-wrap justify-center sm:justify-start gap-3 mt-5'>

                                        <Badge className='bg-white/20 hover:bg-white/20 text-white px-4 py-2 rounded-full'>

                                            <BriefcaseBusiness className='h-4 w-4 mr-2' />

                                            Open To Work

                                        </Badge>

                                        <Badge className='bg-green-500 hover:bg-green-500 text-white px-4 py-2 rounded-full'>

                                            Active Profile

                                        </Badge>

                                    </div>

                                </div>

                            </div>

                            {/* EDIT BUTTON */}

                            <Button
                                onClick={() => setOpen(true)}
                                className='
                                    bg-white
                                    hover:bg-gray-100
                                    text-[#6A38C2]
                                    rounded-2xl
                                    px-6
                                    py-6
                                    font-bold
                                    shadow-xl
                                '
                            >

                                <Pen className='mr-2 h-5 w-5' />

                                Edit Profile

                            </Button>

                        </div>

                    </div>

                    {/* BODY */}

                    <div className='p-6 md:p-10'>

                        {/* CONTACT SECTION */}

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>

                            {/* EMAIL */}

                            <div className='
                                bg-[#faf8ff]
                                border
                                border-purple-100
                                rounded-3xl
                                p-6
                                hover:shadow-lg
                                transition-all
                            '>

                                <div className='flex items-center gap-4'>

                                    <div className='
                                        h-14
                                        w-14
                                        rounded-2xl
                                        bg-gradient-to-r
                                        from-[#6A38C2]
                                        to-purple-500
                                        flex
                                        items-center
                                        justify-center
                                        text-white
                                    '>

                                        <Mail className='h-6 w-6' />

                                    </div>

                                    <div className='overflow-hidden'>

                                        <p className='text-sm text-gray-500'>
                                            Email Address
                                        </p>

                                        <h1 className='font-bold text-gray-800 truncate'>
                                            {user?.email}
                                        </h1>

                                    </div>

                                </div>

                            </div>

                            {/* PHONE */}

                            <div className='
                                bg-[#faf8ff]
                                border
                                border-purple-100
                                rounded-3xl
                                p-6
                                hover:shadow-lg
                                transition-all
                            '>

                                <div className='flex items-center gap-4'>

                                    <div className='
                                        h-14
                                        w-14
                                        rounded-2xl
                                        bg-gradient-to-r
                                        from-pink-500
                                        to-purple-500
                                        flex
                                        items-center
                                        justify-center
                                        text-white
                                    '>

                                        <Contact className='h-6 w-6' />

                                    </div>

                                    <div>

                                        <p className='text-sm text-gray-500'>
                                            Phone Number
                                        </p>

                                        <h1 className='font-bold text-gray-800'>
                                            {user?.phoneNumber}
                                        </h1>

                                    </div>

                                </div>

                            </div>

                        </div>

                        {/* SKILLS */}

                        <div className='mt-10'>

                            <h1 className='text-2xl font-black text-gray-900 mb-5'>
                                Skills & Expertise
                            </h1>

                            <div className='flex flex-wrap gap-3'>

                                {
                                    user?.profile?.skills &&
                                    user.profile.skills.length !== 0 ? (

                                        user.profile.skills.map((item, index) => (

                                            <Badge
                                                key={index}
                                                className='
                                                    px-5
                                                    py-2
                                                    rounded-2xl
                                                    bg-gradient-to-r
                                                    from-[#6A38C2]
                                                    to-purple-500
                                                    text-white
                                                    shadow-md
                                                    hover:scale-105
                                                    transition-all
                                                '
                                            >

                                                {item}

                                            </Badge>

                                        ))

                                    ) : (

                                        <span className='text-gray-500'>
                                            No Skills Added
                                        </span>
                                    )
                                }

                            </div>

                        </div>

                        {/* RESUME */}

                        <div className='mt-10'>

                            <Label className='text-2xl font-black text-gray-900 mb-5 block'>
                                Resume
                            </Label>

                            {
                                isResume ? (

                                    <a
                                        target='_blank'
                                        rel='noreferrer'
                                        href={user?.profile?.resume}
                                        className='
                                            inline-flex
                                            items-center
                                            gap-3
                                            bg-gradient-to-r
                                            from-[#6A38C2]
                                            to-purple-500
                                            text-white
                                            px-6
                                            py-4
                                            rounded-2xl
                                            font-semibold
                                            shadow-lg
                                            hover:scale-105
                                            transition-all
                                        '
                                    >

                                        <Download className='h-5 w-5' />

                                        {user?.profile?.resumeOriginalName}

                                    </a>

                                ) : (

                                    <p className='text-gray-500'>
                                        No Resume Uploaded
                                    </p>
                                )
                            }

                        </div>

                    </div>

                </motion.div>

                {/* APPLIED JOBS */}

                <div className='
                    mt-8
                    bg-white
                    rounded-[32px]
                    shadow-lg
                    border
                    border-gray-100
                    p-6 md:p-8
                '>

                    <h1 className='text-3xl font-black text-gray-900 mb-6'>
                        Applied Jobs
                    </h1>

                    <AppliedJobTable />

                </div>

            </div>

            {/* DIALOG */}

            <UpdateProfileDialog
                open={open}
                setOpen={setOpen}
            />

        </div>
    )
}

export default Profile