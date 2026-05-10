import React from 'react'

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
    Popover,
    PopoverContent,
    PopoverTrigger
} from '../ui/popover'

import {
    MoreHorizontal,
    CheckCircle2,
    XCircle,
    FileText,
    Mail,
    Phone,
    CalendarDays,
    User2
} from 'lucide-react'

import { useSelector } from 'react-redux'

import { toast } from 'sonner'

import { APPLICATION_API_END_POINT } from '@/utils/constant'

import axios from 'axios'

import {
    Avatar,
    AvatarFallback,
    AvatarImage
} from '../ui/avatar'

import { motion } from 'framer-motion'

const shortlistingStatus = ["Accepted", "Rejected"];

const ApplicantsTable = () => {

    const { applicants } = useSelector(store => store.application);

    // ================= STATUS HANDLER =================

    const statusHandler = async (status, id) => {

        try {

            axios.defaults.withCredentials = true;

            const res = await axios.post(
                `${APPLICATION_API_END_POINT}/status/${id}/update`,
                { status }
            );

            if (res.data.success) {

                toast.success(res.data.message);

            }

        } catch (error) {

            toast.error(error.response.data.message);

        }
    }

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

            {/* ================= HEADER ================= */}

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

                    <h1 className='
                        text-2xl
                        font-extrabold
                        text-gray-900
                    '>

                        Applicants List

                    </h1>

                    <p className='
                        text-sm
                        text-gray-500
                        mt-1
                    '>

                        Review and manage all job applicants.

                    </p>

                </div>

                <div className='
                    px-4
                    py-2
                    rounded-full
                    bg-purple-100
                    text-[#7209b7]
                    font-semibold
                    text-sm
                '>

                    {applicants?.applications?.length || 0} Candidates

                </div>

            </div>

            {/* ================= TABLE ================= */}

            <div className='overflow-x-auto'>

                <Table>

                    <TableCaption className='
                        py-5
                        text-gray-500
                    '>

                        A list of recent job applicants.

                    </TableCaption>

                    {/* ================= TABLE HEADER ================= */}

                    <TableHeader>

                        <TableRow className='bg-gray-50'>

                            <TableHead className='font-bold text-gray-700 py-4'>
                                Candidate
                            </TableHead>

                            <TableHead className='font-bold text-gray-700'>
                                Email
                            </TableHead>

                            <TableHead className='font-bold text-gray-700'>
                                Contact
                            </TableHead>

                            <TableHead className='font-bold text-gray-700'>
                                Resume
                            </TableHead>

                            <TableHead className='font-bold text-gray-700'>
                                Applied Date
                            </TableHead>

                            <TableHead className='text-right font-bold text-gray-700'>
                                Actions
                            </TableHead>

                        </TableRow>

                    </TableHeader>

                    {/* ================= TABLE BODY ================= */}

                    <TableBody>

                        {
                            applicants &&
                            applicants?.applications?.map((item) => (

                                <TableRow
                                    key={item._id}
                                    className='
                                        hover:bg-[#faf5ff]
                                        transition-all
                                        duration-200
                                    '
                                >

                                    {/* ================= USER ================= */}

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
                                                    src={item?.applicant?.profile?.profilePhoto}
                                                />

                                                <AvatarFallback>

                                                    <User2 className='h-5 w-5' />

                                                </AvatarFallback>

                                            </Avatar>

                                            <div>

                                                <h1 className='
                                                    font-semibold
                                                    text-gray-900
                                                '>

                                                    {item?.applicant?.fullname}

                                                </h1>

                                                <p className='
                                                    text-xs
                                                    text-gray-500
                                                '>

                                                    Job Applicant

                                                </p>

                                            </div>

                                        </div>

                                    </TableCell>

                                    {/* ================= EMAIL ================= */}

                                    <TableCell>

                                        <div className='
                                            flex
                                            items-center
                                            gap-2
                                            text-gray-700
                                        '>

                                            <Mail className='
                                                h-4
                                                w-4
                                                text-[#7209b7]
                                            ' />

                                            <span className='text-sm'>

                                                {item?.applicant?.email}

                                            </span>

                                        </div>

                                    </TableCell>

                                    {/* ================= CONTACT ================= */}

                                    <TableCell>

                                        <div className='
                                            flex
                                            items-center
                                            gap-2
                                            text-gray-700
                                        '>

                                            <Phone className='
                                                h-4
                                                w-4
                                                text-pink-500
                                            ' />

                                            <span className='text-sm'>

                                                {item?.applicant?.phoneNumber}

                                            </span>

                                        </div>

                                    </TableCell>

                                    {/* ================= RESUME ================= */}

                                    <TableCell>

                                        {
                                            item?.applicant?.profile?.resume ? (

                                                <a
                                                    href={item?.applicant?.profile?.resume}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className='
                                                        inline-flex
                                                        items-center
                                                        gap-2
                                                        px-3
                                                        py-2
                                                        rounded-xl
                                                        bg-purple-100
                                                        text-[#7209b7]
                                                        text-sm
                                                        font-medium
                                                        hover:opacity-80
                                                        transition-all
                                                    '
                                                >

                                                    <FileText className='
                                                        h-4
                                                        w-4
                                                    ' />

                                                    {
                                                        item?.applicant?.profile?.resumeOriginalName
                                                    }

                                                </a>

                                            ) : (

                                                <span className='
                                                    text-gray-400
                                                    text-sm
                                                '>

                                                    No Resume

                                                </span>

                                            )
                                        }

                                    </TableCell>

                                    {/* ================= DATE ================= */}

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

                                            {
                                                item?.applicant?.createdAt
                                                    ?.split("T")[0]
                                            }

                                        </div>

                                    </TableCell>

                                    {/* ================= ACTIONS ================= */}

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

                                                {/* ACCEPT */}

                                                <div
                                                    onClick={() =>
                                                        statusHandler(
                                                            "Accepted",
                                                            item?._id
                                                        )
                                                    }
                                                    className='
                                                        flex
                                                        items-center
                                                        gap-3
                                                        p-3
                                                        rounded-xl
                                                        hover:bg-green-50
                                                        cursor-pointer
                                                        transition-all
                                                    '
                                                >

                                                    <div className='
                                                        h-9
                                                        w-9
                                                        rounded-xl
                                                        bg-green-100
                                                        flex
                                                        items-center
                                                        justify-center
                                                    '>

                                                        <CheckCircle2 className='
                                                            h-4
                                                            w-4
                                                            text-green-600
                                                        ' />

                                                    </div>

                                                    <span className='
                                                        font-medium
                                                        text-gray-700
                                                    '>

                                                        Accept

                                                    </span>

                                                </div>

                                                {/* REJECT */}

                                                <div
                                                    onClick={() =>
                                                        statusHandler(
                                                            "Rejected",
                                                            item?._id
                                                        )
                                                    }
                                                    className='
                                                        flex
                                                        items-center
                                                        gap-3
                                                        p-3
                                                        rounded-xl
                                                        hover:bg-red-50
                                                        cursor-pointer
                                                        transition-all
                                                        mt-2
                                                    '
                                                >

                                                    <div className='
                                                        h-9
                                                        w-9
                                                        rounded-xl
                                                        bg-red-100
                                                        flex
                                                        items-center
                                                        justify-center
                                                    '>

                                                        <XCircle className='
                                                            h-4
                                                            w-4
                                                            text-red-500
                                                        ' />

                                                    </div>

                                                    <span className='
                                                        font-medium
                                                        text-gray-700
                                                    '>

                                                        Reject

                                                    </span>

                                                </div>

                                            </PopoverContent>

                                        </Popover>

                                    </TableCell>

                                </TableRow>

                            ))
                        }

                    </TableBody>

                </Table>

            </div>

        </motion.div>
    )
}

export default ApplicantsTable