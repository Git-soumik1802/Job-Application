import React, { useEffect } from 'react'
import Navbar from './shared/Navbar'
import Job from './Job'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchedQuery } from '@/redux/jobSlice'
import useGetAllJobs from '@/hooks/useGetAllJobs'
import { motion } from 'framer-motion'
import { BriefcaseBusiness } from 'lucide-react'

const Browse = () => {

    useGetAllJobs();

    const { allJobs } = useSelector(store => store.job);

    const dispatch = useDispatch();

    // ================= CLEAR SEARCH =================
    useEffect(() => {

        return () => {
            dispatch(setSearchedQuery(""));
        }

    }, []);

    return (

        <div className='min-h-screen bg-gradient-to-b from-[#f9f5ff] via-white to-[#f4f4f4]'>

            <Navbar />

            {/* ================= HERO SECTION ================= */}

            <div className='max-w-7xl mx-auto px-4 py-10'>

                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className='bg-gradient-to-r from-[#7209b7] to-[#9d4edd] rounded-3xl p-8 shadow-2xl text-white mb-10 relative overflow-hidden'
                >

                    <div className='absolute right-[-30px] top-[-30px] w-40 h-40 bg-white/10 rounded-full'></div>

                    <div className='absolute bottom-[-40px] left-[-20px] w-52 h-52 bg-white/10 rounded-full'></div>

                    <div className='relative z-10'>

                        <div className='flex items-center gap-3 mb-4'>

                            <div className='bg-white/20 p-3 rounded-2xl'>
                                <BriefcaseBusiness size={30} />
                            </div>

                            <h1 className='text-4xl font-extrabold'>
                                Discover Your Dream Job
                            </h1>

                        </div>

                        <p className='text-lg text-gray-100 max-w-2xl leading-relaxed'>
                            Explore thousands of jobs from top companies and apply instantly.
                            Find the perfect role that matches your skills and career goals.
                        </p>

                        <div className='mt-6 flex flex-wrap gap-4'>

                            <div className='bg-white/20 px-5 py-2 rounded-full backdrop-blur-md'>
                                🚀 Remote Jobs
                            </div>

                            <div className='bg-white/20 px-5 py-2 rounded-full backdrop-blur-md'>
                                💼 Full Time
                            </div>

                            <div className='bg-white/20 px-5 py-2 rounded-full backdrop-blur-md'>
                                🔥 Top Companies
                            </div>

                        </div>

                    </div>

                </motion.div>

                {/* ================= JOB COUNT ================= */}

                <div className='flex items-center justify-between mb-8 flex-wrap gap-4'>

                    <div>

                        <h2 className='text-3xl font-bold text-gray-800'>
                            Search Results
                        </h2>

                        <p className='text-gray-500 mt-1'>
                            Browse all available opportunities
                        </p>

                    </div>

                    <div className='bg-[#7209b7] text-white px-6 py-3 rounded-2xl shadow-lg font-semibold text-lg'>
                        {allJobs.length}+ Jobs Available
                    </div>

                </div>

                {/* ================= JOBS GRID ================= */}

                {
                    allJobs.length <= 0 ? (

                        <div className='flex items-center justify-center h-[60vh]'>

                            <div className='text-center'>

                                <h1 className='text-4xl font-bold text-gray-500'>
                                    No Jobs Found
                                </h1>

                                <p className='text-gray-400 mt-3'>
                                    Try searching for another role
                                </p>

                            </div>

                        </div>

                    ) : (

                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7'>

                            {
                                allJobs.map((job, index) => (

                                    <motion.div
                                        key={job?._id}
                                        initial={{
                                            opacity: 0,
                                            y: 40
                                        }}
                                        animate={{
                                            opacity: 1,
                                            y: 0
                                        }}
                                        transition={{
                                            duration: 0.4,
                                            delay: index * 0.05
                                        }}
                                    >

                                        <div className='hover:scale-[1.02] transition-all duration-300'>

                                            <Job job={job} />

                                        </div>

                                    </motion.div>

                                ))
                            }

                        </div>

                    )
                }

            </div>

        </div>
    )
}

export default Browse