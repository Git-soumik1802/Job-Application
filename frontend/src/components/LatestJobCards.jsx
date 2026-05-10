import React from 'react'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'

import {
    MapPin,
    BriefcaseBusiness,
    IndianRupee,
    Clock3,
    Sparkles,
    ArrowRight,
    Building2,
    Star
} from 'lucide-react'

const LatestJobCards = ({ job }) => {

    const navigate = useNavigate();

    const daysAgoFunction = (mongodbTime) => {

        const createdAt = new Date(mongodbTime);

        const currentTime = new Date();

        const timeDifference = currentTime - createdAt;

        return Math.floor(timeDifference / (1000 * 24 * 60 * 60));
    }

    return (

        <div
            onClick={() => navigate(`/description/${job?._id}`)}
            className='
                group
                relative
                overflow-hidden
                rounded-[32px]
                bg-white/80
                backdrop-blur-xl
                border
                border-white/20
                p-7
                cursor-pointer
                shadow-lg
                hover:shadow-[0_20px_60px_rgba(106,56,194,0.25)]
                hover:-translate-y-3
                transition-all
                duration-500
            '
        >

            {/* BACKGROUND EFFECTS */}

            <div className='absolute inset-0 bg-gradient-to-br from-[#6A38C2]/5 via-transparent to-pink-300/10 opacity-0 group-hover:opacity-100 transition-all duration-500'></div>

            <div className='absolute -top-16 -right-16 h-44 w-44 bg-gradient-to-br from-[#6A38C2]/20 to-pink-400/10 rounded-full blur-3xl group-hover:scale-125 transition-all duration-700'></div>

            <div className='absolute bottom-0 left-0 h-32 w-32 bg-purple-300/10 rounded-full blur-2xl'></div>

            {/* TOP HEADER */}

            <div className='relative z-10 flex items-start justify-between'>

                <div className='flex items-center gap-4'>

                    {/* COMPANY LOGO */}

                    <div className='relative'>

                        <div className='
                            h-16
                            w-16
                            rounded-2xl
                            bg-gradient-to-br
                            from-[#6A38C2]
                            via-purple-500
                            to-pink-500
                            flex
                            items-center
                            justify-center
                            text-white
                            text-2xl
                            font-bold
                            shadow-xl
                            group-hover:rotate-6
                            transition-all
                            duration-500
                        '>

                            {
                                job?.company?.logo ? (
                                    <img
                                        src={job?.company?.logo}
                                        alt="logo"
                                        className='h-full w-full object-cover rounded-2xl'
                                    />
                                ) : (
                                    job?.company?.name?.charAt(0)
                                )
                            }

                        </div>

                        <div className='absolute -bottom-1 -right-1 bg-green-500 h-5 w-5 rounded-full border-2 border-white'></div>

                    </div>

                    {/* COMPANY INFO */}

                    <div>

                        <div className='flex items-center gap-2'>

                            <h1 className='
                                text-2xl
                                font-extrabold
                                text-gray-900
                                group-hover:text-[#6A38C2]
                                transition-all
                            '>
                                {job?.company?.name}
                            </h1>

                            <Star className='h-4 w-4 fill-yellow-400 text-yellow-400' />

                        </div>

                        <div className='flex items-center gap-2 mt-2 text-gray-500 text-sm'>

                            <MapPin className='h-4 w-4 text-[#6A38C2]' />

                            <span>{job?.location || "India"}</span>

                            <span>•</span>

                            <Building2 className='h-4 w-4 text-[#6A38C2]' />

                            <span>Verified Company</span>

                        </div>

                    </div>

                </div>

                {/* HIRING TAG */}

                <div className='
                    flex
                    items-center
                    gap-2
                    bg-gradient-to-r
                    from-[#6A38C2]
                    to-purple-500
                    text-white
                    px-4
                    py-2
                    rounded-full
                    text-xs
                    font-bold
                    shadow-lg
                '>

                    <Sparkles className='h-3 w-3' />

                    Hiring Now

                </div>

            </div>

            {/* JOB INFO */}

            <div className='relative z-10 mt-8'>

                <h1 className='
                    text-3xl
                    font-black
                    text-gray-900
                    leading-tight
                    line-clamp-2
                    group-hover:text-[#6A38C2]
                    transition-all
                    duration-300
                '>

                    {job?.title}

                </h1>

                <p className='
                    mt-4
                    text-gray-600
                    text-[15px]
                    leading-7
                    line-clamp-3
                '>

                    {job?.description}

                </p>

            </div>

            {/* BADGES */}

            <div className='relative z-10 flex flex-wrap gap-3 mt-7'>

                <Badge className='
                    bg-blue-100
                    text-blue-700
                    hover:bg-blue-100
                    px-4
                    py-2
                    rounded-full
                    text-sm
                    font-bold
                    shadow-sm
                    flex
                    items-center
                    gap-1
                '>

                    <BriefcaseBusiness className='h-4 w-4' />

                    {job?.position} Positions

                </Badge>

                <Badge className='
                    bg-orange-100
                    text-orange-600
                    hover:bg-orange-100
                    px-4
                    py-2
                    rounded-full
                    text-sm
                    font-bold
                    shadow-sm
                '>

                    {job?.jobType}

                </Badge>

                <Badge className='
                    bg-purple-100
                    text-[#6A38C2]
                    hover:bg-purple-100
                    px-4
                    py-2
                    rounded-full
                    text-sm
                    font-bold
                    shadow-sm
                    flex
                    items-center
                    gap-1
                '>

                    <IndianRupee className='h-4 w-4' />

                    {job?.salary} LPA

                </Badge>

            </div>

            {/* FOOTER */}

            <div className='
                relative
                z-10
                flex
                items-center
                justify-between
                mt-8
                pt-6
                border-t
                border-gray-100
            '>

                <div className='flex items-center gap-2 text-gray-500 text-sm font-medium'>

                    <Clock3 className='h-4 w-4 text-[#6A38C2]' />

                    {
                        daysAgoFunction(job?.createdAt) === 0
                            ? "Posted Today"
                            : `${daysAgoFunction(job?.createdAt)} days ago`
                    }

                </div>

                <button className='
                    group/button
                    flex
                    items-center
                    gap-2
                    bg-gradient-to-r
                    from-[#6A38C2]
                    to-purple-500
                    text-white
                    px-6
                    py-3
                    rounded-2xl
                    font-bold
                    shadow-lg
                    hover:shadow-purple-300
                    hover:scale-105
                    transition-all
                    duration-300
                '>

                    View Details

                    <ArrowRight className='
                        h-4
                        w-4
                        group-hover/button:translate-x-1
                        transition-all
                    ' />

                </button>

            </div>

        </div>
    )
}

export default LatestJobCards