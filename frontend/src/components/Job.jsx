import React, { useState } from 'react'

import {
    Bookmark,
    MapPin,
    Clock3,
    IndianRupee,
    BriefcaseBusiness
} from 'lucide-react'

import { Avatar, AvatarImage } from './ui/avatar'

import { Badge } from './ui/badge'

import { Button } from './ui/button'

import { useNavigate } from 'react-router-dom'

import { motion } from 'framer-motion'

const Job = ({ job }) => {

    const navigate = useNavigate();

    const [saved, setSaved] = useState(false);

    // ================= SAVE JOB =================

    const saveJobHandler = () => {

        setSaved(!saved);

        if (!saved) {

            alert("Job saved successfully");

        } else {

            alert("Removed from saved jobs");
        }
    };

    // ================= DAYS AGO =================

    const daysAgoFunction = (mongodbTime) => {

        const createdAt = new Date(mongodbTime);

        const currentTime = new Date();

        const timeDifference = currentTime - createdAt;

        return Math.floor(timeDifference / (1000 * 24 * 60 * 60));
    }

    return (

        <motion.div
            whileHover={{
                y: -8
            }}
            transition={{
                duration: 0.3
            }}
            className='
                bg-white
                rounded-3xl
                shadow-lg
                hover:shadow-2xl
                border
                border-gray-100
                overflow-hidden
                transition-all
                duration-300
                relative
            '
        >

            {/* ================= TOP GRADIENT ================= */}

            <div className='
                h-2
                bg-gradient-to-r
                from-[#7209b7]
                via-[#9d4edd]
                to-[#c77dff]
            '></div>

            <div className='p-6'>

                {/* ================= TOP BAR ================= */}

                <div className='flex items-center justify-between mb-5'>

                    <div className='flex items-center gap-2 text-sm text-gray-500'>

                        <Clock3 size={16} />

                        {
                            daysAgoFunction(job?.createdAt) === 0

                                ? "Posted Today"

                                : `${daysAgoFunction(job?.createdAt)} days ago`
                        }

                    </div>

                    <Button
                        onClick={saveJobHandler}
                        variant="outline"
                        size="icon"
                        className='
                            rounded-full
                            border-gray-200
                            hover:bg-[#f3e8ff]
                            hover:border-[#7209b7]
                        '
                    >

                        <Bookmark
                            className={`

                                transition-all

                                ${saved
                                    ? "fill-[#7209b7] text-[#7209b7]"
                                    : "text-gray-500"
                                }
                            `}
                        />

                    </Button>

                </div>

                {/* ================= COMPANY ================= */}

                <div className='flex items-center gap-4 mb-6'>

                    <div className='
                        h-16
                        w-16
                        rounded-2xl
                        border
                        border-gray-200
                        flex
                        items-center
                        justify-center
                        bg-[#faf7ff]
                        shadow-sm
                    '>

                        <Avatar className="h-12 w-12">

                            <AvatarImage
                                src={
                                    job?.company?.logo ||
                                    "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                                }
                            />

                        </Avatar>

                    </div>

                    <div>

                        <h1 className='
                            text-xl
                            font-bold
                            text-gray-800
                        '>

                            {job?.company?.name}

                        </h1>

                        <div className='
                            flex
                            items-center
                            gap-1
                            text-sm
                            text-gray-500
                            mt-1
                        '>

                            <MapPin size={14} />

                            {job?.location}

                        </div>

                    </div>

                </div>

                {/* ================= JOB INFO ================= */}

                <div>

                    <h1 className='
                        text-2xl
                        font-bold
                        text-gray-800
                        mb-3
                        line-clamp-1
                    '>

                        {job?.title}

                    </h1>

                    <p className='
                        text-gray-600
                        text-sm
                        leading-relaxed
                        line-clamp-3
                    '>

                        {job?.description}

                    </p>

                </div>

                {/* ================= BADGES ================= */}

                <div className='
                    flex
                    flex-wrap
                    gap-3
                    mt-6
                '>

                    <Badge
                        className='
                            bg-blue-100
                            text-blue-700
                            hover:bg-blue-100
                            px-4
                            py-1
                            rounded-full
                            font-semibold
                        '
                    >

                        <BriefcaseBusiness size={14} className='mr-1' />

                        {job?.position} Positions

                    </Badge>

                    <Badge
                        className='
                            bg-red-100
                            text-red-600
                            hover:bg-red-100
                            px-4
                            py-1
                            rounded-full
                            font-semibold
                        '
                    >

                        {job?.jobType}

                    </Badge>

                    <Badge
                        className='
                            bg-purple-100
                            text-[#7209b7]
                            hover:bg-purple-100
                            px-4
                            py-1
                            rounded-full
                            font-semibold
                        '
                    >

                        <IndianRupee size={14} className='mr-1' />

                        {job?.salary} LPA

                    </Badge>

                </div>

                {/* ================= BUTTONS ================= */}

                <div className='flex gap-4 mt-8'>

                    <Button
                        onClick={() => navigate(`/description/${job?._id}`)}
                        variant="outline"
                        className='
                            flex-1
                            rounded-xl
                            border-gray-300
                            hover:border-[#7209b7]
                            hover:text-[#7209b7]
                        '
                    >

                        View Details

                    </Button>

                    <Button
                        onClick={saveJobHandler}
                        className={`
                            flex-1
                            rounded-xl
                            font-semibold

                            ${saved

                                ? "bg-green-600 hover:bg-green-700"

                                : "bg-[#7209b7] hover:bg-[#5f32ad]"
                            }
                        `}
                    >

                        {
                            saved
                                ? "Saved"
                                : "Save Job"
                        }

                    </Button>

                </div>

            </div>

        </motion.div>
    )
}

export default Job