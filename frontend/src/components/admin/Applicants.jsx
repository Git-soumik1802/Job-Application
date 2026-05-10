import React, { useEffect } from 'react'

import Navbar from '../shared/Navbar'

import ApplicantsTable from './ApplicantsTable'

import axios from 'axios'

import { APPLICATION_API_END_POINT } from '@/utils/constant'

import { useParams } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'

import { setAllApplicants } from '@/redux/applicationSlice'

import {
    Users,
    Sparkles,
    BriefcaseBusiness,
    TrendingUp
} from 'lucide-react'

import { motion } from 'framer-motion'

const Applicants = () => {

    const params = useParams();

    const dispatch = useDispatch();

    const { applicants } = useSelector(store => store.application);

    // ================= FETCH APPLICANTS =================

    useEffect(() => {

        const fetchAllApplicants = async () => {

            try {

                const res = await axios.get(
                    `${APPLICATION_API_END_POINT}/${params.id}/applicants`,
                    {
                        withCredentials: true
                    }
                );

                dispatch(setAllApplicants(res.data.job));

            } catch (error) {

                console.log(error);

            }
        }

        fetchAllApplicants();

    }, []);

    return (

        <div className='
            min-h-screen
            bg-gradient-to-br
            from-[#f8fafc]
            via-[#faf5ff]
            to-[#eef2ff]
        '>

            {/* ================= NAVBAR ================= */}

            <Navbar />

            {/* ================= PAGE ================= */}

            <div className='
                max-w-7xl
                mx-auto
                px-4
                py-8
            '>

                {/* ================= HERO SECTION ================= */}

                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className='
                        relative
                        overflow-hidden
                        rounded-[32px]
                        bg-white
                        border
                        border-gray-200
                        shadow-2xl
                        p-6
                        md:p-8
                    '
                >

                    {/* BACKGROUND EFFECTS */}

                    <div className='
                        absolute
                        top-[-80px]
                        right-[-80px]
                        h-[200px]
                        w-[200px]
                        bg-purple-300/20
                        rounded-full
                        blur-3xl
                    '></div>

                    <div className='
                        absolute
                        bottom-[-70px]
                        left-[-70px]
                        h-[160px]
                        w-[160px]
                        bg-pink-300/20
                        rounded-full
                        blur-3xl
                    '></div>

                    <div className='relative z-10'>

                        {/* BADGE */}

                        <div className='
                            inline-flex
                            items-center
                            gap-2
                            px-4
                            py-2
                            rounded-full
                            bg-purple-100
                            text-[#7209b7]
                            font-semibold
                            text-sm
                            mb-5
                        '>

                            <Sparkles size={14} />

                            Applicant Management

                        </div>

                        {/* HEADER */}

                        <div className='
                            flex
                            flex-col
                            lg:flex-row
                            lg:items-center
                            lg:justify-between
                            gap-6
                        '>

                            <div>

                                <h1 className='
                                    text-3xl
                                    md:text-4xl
                                    font-extrabold
                                    text-gray-900
                                    leading-tight
                                '>

                                    Track &
                                    <span className='
                                        bg-gradient-to-r
                                        from-[#7209b7]
                                        via-[#9333ea]
                                        to-pink-500
                                        bg-clip-text
                                        text-transparent
                                    '>

                                        {" "}Manage Applicants

                                    </span>

                                </h1>

                                <p className='
                                    mt-3
                                    text-gray-600
                                    text-base
                                    max-w-2xl
                                '>

                                    Review candidates, manage applications,
                                    and monitor hiring progress efficiently.

                                </p>

                            </div>

                            {/* ICON */}

                            <div className='
                                hidden
                                lg:flex
                                items-center
                                justify-center
                                h-[100px]
                                w-[100px]
                                rounded-[28px]
                                bg-gradient-to-br
                                from-[#7209b7]
                                to-pink-500
                                shadow-xl
                            '>

                                <Users className='
                                    h-10
                                    w-10
                                    text-white
                                ' />

                            </div>

                        </div>

                        {/* ================= STATS ================= */}

                        <div className='
                            grid
                            grid-cols-1
                            sm:grid-cols-2
                            lg:grid-cols-3
                            gap-5
                            mt-8
                        '>

                            {/* CARD 1 */}

                            <div className='
                                bg-[#faf5ff]
                                border
                                border-purple-100
                                rounded-2xl
                                p-5
                            '>

                                <div className='
                                    h-12
                                    w-12
                                    rounded-xl
                                    bg-white
                                    flex
                                    items-center
                                    justify-center
                                    shadow-md
                                    text-[#7209b7]
                                '>

                                    <Users size={24} />

                                </div>

                                <h1 className='
                                    text-3xl
                                    font-extrabold
                                    text-gray-900
                                    mt-4
                                '>

                                    {applicants?.applications?.length || 0}

                                </h1>

                                <p className='
                                    text-gray-600
                                    mt-1
                                    text-sm
                                '>

                                    Total Applicants

                                </p>

                            </div>

                            {/* CARD 2 */}

                            <div className='
                                bg-[#fdf2f8]
                                border
                                border-pink-100
                                rounded-2xl
                                p-5
                            '>

                                <div className='
                                    h-12
                                    w-12
                                    rounded-xl
                                    bg-white
                                    flex
                                    items-center
                                    justify-center
                                    shadow-md
                                    text-pink-500
                                '>

                                    <BriefcaseBusiness size={24} />

                                </div>

                                <h1 className='
                                    text-2xl
                                    font-bold
                                    text-gray-900
                                    mt-4
                                '>

                                    Active Hiring

                                </h1>

                                <p className='
                                    text-gray-600
                                    mt-1
                                    text-sm
                                '>

                                    Review and shortlist top talent.

                                </p>

                            </div>

                            {/* CARD 3 */}

                            <div className='
                                bg-[#eef2ff]
                                border
                                border-indigo-100
                                rounded-2xl
                                p-5
                            '>

                                <div className='
                                    h-12
                                    w-12
                                    rounded-xl
                                    bg-white
                                    flex
                                    items-center
                                    justify-center
                                    shadow-md
                                    text-indigo-500
                                '>

                                    <TrendingUp size={24} />

                                </div>

                                <h1 className='
                                    text-2xl
                                    font-bold
                                    text-gray-900
                                    mt-4
                                '>

                                    Faster Hiring

                                </h1>

                                <p className='
                                    text-gray-600
                                    mt-1
                                    text-sm
                                '>

                                    Manage candidates with a smarter workflow.

                                </p>

                            </div>

                        </div>

                    </div>

                </motion.div>

                {/* ================= TABLE SECTION ================= */}

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className='mt-8'
                >

                    <div className='
                        bg-white
                        rounded-[30px]
                        border
                        border-gray-200
                        shadow-xl
                        p-5
                        overflow-x-auto
                    '>

                        <ApplicantsTable />

                    </div>

                </motion.div>

            </div>

        </div>
    )
}

export default Applicants