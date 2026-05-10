import React from 'react'

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from './ui/table'

import { Badge } from './ui/badge'

import { useSelector } from 'react-redux'

import {
    BriefcaseBusiness,
    CalendarDays,
    CircleCheckBig,
    Clock3,
    XCircle
} from 'lucide-react'

const AppliedJobTable = () => {

    const { allAppliedJobs } = useSelector(store => store.job);

    return (

        <div className='bg-gradient-to-br from-white to-[#f9f5ff] rounded-3xl shadow-xl border border-gray-100 overflow-hidden'>

            {/* ================= HEADER ================= */}

            <div className='bg-gradient-to-r from-[#7209b7] to-[#9d4edd] p-6 text-white'>

                <div className='flex items-center gap-4'>

                    <div className='bg-white/20 p-3 rounded-2xl'>
                        <BriefcaseBusiness size={28} />
                    </div>

                    <div>

                        <h1 className='text-2xl font-bold'>
                            Applied Jobs
                        </h1>

                        <p className='text-gray-100 text-sm mt-1'>
                            Track all your job applications here
                        </p>

                    </div>

                </div>

            </div>

            {/* ================= TABLE ================= */}

            <div className='overflow-x-auto p-5'>

                <Table>

                    <TableHeader>

                        <TableRow className='bg-[#f8f4ff] hover:bg-[#f8f4ff]'>

                            <TableHead className="font-bold text-gray-700">
                                Applied Date
                            </TableHead>

                            <TableHead className="font-bold text-gray-700">
                                Job Role
                            </TableHead>

                            <TableHead className="font-bold text-gray-700">
                                Company
                            </TableHead>

                            <TableHead className="text-right font-bold text-gray-700">
                                Status
                            </TableHead>

                        </TableRow>

                    </TableHeader>

                    <TableBody>

                        {
                            !allAppliedJobs || allAppliedJobs.length <= 0 ? (

                                <TableRow>

                                    <TableCell
                                        colSpan={4}
                                        className="h-[300px]"
                                    >

                                        <div className='flex flex-col items-center justify-center text-center'>

                                            <div className='bg-[#f3e8ff] p-5 rounded-full mb-5'>

                                                <BriefcaseBusiness
                                                    size={50}
                                                    className='text-[#7209b7]'
                                                />

                                            </div>

                                            <h1 className='text-2xl font-bold text-gray-700'>
                                                No Applications Yet
                                            </h1>

                                            <p className='text-gray-500 mt-2'>
                                                Start applying for jobs to see them here.
                                            </p>

                                        </div>

                                    </TableCell>

                                </TableRow>

                            ) : (

                                allAppliedJobs.map((appliedJob) => (

                                    <TableRow
                                        key={appliedJob?._id}
                                        className='hover:bg-[#faf7ff] transition-all duration-300'
                                    >

                                        {/* DATE */}

                                        <TableCell>

                                            <div className='flex items-center gap-2 text-gray-600 font-medium'>

                                                <CalendarDays
                                                    size={16}
                                                    className='text-[#7209b7]'
                                                />

                                                {
                                                    appliedJob?.createdAt
                                                        ?.split("T")[0]
                                                }

                                            </div>

                                        </TableCell>

                                        {/* ROLE */}

                                        <TableCell>

                                            <div>

                                                <h1 className='font-bold text-gray-800'>
                                                    {appliedJob?.job?.title}
                                                </h1>

                                                <p className='text-sm text-gray-500'>
                                                    {appliedJob?.job?.jobType}
                                                </p>

                                            </div>

                                        </TableCell>

                                        {/* COMPANY */}

                                        <TableCell>

                                            <div className='flex items-center gap-3'>

                                                <div className='h-10 w-10 rounded-full bg-[#f3e8ff] flex items-center justify-center font-bold text-[#7209b7]'>

                                                    {
                                                        appliedJob?.job?.company?.name
                                                            ?.charAt(0)
                                                    }

                                                </div>

                                                <div>

                                                    <h1 className='font-semibold text-gray-700'>
                                                        {
                                                            appliedJob?.job?.company?.name
                                                        }
                                                    </h1>

                                                    <p className='text-xs text-gray-500'>
                                                        Hiring Company
                                                    </p>

                                                </div>

                                            </div>

                                        </TableCell>

                                        {/* STATUS */}

                                        <TableCell className="text-right">

                                            <Badge
                                                className={`

                                                flex
                                                items-center
                                                gap-2
                                                justify-center
                                                px-4
                                                py-2
                                                rounded-full
                                                text-white
                                                font-semibold
                                                w-fit
                                                ml-auto

                                                ${appliedJob?.status === "rejected"
                                                        ? "bg-red-500 hover:bg-red-500"

                                                        : appliedJob?.status === "pending"

                                                            ? "bg-yellow-500 hover:bg-yellow-500"

                                                            : "bg-green-500 hover:bg-green-500"
                                                    }
                                                `}
                                            >

                                                {
                                                    appliedJob?.status === "rejected"
                                                        ? <XCircle size={16} />

                                                        : appliedJob?.status === "pending"
                                                            ? <Clock3 size={16} />

                                                            : <CircleCheckBig size={16} />
                                                }

                                                {appliedJob?.status?.toUpperCase()}

                                            </Badge>

                                        </TableCell>

                                    </TableRow>

                                ))
                            )
                        }

                    </TableBody>

                </Table>

            </div>

        </div>
    )
}

export default AppliedJobTable