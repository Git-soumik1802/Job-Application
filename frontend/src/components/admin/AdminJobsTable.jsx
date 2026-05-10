import React, { useEffect, useState } from 'react'

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from '../ui/table'

import {
    Avatar,
    AvatarImage
} from '../ui/avatar'

import {
    Popover,
    PopoverContent,
    PopoverTrigger
} from '../ui/popover'

import {
    Edit2,
    Eye,
    MoreHorizontal,
    Building2,
    CalendarDays,
    BriefcaseBusiness,
    Sparkles
} from 'lucide-react'

import { useSelector } from 'react-redux'

import { useNavigate } from 'react-router-dom'

import { motion } from 'framer-motion'

const AdminJobsTable = () => {

    const { allAdminJobs, searchJobByText } = useSelector(store => store.job);

    const [filterJobs, setFilterJobs] = useState(allAdminJobs);

    const navigate = useNavigate();

    // ================= FILTER JOBS =================

    useEffect(() => {

        const filteredJobs = allAdminJobs.filter((job) => {

            if (!searchJobByText) {
                return true;
            }

            return (

                job?.title
                    ?.toLowerCase()
                    .includes(searchJobByText.toLowerCase())

                ||

                job?.company?.name
                    ?.toLowerCase()
                    .includes(searchJobByText.toLowerCase())

                ||

                job?.location
                    ?.toLowerCase()
                    .includes(searchJobByText.toLowerCase())

            );

        });

        setFilterJobs(filteredJobs);

    }, [allAdminJobs, searchJobByText]);

    return (

        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className='
                rounded-[28px]
                border
                border-gray-200
                bg-white
                shadow-xl
                overflow-hidden
            '
        >

            {/* ================= TOP HEADER ================= */}

            <div className='
                flex
                items-center
                justify-between
                px-6
                py-5
                border-b
                border-gray-100
                bg-gradient-to-r
                from-[#faf5ff]
                to-[#fdf2f8]
            '>

                <div>

                    <div className='
                        inline-flex
                        items-center
                        gap-2
                        px-3
                        py-1.5
                        rounded-full
                        bg-purple-100
                        text-[#7209b7]
                        text-xs
                        font-semibold
                        mb-3
                    '>

                        <Sparkles size={12} />

                        Smart Hiring Dashboard

                    </div>

                    <h1 className='
                        text-2xl
                        font-extrabold
                        text-gray-900
                    '>

                        Posted Jobs

                    </h1>

                    <p className='
                        text-sm
                        text-gray-500
                        mt-1
                    '>

                        Manage and track all your active job postings.

                    </p>

                </div>

                <div className='
                    hidden
                    md:flex
                    items-center
                    justify-center
                    h-14
                    w-14
                    rounded-2xl
                    bg-gradient-to-br
                    from-[#7209b7]
                    to-pink-500
                    shadow-lg
                '>

                    <BriefcaseBusiness className='
                        h-7
                        w-7
                        text-white
                    ' />

                </div>

            </div>

            {/* ================= TABLE ================= */}

            <div className='overflow-x-auto'>

                <Table>

                    <TableCaption className='
                        py-5
                        text-gray-500
                    '>

                        A list of your recently posted jobs.

                    </TableCaption>

                    {/* ================= HEADER ================= */}

                    <TableHeader>

                        <TableRow className='bg-gray-50'>

                            <TableHead className='
                                text-gray-700
                                font-bold
                                py-4
                            '>

                                Company

                            </TableHead>

                            <TableHead className='
                                text-gray-700
                                font-bold
                            '>

                                Role

                            </TableHead>

                            <TableHead className='
                                text-gray-700
                                font-bold
                            '>

                                Date

                            </TableHead>

                            <TableHead className='
                                text-right
                                text-gray-700
                                font-bold
                            '>

                                Actions

                            </TableHead>

                        </TableRow>

                    </TableHeader>

                    {/* ================= BODY ================= */}

                    <TableBody>

                        {
                            filterJobs?.length <= 0 ? (

                                <TableRow>

                                    <TableCell
                                        colSpan={4}
                                        className='
                                            text-center
                                            py-16
                                        '
                                    >

                                        <div className='
                                            flex
                                            flex-col
                                            items-center
                                            justify-center
                                        '>

                                            <div className='
                                                h-16
                                                w-16
                                                rounded-2xl
                                                bg-purple-100
                                                flex
                                                items-center
                                                justify-center
                                                mb-4
                                            '>

                                                <Building2 className='
                                                    h-8
                                                    w-8
                                                    text-[#7209b7]
                                                ' />

                                            </div>

                                            <h1 className='
                                                text-2xl
                                                font-bold
                                                text-gray-800
                                            '>

                                                No Jobs Found

                                            </h1>

                                            <p className='
                                                text-gray-500
                                                mt-2
                                            '>

                                                Try searching with another keyword.

                                            </p>

                                        </div>

                                    </TableCell>

                                </TableRow>

                            ) : (

                                filterJobs?.map((job) => (

                                    <TableRow
                                        key={job._id}
                                        className='
                                            hover:bg-[#faf5ff]
                                            transition-all
                                            duration-200
                                        '
                                    >

                                        {/* COMPANY */}

                                        <TableCell className='py-5'>

                                            <div className='
                                                flex
                                                items-center
                                                gap-3
                                            '>

                                                <Avatar className='
                                                    h-11
                                                    w-11
                                                    border
                                                    border-gray-200
                                                '>

                                                    <AvatarImage
                                                        src={job?.company?.logo}
                                                    />

                                                </Avatar>

                                                <div>

                                                    <h1 className='
                                                        font-semibold
                                                        text-gray-900
                                                    '>

                                                        {job?.company?.name}

                                                    </h1>

                                                    <p className='
                                                        text-xs
                                                        text-gray-500
                                                    '>

                                                        Hiring Company

                                                    </p>

                                                </div>

                                            </div>

                                        </TableCell>

                                        {/* ROLE */}

                                        <TableCell>

                                            <div>

                                                <h1 className='
                                                    font-semibold
                                                    text-gray-800
                                                '>

                                                    {job?.title}

                                                </h1>

                                                <p className='
                                                    text-xs
                                                    text-gray-500
                                                    mt-1
                                                '>

                                                    Active Position

                                                </p>

                                            </div>

                                        </TableCell>

                                        {/* DATE */}

                                        <TableCell>

                                            <div className='
                                                flex
                                                items-center
                                                gap-2
                                                text-gray-600
                                            '>

                                                <CalendarDays className='
                                                    h-4
                                                    w-4
                                                ' />

                                                {job?.createdAt?.split("T")[0]}

                                            </div>

                                        </TableCell>

                                        {/* ACTIONS */}

                                        <TableCell className='text-right'>

                                            <Popover>

                                                <PopoverTrigger>

                                                    <div className='
                                                        inline-flex
                                                        items-center
                                                        justify-center
                                                        h-10
                                                        w-10
                                                        rounded-xl
                                                        hover:bg-purple-100
                                                        transition-all
                                                        cursor-pointer
                                                    '>

                                                        <MoreHorizontal className='
                                                            h-5
                                                            w-5
                                                            text-gray-700
                                                        ' />

                                                    </div>

                                                </PopoverTrigger>

                                                <PopoverContent className='
                                                    w-44
                                                    rounded-2xl
                                                    border
                                                    border-gray-200
                                                    shadow-xl
                                                    p-3
                                                '>

                                                    {/* EDIT */}

                                                    <div
                                                        onClick={() =>
                                                            navigate(`/admin/companies/${job._id}`)
                                                        }
                                                        className='
                                                            flex
                                                            items-center
                                                            gap-3
                                                            p-3
                                                            rounded-xl
                                                            hover:bg-[#faf5ff]
                                                            cursor-pointer
                                                            transition-all
                                                        '
                                                    >

                                                        <div className='
                                                            h-9
                                                            w-9
                                                            rounded-xl
                                                            bg-purple-100
                                                            flex
                                                            items-center
                                                            justify-center
                                                        '>

                                                            <Edit2 className='
                                                                h-4
                                                                w-4
                                                                text-[#7209b7]
                                                            ' />

                                                        </div>

                                                        <span className='
                                                            font-medium
                                                            text-gray-700
                                                        '>

                                                            Edit Job

                                                        </span>

                                                    </div>

                                                    {/* APPLICANTS */}

                                                    <div
                                                        onClick={() =>
                                                            navigate(`/admin/jobs/${job._id}/applicants`)
                                                        }
                                                        className='
                                                            flex
                                                            items-center
                                                            gap-3
                                                            p-3
                                                            rounded-xl
                                                            hover:bg-[#faf5ff]
                                                            cursor-pointer
                                                            transition-all
                                                            mt-2
                                                        '
                                                    >

                                                        <div className='
                                                            h-9
                                                            w-9
                                                            rounded-xl
                                                            bg-pink-100
                                                            flex
                                                            items-center
                                                            justify-center
                                                        '>

                                                            <Eye className='
                                                                h-4
                                                                w-4
                                                                text-pink-500
                                                            ' />

                                                        </div>

                                                        <span className='
                                                            font-medium
                                                            text-gray-700
                                                        '>

                                                            Applicants

                                                        </span>

                                                    </div>

                                                </PopoverContent>

                                            </Popover>

                                        </TableCell>

                                    </TableRow>

                                ))

                            )
                        }

                    </TableBody>

                </Table>

            </div>

        </motion.div>
    )
}

export default AdminJobsTable