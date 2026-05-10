import React, { useEffect, useState } from 'react'

import Navbar from '../shared/Navbar'

import { Input } from '../ui/input'
import { Button } from '../ui/button'

import CompaniesTable from './CompaniesTable'

import { useNavigate } from 'react-router-dom'

import useGetAllCompanies from '@/hooks/useGetAllCompanies'

import { useDispatch } from 'react-redux'

import { setSearchCompanyByText } from '@/redux/companySlice'

import {
    Building2,
    Search,
    PlusCircle,
    Sparkles,
    Rocket
} from 'lucide-react'

import { motion } from 'framer-motion'

const Companies = () => {

    useGetAllCompanies();

    const [input, setInput] = useState("");

    const navigate = useNavigate();

    const dispatch = useDispatch();

    // ================= SEARCH COMPANY =================

    useEffect(() => {

        dispatch(setSearchCompanyByText(input));

    }, [input]);

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
                    initial={{ opacity: 0, y: 20 }}
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
                        top-[-100px]
                        right-[-100px]
                        h-[220px]
                        w-[220px]
                        bg-purple-300/20
                        rounded-full
                        blur-3xl
                    '></div>

                    <div className='
                        absolute
                        bottom-[-80px]
                        left-[-80px]
                        h-[180px]
                        w-[180px]
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

                            Company Management

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

                                    Manage Your

                                    <span className='
                                        bg-gradient-to-r
                                        from-[#7209b7]
                                        via-[#9333ea]
                                        to-pink-500
                                        bg-clip-text
                                        text-transparent
                                    '>

                                        {" "}Companies

                                    </span>

                                </h1>

                                <p className='
                                    mt-3
                                    text-gray-600
                                    text-base
                                    max-w-2xl
                                '>

                                    Create, manage, and organize your
                                    hiring companies from one smart dashboard.

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

                                <Rocket className='
                                    h-10
                                    w-10
                                    text-white
                                ' />

                            </div>

                        </div>

                        {/* ================= SEARCH + BUTTON ================= */}

                        <div className='
                            flex
                            flex-col
                            md:flex-row
                            md:items-center
                            md:justify-between
                            gap-4
                            mt-8
                        '>

                            {/* SEARCH BAR */}

                            <div className='
                                flex
                                items-center
                                bg-white
                                border
                                border-gray-200
                                rounded-2xl
                                shadow-md
                                overflow-hidden
                                w-full
                                md:max-w-xl
                            '>

                                <div className='px-4 text-gray-400'>

                                    <Search className='
                                        h-5
                                        w-5
                                    ' />

                                </div>

                                <Input
                                    value={input}
                                    onChange={(e) =>
                                        setInput(e.target.value)
                                    }
                                    placeholder='Search company by name...'
                                    className='
                                        border-0
                                        h-12
                                        focus-visible:ring-0
                                        focus-visible:ring-offset-0
                                        shadow-none
                                        text-sm
                                    '
                                />

                            </div>

                            {/* BUTTON */}

                            <Button
                                onClick={() =>
                                    navigate("/admin/companies/create")
                                }
                                className='
                                    h-12
                                    px-6
                                    rounded-2xl
                                    bg-gradient-to-r
                                    from-[#7209b7]
                                    via-[#9333ea]
                                    to-pink-500
                                    hover:opacity-90
                                    shadow-lg
                                    font-semibold
                                '
                            >

                                <PlusCircle className='
                                    mr-2
                                    h-5
                                    w-5
                                ' />

                                New Company

                            </Button>

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

                                    <Building2 size={24} />

                                </div>

                                <h1 className='
                                    text-2xl
                                    font-extrabold
                                    text-gray-900
                                    mt-4
                                '>

                                    Company Hub

                                </h1>

                                <p className='
                                    text-gray-600
                                    mt-2
                                    text-sm
                                '>

                                    Manage all registered companies efficiently.

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

                                    <Search size={24} />

                                </div>

                                <h1 className='
                                    text-2xl
                                    font-extrabold
                                    text-gray-900
                                    mt-4
                                '>

                                    Smart Search

                                </h1>

                                <p className='
                                    text-gray-600
                                    mt-2
                                    text-sm
                                '>

                                    Quickly find companies with live filtering.

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

                                    <Sparkles size={24} />

                                </div>

                                <h1 className='
                                    text-2xl
                                    font-extrabold
                                    text-gray-900
                                    mt-4
                                '>

                                    Premium UI

                                </h1>

                                <p className='
                                    text-gray-600
                                    mt-2
                                    text-sm
                                '>

                                    Modern responsive experience for recruiters.

                                </p>

                            </div>

                        </div>

                    </div>

                </motion.div>

                {/* ================= TABLE ================= */}

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
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

                        <CompaniesTable />

                    </div>

                </motion.div>

            </div>

        </div>
    )
}

export default Companies