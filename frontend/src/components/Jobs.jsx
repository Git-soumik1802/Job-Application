import React, { useEffect, useState } from 'react'

import Navbar from './shared/Navbar'
import FilterCard from './FilterCard'
import Job from './Job'

import { useSelector } from 'react-redux'

import { motion } from 'framer-motion'

import {
    BriefcaseBusiness,
    SearchX,
    Sparkles
} from 'lucide-react'

const Jobs = () => {

    const { allJobs = [], searchedQuery } = useSelector(
        store => store.job
    );

    const [filterJobs, setFilterJobs] = useState([]);

    // FILTER JOBS
    useEffect(() => {

        if (!searchedQuery || searchedQuery.trim() === "") {

            setFilterJobs(allJobs);
            return;
        }

        const query = searchedQuery.toLowerCase();

        const filteredJobs = allJobs.filter((job) => {

            return (

                job?.title?.toLowerCase()?.includes(query) ||

                job?.description?.toLowerCase()?.includes(query) ||

                job?.location?.toLowerCase()?.includes(query) ||

                job?.company?.name?.toLowerCase()?.includes(query) ||

                job?.jobType?.toLowerCase()?.includes(query)

            );
        });

        setFilterJobs(filteredJobs);

    }, [allJobs, searchedQuery]);

    return (

        <div className='min-h-screen bg-[#f5f7fb]'>

            <Navbar />

            {/* HERO SECTION */}

            <div className='max-w-7xl mx-auto px-4 pt-8'>

                <div className='
                    relative
                    overflow-hidden
                    rounded-[32px]
                    bg-gradient-to-r
                    from-[#6A38C2]
                    via-purple-600
                    to-pink-500
                    px-6
                    md:px-10
                    py-10
                    shadow-[0_15px_60px_rgba(106,56,194,0.25)]
                '>

                    {/* BACKGROUND BLUR */}

                    <div className='absolute top-0 left-0 h-60 w-60 bg-white/10 rounded-full blur-3xl'></div>

                    <div className='absolute bottom-0 right-0 h-52 w-52 bg-pink-300/10 rounded-full blur-3xl'></div>

                    <div className='relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8'>

                        {/* LEFT */}

                        <div className='flex-1'>

                            <div className='flex items-center gap-4'>

                                <div className='
                                    h-16
                                    w-16
                                    rounded-2xl
                                    bg-white/20
                                    backdrop-blur-xl
                                    flex
                                    items-center
                                    justify-center
                                '>

                                    <BriefcaseBusiness className='h-8 w-8 text-white' />

                                </div>

                                <div>

                                    <h1 className='text-3xl md:text-5xl font-black text-white'>
                                        Explore Jobs
                                    </h1>

                                    <p className='text-white/80 mt-2 text-sm md:text-lg'>
                                        Find your perfect opportunity today
                                    </p>

                                </div>

                            </div>

                            {/* STATS */}

                            <div className='flex flex-wrap gap-4 mt-8'>

                                <div className='
                                    bg-white/15
                                    backdrop-blur-xl
                                    rounded-2xl
                                    px-5
                                    py-4
                                    min-w-[150px]
                                '>

                                    <h1 className='text-3xl font-bold text-white'>
                                        {allJobs.length}+
                                    </h1>

                                    <p className='text-white/80 text-sm mt-1'>
                                        Available Jobs
                                    </p>

                                </div>

                                <div className='
                                    bg-white/15
                                    backdrop-blur-xl
                                    rounded-2xl
                                    px-5
                                    py-4
                                    min-w-[150px]
                                '>

                                    <h1 className='text-3xl font-bold text-white'>
                                        50+
                                    </h1>

                                    <p className='text-white/80 text-sm mt-1'>
                                        Top Companies
                                    </p>

                                </div>

                                <div className='
                                    bg-white/15
                                    backdrop-blur-xl
                                    rounded-2xl
                                    px-5
                                    py-4
                                    min-w-[150px]
                                '>

                                    <h1 className='text-3xl font-bold text-white'>
                                        Remote
                                    </h1>

                                    <p className='text-white/80 text-sm mt-1'>
                                        Flexible Jobs
                                    </p>

                                </div>

                            </div>

                        </div>

                        {/* RIGHT ICON */}

                        <div className='hidden lg:flex items-center justify-center'>

                            <div className='
                                h-32
                                w-32
                                rounded-full
                                bg-white/10
                                flex
                                items-center
                                justify-center
                                backdrop-blur-xl
                            '>

                                <Sparkles className='h-16 w-16 text-white/70' />

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            {/* MAIN CONTENT */}

            <div className='max-w-7xl mx-auto px-4 py-10'>

                <div className='flex flex-col lg:flex-row gap-6'>

                    {/* FILTER */}

                    <div className='w-full lg:w-[280px] flex-shrink-0'>

                        <div className='sticky top-24'>

                            <FilterCard />

                        </div>

                    </div>

                    {/* JOBS */}

                    <div className='flex-1'>

                        {/* HEADER */}

                        <div className='
                            flex
                            flex-col
                            md:flex-row
                            md:items-center
                            justify-between
                            gap-4
                            mb-8
                        '>

                            <div>

                                <h1 className='text-3xl md:text-4xl font-black text-gray-900'>
                                    Available Jobs
                                </h1>

                                <p className='text-gray-500 mt-2'>
                                    Showing jobs based on your preferences
                                </p>

                            </div>

                            <div className='
                                bg-gradient-to-r
                                from-[#6A38C2]
                                to-purple-500
                                text-white
                                px-5
                                py-3
                                rounded-2xl
                                shadow-lg
                                font-bold
                            '>

                                {filterJobs.length} Jobs Found

                            </div>

                        </div>

                        {/* EMPTY STATE */}

                        {
                            filterJobs.length <= 0 ? (

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className='
                                        bg-white
                                        rounded-[28px]
                                        border
                                        border-gray-100
                                        shadow-lg
                                        py-20
                                        px-6
                                        flex
                                        flex-col
                                        items-center
                                        justify-center
                                        text-center
                                    '
                                >

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

                                        <SearchX className='h-12 w-12 text-[#6A38C2]' />

                                    </div>

                                    <h1 className='text-3xl font-bold text-gray-800'>
                                        No Jobs Found
                                    </h1>

                                    <p className='text-gray-500 mt-3 max-w-md'>
                                        Try changing filters or search using another keyword.
                                    </p>

                                </motion.div>

                            ) : (

                                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>

                                    {
                                        filterJobs.map((job, index) => (

                                            <motion.div
                                                key={job?._id}
                                                initial={{
                                                    opacity: 0,
                                                    y: 20
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    y: 0
                                                }}
                                                transition={{
                                                    duration: 0.3,
                                                    delay: index * 0.04
                                                }}
                                            >

                                                <Job job={job} />

                                            </motion.div>

                                        ))
                                    }

                                </div>

                            )
                        }

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Jobs