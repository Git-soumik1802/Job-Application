import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useSelector } from 'react-redux'

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '../ui/select'

import axios from 'axios'
import { JOB_API_END_POINT } from '@/utils/constant'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'

import {
    Loader2,
    BriefcaseBusiness,
    MapPin,
    Wallet,
    Sparkles,
    Rocket
} from 'lucide-react'

import { motion } from 'framer-motion'

const PostJob = () => {

    const [input, setInput] = useState({
        title: "",
        description: "",
        requirements: "",
        salary: "",
        location: "",
        jobType: "",
        experience: "",
        position: 0,
        companyId: ""
    });

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const { companies } = useSelector(store => store.company);

    // ================= INPUT HANDLER =================

    const changeEventHandler = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    };

    // ================= SELECT COMPANY =================

    const selectChangeHandler = (value) => {

        const selectedCompany = companies.find(
            (company) => company.name.toLowerCase() === value
        );

        setInput({
            ...input,
            companyId: selectedCompany._id
        });
    };

    // ================= SUBMIT HANDLER =================

    const submitHandler = async (e) => {

        e.preventDefault();

        try {

            setLoading(true);

            const res = await axios.post(
                `${JOB_API_END_POINT}/post`,
                input,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    withCredentials: true
                }
            );

            if (res.data.success) {

                toast.success(res.data.message);

                navigate("/admin/jobs");
            }

        } catch (error) {

            toast.error(error.response.data.message);

        } finally {

            setLoading(false);
        }
    }

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
                max-w-5xl
                mx-auto
                px-4
                py-6
            '>

                {/* ================= HERO ================= */}

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className='
                        relative
                        overflow-hidden
                        rounded-[30px]
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
                        top-[-120px]
                        right-[-120px]
                        h-[220px]
                        w-[220px]
                        bg-purple-300/20
                        rounded-full
                        blur-3xl
                    '></div>

                    <div className='
                        absolute
                        bottom-[-100px]
                        left-[-100px]
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

                            Smart Hiring Panel

                        </div>

                        {/* HEADING */}

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
                                    leading-tight
                                    text-gray-900
                                '>

                                    Create Your Next

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

                                </h1>

                                <p className='
                                    mt-3
                                    text-base
                                    text-gray-600
                                    max-w-2xl
                                '>

                                    Publish jobs and attract top talent
                                    with a modern hiring experience.

                                </p>

                            </div>

                            {/* ICON CARD */}

                            <div className='
                                hidden
                                lg:flex
                                items-center
                                justify-center
                                h-[120px]
                                w-[120px]
                                rounded-[30px]
                                bg-gradient-to-br
                                from-[#7209b7]
                                to-pink-500
                                shadow-xl
                            '>

                                <Rocket className='
                                    h-12
                                    w-12
                                    text-white
                                ' />

                            </div>

                        </div>

                        {/* ================= FORM ================= */}

                        <form
                            onSubmit={submitHandler}
                            className='mt-8'
                        >

                            <div className='
                                grid
                                grid-cols-1
                                md:grid-cols-2
                                gap-5
                            '>

                                {/* TITLE */}

                                <div className='space-y-2'>

                                    <Label className='font-semibold'>
                                        Job Title
                                    </Label>

                                    <div className='relative'>

                                        <BriefcaseBusiness className='
                                            absolute
                                            left-4
                                            top-3.5
                                            text-gray-400
                                            h-4
                                            w-4
                                        ' />

                                        <Input
                                            type="text"
                                            name="title"
                                            value={input.title}
                                            onChange={changeEventHandler}
                                            placeholder="Frontend Developer"
                                            className='
                                                h-12
                                                pl-11
                                                rounded-xl
                                                border-gray-200
                                            '
                                        />

                                    </div>

                                </div>

                                {/* COMPANY */}

                                <div className='space-y-2'>

                                    <Label className='font-semibold'>
                                        Company
                                    </Label>

                                    {
                                        companies.length > 0 && (

                                            <Select
                                                onValueChange={selectChangeHandler}
                                            >

                                                <SelectTrigger className='
                                                    h-12
                                                    rounded-xl
                                                    border-gray-200
                                                '>

                                                    <SelectValue placeholder="Select Company" />

                                                </SelectTrigger>

                                                <SelectContent>

                                                    <SelectGroup>

                                                        {
                                                            companies.map((company) => (

                                                                <SelectItem
                                                                    key={company._id}
                                                                    value={company?.name?.toLowerCase()}
                                                                >

                                                                    {company.name}

                                                                </SelectItem>

                                                            ))
                                                        }

                                                    </SelectGroup>

                                                </SelectContent>

                                            </Select>

                                        )
                                    }

                                </div>

                                {/* DESCRIPTION */}

                                <div className='space-y-2'>

                                    <Label className='font-semibold'>
                                        Description
                                    </Label>

                                    <Input
                                        type="text"
                                        name="description"
                                        value={input.description}
                                        onChange={changeEventHandler}
                                        placeholder="Describe the role..."
                                        className='
                                            h-12
                                            rounded-xl
                                            border-gray-200
                                        '
                                    />

                                </div>

                                {/* REQUIREMENTS */}

                                <div className='space-y-2'>

                                    <Label className='font-semibold'>
                                        Skills / Requirements
                                    </Label>

                                    <Input
                                        type="text"
                                        name="requirements"
                                        value={input.requirements}
                                        onChange={changeEventHandler}
                                        placeholder="React, Node.js"
                                        className='
                                            h-12
                                            rounded-xl
                                            border-gray-200
                                        '
                                    />

                                </div>

                                {/* SALARY */}

                                <div className='space-y-2'>

                                    <Label className='font-semibold'>
                                        Salary
                                    </Label>

                                    <div className='relative'>

                                        <Wallet className='
                                            absolute
                                            left-4
                                            top-3.5
                                            text-gray-400
                                            h-4
                                            w-4
                                        ' />

                                        <Input
                                            type="text"
                                            name="salary"
                                            value={input.salary}
                                            onChange={changeEventHandler}
                                            placeholder="8 LPA"
                                            className='
                                                h-12
                                                pl-11
                                                rounded-xl
                                                border-gray-200
                                            '
                                        />

                                    </div>

                                </div>

                                {/* LOCATION */}

                                <div className='space-y-2'>

                                    <Label className='font-semibold'>
                                        Location
                                    </Label>

                                    <div className='relative'>

                                        <MapPin className='
                                            absolute
                                            left-4
                                            top-3.5
                                            text-gray-400
                                            h-4
                                            w-4
                                        ' />

                                        <Input
                                            type="text"
                                            name="location"
                                            value={input.location}
                                            onChange={changeEventHandler}
                                            placeholder="Bangalore / Remote"
                                            className='
                                                h-12
                                                pl-11
                                                rounded-xl
                                                border-gray-200
                                            '
                                        />

                                    </div>

                                </div>

                                {/* JOB TYPE */}

                                <div className='space-y-2'>

                                    <Label className='font-semibold'>
                                        Job Type
                                    </Label>

                                    <Input
                                        type="text"
                                        name="jobType"
                                        value={input.jobType}
                                        onChange={changeEventHandler}
                                        placeholder="Full Time"
                                        className='
                                            h-12
                                            rounded-xl
                                            border-gray-200
                                        '
                                    />

                                </div>

                                {/* EXPERIENCE */}

                                <div className='space-y-2'>

                                    <Label className='font-semibold'>
                                        Experience
                                    </Label>

                                    <Input
                                        type="text"
                                        name="experience"
                                        value={input.experience}
                                        onChange={changeEventHandler}
                                        placeholder="2 Years"
                                        className='
                                            h-12
                                            rounded-xl
                                            border-gray-200
                                        '
                                    />

                                </div>

                                {/* POSITION */}

                                <div className='space-y-2 md:col-span-2'>

                                    <Label className='font-semibold'>
                                        Number of Positions
                                    </Label>

                                    <Input
                                        type="number"
                                        name="position"
                                        value={input.position}
                                        onChange={changeEventHandler}
                                        placeholder="5"
                                        className='
                                            h-12
                                            rounded-xl
                                            border-gray-200
                                        '
                                    />

                                </div>

                            </div>

                            {/* BUTTON */}

                            <div className='mt-8'>

                                {
                                    loading ? (

                                        <Button
                                            className='
                                                w-full
                                                h-12
                                                rounded-xl
                                                bg-gradient-to-r
                                                from-[#7209b7]
                                                to-[#b5179e]
                                            '
                                        >

                                            <Loader2 className='
                                                mr-2
                                                h-4
                                                w-4
                                                animate-spin
                                            ' />

                                            Publishing...

                                        </Button>

                                    ) : (

                                        <Button
                                            type="submit"
                                            className='
                                                w-full
                                                h-12
                                                rounded-xl
                                                bg-gradient-to-r
                                                from-[#7209b7]
                                                via-[#9333ea]
                                                to-pink-500
                                                hover:opacity-90
                                                font-semibold
                                                shadow-lg
                                            '
                                        >

                                            Publish New Job

                                        </Button>

                                    )
                                }

                            </div>

                            {/* NO COMPANY */}

                            {
                                companies.length === 0 && (

                                    <div className='
                                        mt-5
                                        bg-red-50
                                        border
                                        border-red-200
                                        text-red-600
                                        rounded-xl
                                        p-3
                                        text-center
                                        text-sm
                                        font-semibold
                                    '>

                                        Please register a company first
                                        before posting jobs.

                                    </div>

                                )
                            }

                        </form>

                    </div>

                </motion.div>

            </div>

        </div>
    )
}

export default PostJob