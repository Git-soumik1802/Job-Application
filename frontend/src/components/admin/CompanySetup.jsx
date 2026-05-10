import React, { useEffect, useState } from 'react'

import Navbar from '../shared/Navbar'

import { Button } from '../ui/button'

import {
    ArrowLeft,
    Loader2,
    Building2,
    Globe,
    MapPin,
    FileImage,
    Sparkles,
    Rocket,
    ShieldCheck
} from 'lucide-react'

import { Label } from '../ui/label'

import { Input } from '../ui/input'

import axios from 'axios'

import { COMPANY_API_END_POINT } from '@/utils/constant'

import { useNavigate, useParams } from 'react-router-dom'

import { toast } from 'sonner'

import { useSelector } from 'react-redux'

import useGetCompanyById from '@/hooks/useGetCompanyById'

import { motion } from 'framer-motion'

const CompanySetup = () => {

    const params = useParams();

    useGetCompanyById(params.id);

    const [input, setInput] = useState({
        name: "",
        description: "",
        website: "",
        location: "",
        file: null
    });

    const { singleCompany } = useSelector(store => store.company);

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    // ================= INPUT CHANGE =================

    const changeEventHandler = (e) => {

        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    }

    // ================= FILE CHANGE =================

    const changeFileHandler = (e) => {

        const file = e.target.files?.[0];

        setInput({
            ...input,
            file
        });
    }

    // ================= SUBMIT =================

    const submitHandler = async (e) => {

        e.preventDefault();

        const formData = new FormData();

        formData.append("name", input.name);
        formData.append("description", input.description);
        formData.append("website", input.website);
        formData.append("location", input.location);

        if (input.file) {
            formData.append("file", input.file);
        }

        try {

            setLoading(true);

            const res = await axios.put(
                `${COMPANY_API_END_POINT}/update/${params.id}`,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    },
                    withCredentials: true
                }
            );

            if (res.data.success) {

                toast.success(res.data.message);

                navigate("/admin/companies");
            }

        } catch (error) {

            console.log(error);

            toast.error(error.response.data.message);

        } finally {

            setLoading(false);
        }
    }

    // ================= LOAD COMPANY DATA =================

    useEffect(() => {

        setInput({
            name: singleCompany.name || "",
            description: singleCompany.description || "",
            website: singleCompany.website || "",
            location: singleCompany.location || "",
            file: singleCompany.file || null
        })

    }, [singleCompany]);

    return (

        <div className='
            min-h-screen
            bg-gradient-to-br
            from-[#f8fafc]
            via-[#faf5ff]
            to-[#eef2ff]
            relative
            overflow-hidden
        '>

            {/* ================= BACKGROUND GLOW ================= */}

            <div className='
                absolute
                top-[-120px]
                right-[-120px]
                h-[300px]
                w-[300px]
                bg-purple-400/20
                rounded-full
                blur-3xl
            '></div>

            <div className='
                absolute
                bottom-[-120px]
                left-[-120px]
                h-[250px]
                w-[250px]
                bg-pink-400/20
                rounded-full
                blur-3xl
            '></div>

            {/* ================= NAVBAR ================= */}

            <Navbar />

            {/* ================= PAGE ================= */}

            <div className='
                relative
                z-10
                max-w-7xl
                mx-auto
                px-4
                py-10
                grid
                grid-cols-1
                lg:grid-cols-2
                gap-10
                items-center
            '>

                {/* ================= LEFT SIDE ================= */}

                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >

                    {/* BADGE */}

                    <div className='
                        inline-flex
                        items-center
                        gap-2
                        px-4
                        py-2
                        rounded-full
                        bg-white
                        shadow-md
                        text-[#7209b7]
                        font-semibold
                        text-sm
                        mb-6
                    '>

                        <Sparkles size={14} />

                        Company Workspace

                    </div>

                    {/* HEADING */}

                    <h1 className='
                        text-4xl
                        md:text-5xl
                        font-extrabold
                        text-gray-900
                        leading-tight
                    '>

                        Upgrade Your

                        <span className='
                            bg-gradient-to-r
                            from-[#7209b7]
                            via-[#9333ea]
                            to-pink-500
                            bg-clip-text
                            text-transparent
                        '>

                            {" "}Company Profile

                        </span>

                    </h1>

                    <p className='
                        mt-5
                        text-lg
                        text-gray-600
                        leading-relaxed
                        max-w-xl
                    '>

                        Customize your company details,
                        upload your logo, and build
                        a premium hiring identity.

                    </p>

                    {/* FEATURES */}

                    <div className='
                        space-y-4
                        mt-8
                    '>

                        {/* FEATURE 1 */}

                        <div className='
                            flex
                            items-center
                            gap-4
                            bg-white/80
                            backdrop-blur-xl
                            border
                            border-gray-100
                            rounded-2xl
                            p-4
                            shadow-md
                        '>

                            <div className='
                                h-12
                                w-12
                                rounded-xl
                                bg-purple-100
                                flex
                                items-center
                                justify-center
                                text-[#7209b7]
                            '>

                                <ShieldCheck size={22} />

                            </div>

                            <div>

                                <h1 className='
                                    font-bold
                                    text-gray-900
                                '>

                                    Trusted Branding

                                </h1>

                                <p className='
                                    text-sm
                                    text-gray-500
                                '>

                                    Make your company profile professional.

                                </p>

                            </div>

                        </div>

                        {/* FEATURE 2 */}

                        <div className='
                            flex
                            items-center
                            gap-4
                            bg-white/80
                            backdrop-blur-xl
                            border
                            border-gray-100
                            rounded-2xl
                            p-4
                            shadow-md
                        '>

                            <div className='
                                h-12
                                w-12
                                rounded-xl
                                bg-pink-100
                                flex
                                items-center
                                justify-center
                                text-pink-500
                            '>

                                <Globe size={22} />

                            </div>

                            <div>

                                <h1 className='
                                    font-bold
                                    text-gray-900
                                '>

                                    Global Reach

                                </h1>

                                <p className='
                                    text-sm
                                    text-gray-500
                                '>

                                    Attract talent from around the world.

                                </p>

                            </div>

                        </div>

                        {/* FEATURE 3 */}

                        <div className='
                            flex
                            items-center
                            gap-4
                            bg-white/80
                            backdrop-blur-xl
                            border
                            border-gray-100
                            rounded-2xl
                            p-4
                            shadow-md
                        '>

                            <div className='
                                h-12
                                w-12
                                rounded-xl
                                bg-indigo-100
                                flex
                                items-center
                                justify-center
                                text-indigo-500
                            '>

                                <Rocket size={22} />

                            </div>

                            <div>

                                <h1 className='
                                    font-bold
                                    text-gray-900
                                '>

                                    Smart Hiring

                                </h1>

                                <p className='
                                    text-sm
                                    text-gray-500
                                '>

                                    Manage jobs and hiring efficiently.

                                </p>

                            </div>

                        </div>

                    </div>

                </motion.div>

                {/* ================= RIGHT CARD ================= */}

                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className='
                        relative
                        overflow-hidden
                        bg-white/90
                        backdrop-blur-2xl
                        border
                        border-white/50
                        shadow-2xl
                        rounded-[35px]
                        p-6
                        md:p-8
                    '
                >

                    {/* CARD GLOW */}

                    <div className='
                        absolute
                        top-[-70px]
                        right-[-70px]
                        h-[180px]
                        w-[180px]
                        bg-purple-300/20
                        rounded-full
                        blur-3xl
                    '></div>

                    <div className='relative z-10'>

                        {/* TOP */}

                        <div className='
                            flex
                            items-center
                            justify-between
                            mb-6
                        '>

                            <Button
                                onClick={() =>
                                    navigate("/admin/companies")
                                }
                                variant="outline"
                                className='
                                    rounded-xl
                                    border-gray-300
                                '
                            >

                                <ArrowLeft className='
                                    mr-2
                                    h-4
                                    w-4
                                ' />

                                Back

                            </Button>

                            <div className='
                                h-14
                                w-14
                                rounded-2xl
                                bg-gradient-to-br
                                from-[#7209b7]
                                to-pink-500
                                flex
                                items-center
                                justify-center
                                shadow-lg
                            '>

                                <Building2 className='
                                    h-7
                                    w-7
                                    text-white
                                ' />

                            </div>

                        </div>

                        {/* TITLE */}

                        <h1 className='
                            text-3xl
                            font-extrabold
                            text-gray-900
                        '>

                            Company Setup

                        </h1>

                        <p className='
                            mt-2
                            text-gray-500
                        '>

                            Update and manage your company information.

                        </p>

                        {/* FORM */}

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

                                {/* NAME */}

                                <div>

                                    <Label className='font-semibold'>
                                        Company Name
                                    </Label>

                                    <div className='relative mt-2'>

                                        <Building2 className='
                                            absolute
                                            left-4
                                            top-3.5
                                            h-4
                                            w-4
                                            text-gray-400
                                        ' />

                                        <Input
                                            type="text"
                                            name="name"
                                            value={input.name}
                                            onChange={changeEventHandler}
                                            className='
                                                h-12
                                                pl-11
                                                rounded-2xl
                                            '
                                        />

                                    </div>

                                </div>

                                {/* DESCRIPTION */}

                                <div>

                                    <Label className='font-semibold'>
                                        Description
                                    </Label>

                                    <Input
                                        type="text"
                                        name="description"
                                        value={input.description}
                                        onChange={changeEventHandler}
                                        className='
                                            h-12
                                            rounded-2xl
                                            mt-2
                                        '
                                    />

                                </div>

                                {/* WEBSITE */}

                                <div>

                                    <Label className='font-semibold'>
                                        Website
                                    </Label>

                                    <div className='relative mt-2'>

                                        <Globe className='
                                            absolute
                                            left-4
                                            top-3.5
                                            h-4
                                            w-4
                                            text-gray-400
                                        ' />

                                        <Input
                                            type="text"
                                            name="website"
                                            value={input.website}
                                            onChange={changeEventHandler}
                                            className='
                                                h-12
                                                pl-11
                                                rounded-2xl
                                            '
                                        />

                                    </div>

                                </div>

                                {/* LOCATION */}

                                <div>

                                    <Label className='font-semibold'>
                                        Location
                                    </Label>

                                    <div className='relative mt-2'>

                                        <MapPin className='
                                            absolute
                                            left-4
                                            top-3.5
                                            h-4
                                            w-4
                                            text-gray-400
                                        ' />

                                        <Input
                                            type="text"
                                            name="location"
                                            value={input.location}
                                            onChange={changeEventHandler}
                                            className='
                                                h-12
                                                pl-11
                                                rounded-2xl
                                            '
                                        />

                                    </div>

                                </div>

                                {/* FILE */}

                                <div className='md:col-span-2'>

                                    <Label className='font-semibold'>
                                        Company Logo
                                    </Label>

                                    <div className='
                                        mt-2
                                        border-2
                                        border-dashed
                                        border-purple-200
                                        rounded-2xl
                                        p-5
                                        bg-purple-50/50
                                    '>

                                        <div className='
                                            flex
                                            items-center
                                            gap-3
                                            mb-3
                                        '>

                                            <div className='
                                                h-12
                                                w-12
                                                rounded-xl
                                                bg-white
                                                flex
                                                items-center
                                                justify-center
                                                shadow-sm
                                            '>

                                                <FileImage className='
                                                    h-6
                                                    w-6
                                                    text-[#7209b7]
                                                ' />

                                            </div>

                                            <div>

                                                <h1 className='
                                                    font-semibold
                                                    text-gray-900
                                                '>

                                                    Upload Company Logo

                                                </h1>

                                                <p className='
                                                    text-sm
                                                    text-gray-500
                                                '>

                                                    PNG, JPG, SVG supported

                                                </p>

                                            </div>

                                        </div>

                                        <Input
                                            type="file"
                                            accept="image/*"
                                            onChange={changeFileHandler}
                                            className='
                                                rounded-xl
                                                bg-white
                                            '
                                        />

                                    </div>

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
                                                rounded-2xl
                                                bg-gradient-to-r
                                                from-[#7209b7]
                                                to-pink-500
                                            '
                                        >

                                            <Loader2 className='
                                                mr-2
                                                h-4
                                                w-4
                                                animate-spin
                                            ' />

                                            Updating Company...

                                        </Button>

                                    ) : (

                                        <Button
                                            type="submit"
                                            className='
                                                w-full
                                                h-12
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

                                            Save Changes

                                        </Button>

                                    )
                                }

                            </div>

                        </form>

                    </div>

                </motion.div>

            </div>

        </div>
    )
}

export default CompanySetup