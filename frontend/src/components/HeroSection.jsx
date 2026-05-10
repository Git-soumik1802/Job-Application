import React, { useState } from 'react'

import { Button } from './ui/button'

import {
    Search
} from 'lucide-react'

import { useDispatch } from 'react-redux'

import { useNavigate } from 'react-router-dom'

import { setSearchedQuery } from '@/redux/jobSlice'

import { motion } from 'framer-motion'

const HeroSection = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [query, setQuery] = useState("");

    // ================= SEARCH HANDLER =================

    const searchJobHandler = () => {

        dispatch(setSearchedQuery(query));

        navigate("/browse");
    }

    return (

        <div className='
            relative
            overflow-hidden
            bg-gradient-to-br
            from-[#f8fafc]
            via-[#faf5ff]
            to-[#eef2ff]
        '>

            {/* ================= BACKGROUND EFFECTS ================= */}

            <div className='
                absolute
                top-[-120px]
                right-[-120px]
                h-[320px]
                w-[320px]
                bg-purple-300/20
                rounded-full
                blur-3xl
            '></div>

            <div className='
                absolute
                bottom-[-100px]
                left-[-100px]
                h-[250px]
                w-[250px]
                bg-pink-300/20
                rounded-full
                blur-3xl
            '></div>

            {/* ================= MAIN CONTENT ================= */}

            <div className='
                relative
                z-10
                max-w-7xl
                mx-auto
                px-4
                py-24
                text-center
            '>

                {/* ================= BADGE ================= */}

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className='
                        inline-flex
                        items-center
                        gap-2
                        px-5
                        py-2
                        rounded-full
                        bg-white
                        shadow-md
                        border
                        border-purple-100
                        text-[#7209b7]
                        font-semibold
                        text-sm
                    '
                >

                    ✨ No.1 Smart Hiring Platform

                </motion.div>

                {/* ================= HEADING ================= */}

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className='
                        mt-8
                        text-5xl
                        md:text-7xl
                        font-extrabold
                        text-gray-900
                        leading-tight
                    '
                >

                    Find Your

                    <span className='
                        bg-gradient-to-r
                        from-[#7209b7]
                        via-[#9333ea]
                        to-pink-500
                        bg-clip-text
                        text-transparent
                    '>

                        {" "}Dream Job

                    </span>

                    <br />

                    With Confidence

                </motion.h1>

                {/* ================= DESCRIPTION ================= */}

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className='
                        mt-6
                        text-lg
                        md:text-xl
                        text-gray-600
                        max-w-3xl
                        mx-auto
                        leading-relaxed
                    '
                >

                    Discover opportunities from top companies,
                    explore premium careers,
                    and take the next big step in your future.

                </motion.p>

                {/* ================= SEARCH BOX ================= */}

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className='
                        mt-12
                        max-w-4xl
                        mx-auto
                        bg-white/90
                        backdrop-blur-xl
                        border
                        border-gray-200
                        rounded-[28px]
                        shadow-2xl
                        p-4
                    '
                >

                    <div className='
                        flex
                        flex-col
                        md:flex-row
                        items-center
                        gap-4
                    '>

                        {/* ================= INPUT ================= */}

                        <div className='
                            flex
                            items-center
                            gap-3
                            flex-1
                            w-full
                            bg-gray-50
                            border
                            border-gray-200
                            rounded-2xl
                            px-5
                            h-14
                        '>

                            <Search className='
                                h-5
                                w-5
                                text-gray-400
                            ' />

                            <input
                                type="text"
                                value={query}
                                onChange={(e) =>
                                    setQuery(e.target.value)
                                }
                                placeholder='Search jobs, companies, skills, locations...'
                                className='
                                    w-full
                                    bg-transparent
                                    outline-none
                                    text-gray-700
                                    placeholder:text-gray-400
                                '
                            />

                        </div>

                        {/* ================= BUTTON ================= */}

                        <Button
                            onClick={searchJobHandler}
                            className='
                                w-full
                                md:w-auto
                                h-14
                                px-8
                                rounded-2xl
                                bg-gradient-to-r
                                from-[#7209b7]
                                via-[#9333ea]
                                to-pink-500
                                hover:opacity-90
                                shadow-lg
                                text-base
                                font-semibold
                            '
                        >

                            <Search className='
                                mr-2
                                h-5
                                w-5
                            ' />

                            Search Jobs

                        </Button>

                    </div>

                </motion.div>

                {/* ================= STATS ================= */}

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className='
                        grid
                        grid-cols-1
                        sm:grid-cols-3
                        gap-6
                        mt-16
                    '
                >

                    {/* CARD 1 */}

                    <div className='
                        bg-white/80
                        backdrop-blur-xl
                        border
                        border-gray-100
                        rounded-3xl
                        p-6
                        shadow-lg
                    '>

                        <h1 className='
                            text-4xl
                            font-extrabold
                            text-[#7209b7]
                        '>

                            50K+

                        </h1>

                        <p className='
                            mt-2
                            text-gray-600
                            font-medium
                        '>

                            Active Jobs

                        </p>

                    </div>

                    {/* CARD 2 */}

                    <div className='
                        bg-white/80
                        backdrop-blur-xl
                        border
                        border-gray-100
                        rounded-3xl
                        p-6
                        shadow-lg
                    '>

                        <h1 className='
                            text-4xl
                            font-extrabold
                            text-pink-500
                        '>

                            10K+

                        </h1>

                        <p className='
                            mt-2
                            text-gray-600
                            font-medium
                        '>

                            Companies

                        </p>

                    </div>

                    {/* CARD 3 */}

                    <div className='
                        bg-white/80
                        backdrop-blur-xl
                        border
                        border-gray-100
                        rounded-3xl
                        p-6
                        shadow-lg
                    '>

                        <h1 className='
                            text-4xl
                            font-extrabold
                            text-indigo-500
                        '>

                            95%

                        </h1>

                        <p className='
                            mt-2
                            text-gray-600
                            font-medium
                        '>

                            Success Rate

                        </p>

                    </div>

                </motion.div>

            </div>

        </div>
    )
}

export default HeroSection