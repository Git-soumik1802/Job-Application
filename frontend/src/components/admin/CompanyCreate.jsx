import React, { useState } from 'react'

import Navbar from '../shared/Navbar'

import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

import { useNavigate } from 'react-router-dom'

import axios from 'axios'

import { COMPANY_API_END_POINT } from '@/utils/constant'

import { toast } from 'sonner'

import { useDispatch } from 'react-redux'

import { setSingleCompany } from '@/redux/companySlice'

import {
    Building2,
    Sparkles,
    ArrowRight,
    Rocket,
    ShieldCheck,
    Globe2,
    BriefcaseBusiness
} from 'lucide-react'

import { motion } from 'framer-motion'

const CompanyCreate = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const [companyName, setCompanyName] = useState("");

    // ================= REGISTER COMPANY =================

    const registerNewCompany = async () => {

        if (!companyName.trim()) {
            return toast.error("Please enter company name");
        }

        try {

            const res = await axios.post(
                `${COMPANY_API_END_POINT}/register`,
                { companyName },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    withCredentials: true
                }
            );

            if (res?.data?.success) {

                dispatch(setSingleCompany(res.data.company));

                toast.success(res.data.message);

                const companyId = res?.data?.company?._id;

                navigate(`/admin/companies/${companyId}`);
            }

        } catch (error) {

            toast.error(
                error?.response?.data?.message || "Something went wrong"
            );
        }
    }

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

            {/* ================= BACKGROUND EFFECTS ================= */}

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

                {/* ================= LEFT SECTION ================= */}

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

                        Build Your Hiring Brand

                    </div>

                    {/* HEADING */}

                    <h1 className='
                        text-4xl
                        md:text-5xl
                        font-extrabold
                        text-gray-900
                        leading-tight
                    '>

                        Create Your
                        <br />

                        <span className='
                            bg-gradient-to-r
                            from-[#7209b7]
                            via-[#9333ea]
                            to-pink-500
                            bg-clip-text
                            text-transparent
                        '>

                            Company Workspace

                        </span>

                    </h1>

                    <p className='
                        mt-5
                        text-lg
                        text-gray-600
                        leading-relaxed
                        max-w-xl
                    '>

                        Start building your hiring ecosystem,
                        post premium opportunities,
                        and connect with top talent worldwide.

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

                                    Trusted Company Profiles

                                </h1>

                                <p className='
                                    text-sm
                                    text-gray-500
                                '>

                                    Create a professional hiring identity.

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

                                <Globe2 size={22} />

                            </div>

                            <div>

                                <h1 className='
                                    font-bold
                                    text-gray-900
                                '>

                                    Reach Global Talent

                                </h1>

                                <p className='
                                    text-sm
                                    text-gray-500
                                '>

                                    Connect with skilled professionals instantly.

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

                                <BriefcaseBusiness size={22} />

                            </div>

                            <div>

                                <h1 className='
                                    font-bold
                                    text-gray-900
                                '>

                                    Smart Hiring Dashboard

                                </h1>

                                <p className='
                                    text-sm
                                    text-gray-500
                                '>

                                    Manage jobs and applicants seamlessly.

                                </p>

                            </div>

                        </div>

                    </div>

                </motion.div>

                {/* ================= RIGHT SECTION ================= */}

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

                        {/* ICON */}

                        <div className='
                            flex
                            items-center
                            justify-center
                            h-16
                            w-16
                            rounded-2xl
                            bg-gradient-to-br
                            from-[#7209b7]
                            to-pink-500
                            shadow-lg
                            mb-5
                        '>

                            <Rocket className='
                                h-8
                                w-8
                                text-white
                            ' />

                        </div>

                        {/* TITLE */}

                        <h1 className='
                            text-3xl
                            font-extrabold
                            text-gray-900
                        '>

                            Register Company

                        </h1>

                        <p className='
                            mt-2
                            text-gray-500
                        '>

                            Enter your company name to continue.

                        </p>

                        {/* INPUT */}

                        <div className='mt-8'>

                            <Label className='
                                text-sm
                                font-semibold
                                text-gray-700
                            '>

                                Company Name

                            </Label>

                            <div className='relative mt-2'>

                                <Building2 className='
                                    absolute
                                    left-4
                                    top-3.5
                                    text-gray-400
                                    h-4
                                    w-4
                                ' />

                                <Input
                                    type="text"
                                    value={companyName}
                                    placeholder="Google, Microsoft, NexHire..."
                                    onChange={(e) =>
                                        setCompanyName(e.target.value)
                                    }
                                    className='
                                        h-12
                                        pl-11
                                        rounded-2xl
                                        border-gray-200
                                        focus-visible:ring-[#7209b7]
                                        shadow-sm
                                    '
                                />

                            </div>

                            <p className='
                                mt-3
                                text-sm
                                text-gray-500
                            '>

                                You can edit your company details later.

                            </p>

                        </div>

                        {/* BUTTONS */}

                        <div className='
                            flex
                            items-center
                            justify-end
                            gap-3
                            mt-8
                        '>

                            <Button
                                variant="outline"
                                onClick={() =>
                                    navigate("/admin/companies")
                                }
                                className='
                                    h-11
                                    px-6
                                    rounded-2xl
                                    border-gray-300
                                    hover:bg-gray-100
                                '
                            >

                                Cancel

                            </Button>

                            <Button
                                onClick={registerNewCompany}
                                className='
                                    h-11
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

                                Continue

                                <ArrowRight className='
                                    ml-2
                                    h-4
                                    w-4
                                ' />

                            </Button>

                        </div>

                    </div>

                </motion.div>

            </div>

        </div>
    )
}

export default CompanyCreate