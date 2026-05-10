import React from 'react'
import LatestJobCards from './LatestJobCards'
import { useSelector } from 'react-redux'

import {
    Sparkles,
    BriefcaseBusiness,
    TrendingUp,
    ArrowRight
} from 'lucide-react'

const LatestJobs = () => {

    const { allJobs } = useSelector(store => store.job);

    return (

        <div className='relative py-24 bg-[#f8f7ff] overflow-hidden'>

            {/* BACKGROUND EFFECTS */}

            <div className='absolute top-0 left-0 h-96 w-96 bg-purple-300/20 rounded-full blur-3xl'></div>

            <div className='absolute bottom-0 right-0 h-96 w-96 bg-pink-300/20 rounded-full blur-3xl'></div>

            <div className='max-w-7xl mx-auto px-4 relative z-10'>

                {/* TOP HEADER */}

                <div className='flex flex-col lg:flex-row items-center justify-between gap-10 mb-16'>

                    {/* LEFT */}

                    <div>

                        <div className='inline-flex items-center gap-2 bg-purple-100 text-[#6A38C2] px-5 py-2 rounded-full font-semibold mb-5 shadow-sm'>

                            <Sparkles className='h-5 w-5' />

                            Trending Opportunities

                        </div>

                        <h1 className='
                            text-5xl
                            md:text-6xl
                            font-black
                            leading-tight
                            text-gray-900
                        '>

                            Discover
                            <span className='bg-gradient-to-r from-[#6A38C2] to-pink-500 bg-clip-text text-transparent'>
                                {" "}Latest & Top{" "}
                            </span>

                            Job Openings

                        </h1>

                        <p className='text-gray-600 text-lg mt-6 max-w-2xl leading-8'>

                            Explore premium opportunities from top companies,
                            startups, and remote-friendly workplaces tailored
                            for your dream career.

                        </p>

                    </div>

                    {/* RIGHT STATS */}

                    <div className='flex flex-wrap gap-5'>

                        <div className='
                            bg-white
                            rounded-3xl
                            px-8
                            py-6
                            shadow-xl
                            border
                            border-gray-100
                            min-w-[180px]
                            hover:-translate-y-2
                            transition-all
                            duration-300
                        '>

                            <div className='flex items-center gap-3 mb-3'>

                                <div className='
                                    h-12
                                    w-12
                                    rounded-2xl
                                    bg-gradient-to-r
                                    from-[#6A38C2]
                                    to-purple-500
                                    flex
                                    items-center
                                    justify-center
                                    text-white
                                '>

                                    <BriefcaseBusiness className='h-6 w-6' />

                                </div>

                                <TrendingUp className='text-green-500 h-6 w-6' />

                            </div>

                            <h1 className='text-4xl font-black text-gray-900'>
                                {allJobs?.length}+
                            </h1>

                            <p className='text-gray-500 mt-1'>
                                Live Jobs
                            </p>

                        </div>

                        <div className='
                            bg-gradient-to-r
                            from-[#6A38C2]
                            to-purple-500
                            rounded-3xl
                            px-8
                            py-6
                            shadow-2xl
                            text-white
                            min-w-[220px]
                            hover:-translate-y-2
                            transition-all
                            duration-300
                        '>

                            <Sparkles className='h-8 w-8 mb-4 text-yellow-300' />

                            <h1 className='text-3xl font-black'>
                                Premium Jobs
                            </h1>

                            <p className='mt-2 text-white/80'>
                                Hand-picked opportunities
                            </p>

                        </div>

                    </div>

                </div>

                {/* JOB GRID */}

                {
                    allJobs.length <= 0 ? (

                        <div className='
                            h-[350px]
                            bg-white
                            rounded-[40px]
                            shadow-xl
                            flex
                            flex-col
                            items-center
                            justify-center
                            border
                            border-gray-100
                        '>

                            <div className='
                                h-24
                                w-24
                                rounded-full
                                bg-purple-100
                                flex
                                items-center
                                justify-center
                                mb-6
                            '>

                                <BriefcaseBusiness className='h-12 w-12 text-[#6A38C2]' />

                            </div>

                            <h1 className='text-4xl font-black text-gray-900'>
                                No Jobs Available
                            </h1>

                            <p className='text-gray-500 mt-4 text-lg'>
                                Please check again later
                            </p>

                        </div>

                    ) : (

                        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>

                            {
                                allJobs
                                    ?.slice(0, 6)
                                    .map((job) => (

                                        <LatestJobCards
                                            key={job?._id}
                                            job={job}
                                        />

                                    ))
                            }

                        </div>

                    )
                }

                {/* VIEW ALL BUTTON */}

                <div className='flex items-center justify-center mt-16'>

                    <button className='
                        group
                        flex
                        items-center
                        gap-3
                        bg-gradient-to-r
                        from-[#6A38C2]
                        to-purple-500
                        text-white
                        px-10
                        py-5
                        rounded-2xl
                        font-bold
                        text-lg
                        shadow-2xl
                        hover:scale-105
                        transition-all
                        duration-300
                    '>

                        Explore All Jobs

                        <ArrowRight className='
                            h-5
                            w-5
                            group-hover:translate-x-1
                            transition-all
                        ' />

                    </button>

                </div>

            </div>

        </div>
    )
}

export default LatestJobs