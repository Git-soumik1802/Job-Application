import React, { useEffect, useState } from 'react'

import {
    Badge
} from './ui/badge'

import {
    Button
} from './ui/button'

import {
    useParams
} from 'react-router-dom'

import axios from 'axios'

import {
    APPLICATION_API_END_POINT,
    JOB_API_END_POINT
} from '@/utils/constant'

import {
    setSingleJob
} from '@/redux/jobSlice'

import {
    useDispatch,
    useSelector
} from 'react-redux'

import {
    toast
} from 'sonner'

import {
    MapPin,
    BriefcaseBusiness,
    IndianRupee,
    CalendarDays,
    Users,
    Clock3,
    Building2,
    CheckCircle2
} from 'lucide-react'

import Navbar from './shared/Navbar'

import { motion } from 'framer-motion'

const JobDescription = () => {

    const { singleJob } = useSelector(store => store.job);

    const { user } = useSelector(store => store.auth);

    const isInitiallyApplied =
        singleJob?.applications?.some(
            application => application.applicant === user?._id
        ) || false;

    const [isApplied, setIsApplied] = useState(isInitiallyApplied);

    const params = useParams();

    const jobId = params.id;

    const dispatch = useDispatch();

    // ================= APPLY JOB =================

    const applyJobHandler = async () => {

        try {

            const res = await axios.get(
                `${APPLICATION_API_END_POINT}/apply/${jobId}`,
                {
                    withCredentials: true
                }
            );

            if (res.data.success) {

                setIsApplied(true);

                const updatedSingleJob = {

                    ...singleJob,

                    applications: [
                        ...singleJob.applications,
                        {
                            applicant: user?._id
                        }
                    ]
                }

                dispatch(setSingleJob(updatedSingleJob));

                toast.success(res.data.message);
            }

        } catch (error) {

            console.log(error);

            toast.error(error.response.data.message);
        }
    }

    // ================= FETCH JOB =================

    useEffect(() => {

        const fetchSingleJob = async () => {

            try {

                const res = await axios.get(
                    `${JOB_API_END_POINT}/get/${jobId}`,
                    {
                        withCredentials: true
                    }
                );

                if (res.data.success) {

                    dispatch(setSingleJob(res.data.job));

                    setIsApplied(
                        res.data.job.applications.some(
                            application => application.applicant === user?._id
                        )
                    )
                }

            } catch (error) {

                console.log(error);
            }
        }

        fetchSingleJob();

    }, [jobId, dispatch, user?._id]);

    return (

        <div className='min-h-screen bg-[#f9fafb]'>

            <Navbar />

            <div className='max-w-7xl mx-auto px-4 py-10'>

                {/* ================= TOP CARD ================= */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 30
                    }}
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        duration: 0.4
                    }}
                    className='
                        bg-white
                        rounded-3xl
                        shadow-xl
                        overflow-hidden
                        border
                        border-gray-100
                    '
                >

                    {/* ================= TOP BANNER ================= */}

                    <div className='
                        bg-gradient-to-r
                        from-[#7209b7]
                        to-[#9d4edd]
                        p-8
                        text-white
                    '>

                        <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6'>

                            {/* LEFT */}

                            <div>

                                <div className='flex items-center gap-3 mb-4'>

                                    <div className='
                                        h-16
                                        w-16
                                        rounded-2xl
                                        bg-white/20
                                        flex
                                        items-center
                                        justify-center
                                    '>

                                        <Building2 size={30} />

                                    </div>

                                    <div>

                                        <h1 className='text-4xl font-bold'>
                                            {singleJob?.title}
                                        </h1>

                                        <p className='text-gray-100 mt-1 text-lg'>
                                            {singleJob?.company?.name}
                                        </p>

                                    </div>

                                </div>

                                {/* BADGES */}

                                <div className='flex flex-wrap gap-3 mt-5'>

                                    <Badge className='bg-white/20 hover:bg-white/20 text-white px-4 py-2 rounded-full'>

                                        <BriefcaseBusiness
                                            size={15}
                                            className='mr-1'
                                        />

                                        {singleJob?.position} Positions

                                    </Badge>

                                    <Badge className='bg-white/20 hover:bg-white/20 text-white px-4 py-2 rounded-full'>

                                        {singleJob?.jobType}

                                    </Badge>

                                    <Badge className='bg-white/20 hover:bg-white/20 text-white px-4 py-2 rounded-full'>

                                        <IndianRupee
                                            size={15}
                                            className='mr-1'
                                        />

                                        {singleJob?.salary} LPA

                                    </Badge>

                                </div>

                            </div>

                            {/* APPLY BUTTON */}

                            <div>

                                <Button
                                    onClick={isApplied ? null : applyJobHandler}
                                    disabled={isApplied}
                                    className={`
                                        px-8
                                        py-6
                                        rounded-2xl
                                        text-lg
                                        font-semibold

                                        ${isApplied

                                            ? 'bg-green-600 hover:bg-green-600 cursor-not-allowed'

                                            : 'bg-white text-[#7209b7] hover:bg-gray-100'
                                        }
                                    `}
                                >

                                    {
                                        isApplied

                                            ? (
                                                <div className='flex items-center gap-2'>

                                                    <CheckCircle2 size={20} />

                                                    Applied

                                                </div>
                                            )

                                            : "Apply Now"
                                    }

                                </Button>

                            </div>

                        </div>

                    </div>

                    {/* ================= DETAILS ================= */}

                    <div className='p-8'>

                        <h1 className='
                            text-2xl
                            font-bold
                            text-gray-800
                            mb-8
                        '>

                            Job Description

                        </h1>

                        {/* GRID */}

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

                            {/* CARD */}

                            <div className='bg-[#faf7ff] p-5 rounded-2xl'>

                                <div className='flex items-center gap-3 mb-2'>

                                    <BriefcaseBusiness className='text-[#7209b7]' />

                                    <h1 className='font-bold text-lg'>
                                        Role
                                    </h1>

                                </div>

                                <p className='text-gray-700'>
                                    {singleJob?.title}
                                </p>

                            </div>

                            {/* CARD */}

                            <div className='bg-[#faf7ff] p-5 rounded-2xl'>

                                <div className='flex items-center gap-3 mb-2'>

                                    <MapPin className='text-[#7209b7]' />

                                    <h1 className='font-bold text-lg'>
                                        Location
                                    </h1>

                                </div>

                                <p className='text-gray-700'>
                                    {singleJob?.location}
                                </p>

                            </div>

                            {/* CARD */}

                            <div className='bg-[#faf7ff] p-5 rounded-2xl'>

                                <div className='flex items-center gap-3 mb-2'>

                                    <Clock3 className='text-[#7209b7]' />

                                    <h1 className='font-bold text-lg'>
                                        Experience
                                    </h1>

                                </div>

                                <p className='text-gray-700'>
                                    {singleJob?.experienceLevel} Years
                                </p>

                            </div>

                            {/* CARD */}

                            <div className='bg-[#faf7ff] p-5 rounded-2xl'>

                                <div className='flex items-center gap-3 mb-2'>

                                    <IndianRupee className='text-[#7209b7]' />

                                    <h1 className='font-bold text-lg'>
                                        Salary
                                    </h1>

                                </div>

                                <p className='text-gray-700'>
                                    {singleJob?.salary} LPA
                                </p>

                            </div>

                            {/* CARD */}

                            <div className='bg-[#faf7ff] p-5 rounded-2xl'>

                                <div className='flex items-center gap-3 mb-2'>

                                    <Users className='text-[#7209b7]' />

                                    <h1 className='font-bold text-lg'>
                                        Total Applicants
                                    </h1>

                                </div>

                                <p className='text-gray-700'>
                                    {singleJob?.applications?.length}
                                </p>

                            </div>

                            {/* CARD */}

                            <div className='bg-[#faf7ff] p-5 rounded-2xl'>

                                <div className='flex items-center gap-3 mb-2'>

                                    <CalendarDays className='text-[#7209b7]' />

                                    <h1 className='font-bold text-lg'>
                                        Posted Date
                                    </h1>

                                </div>

                                <p className='text-gray-700'>

                                    {
                                        singleJob?.createdAt
                                            ?.split("T")[0]
                                    }

                                </p>

                            </div>

                        </div>

                        {/* DESCRIPTION */}

                        <div className='mt-10'>

                            <h1 className='
                                text-2xl
                                font-bold
                                text-gray-800
                                mb-4
                            '>

                                About This Job

                            </h1>

                            <p className='
                                text-gray-600
                                leading-relaxed
                                text-lg
                            '>

                                {singleJob?.description}

                            </p>

                        </div>

                    </div>

                </motion.div>

            </div>

        </div>
    )
}

export default JobDescription