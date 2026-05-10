import React, { useEffect, useState } from 'react'

import Navbar from '../shared/Navbar'

import { Label } from '../ui/label'

import { Input } from '../ui/input'

import { RadioGroup } from '../ui/radio-group'

import { Button } from '../ui/button'

import { Link, useNavigate } from 'react-router-dom'

import axios from 'axios'

import { USER_API_END_POINT } from '@/utils/constant'

import { toast } from 'sonner'

import { useDispatch, useSelector } from 'react-redux'

import { setLoading } from '@/redux/authSlice'

import {
    Loader2,
    Mail,
    LockKeyhole,
    Phone,
    User
} from 'lucide-react'

// ================= LOGO =================
import logo from '@/assets/logo.png'

const Signup = () => {

    const [input, setInput] = useState({
        fullname: "",
        email: "",
        phoneNumber: "",
        password: "",
        role: ""
    });

    const { loading, user } = useSelector(store => store.auth);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    // ================= INPUT HANDLER =================
    const changeEventHandler = (e) => {

        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    }

    // ================= SUBMIT =================
    const submitHandler = async (e) => {

        e.preventDefault();

        try {

            dispatch(setLoading(true));

            const res = await axios.post(
                `${USER_API_END_POINT}/register`,
                input,
                {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    withCredentials: true
                }
            );

            if (res.data.success) {

                toast.success(res.data.message);

                navigate("/login");
            }

        } catch (error) {

            console.log(error);

            toast.error(
                error?.response?.data?.message || "Signup failed"
            );

        } finally {

            dispatch(setLoading(false));
        }
    }

    // ================= REDIRECT =================
    useEffect(() => {

        if (user) {

            navigate("/");
        }

    }, []);

    return (

        <div className='
            min-h-screen
            bg-gradient-to-br
            from-[#f5f3ff]
            via-white
            to-[#fdf2f8]
        '>

            <Navbar />

            <div className='
                flex
                items-center
                justify-center
                px-4
                py-8
            '>

                <div className='
                    w-full
                    max-w-4xl
                    grid
                    md:grid-cols-2
                    bg-white
                    rounded-[32px]
                    overflow-hidden
                    shadow-2xl
                    border
                    border-gray-100
                '>

                    {/* ================= LEFT SECTION ================= */}

                    <div className='
                        hidden
                        md:flex
                        flex-col
                        justify-center
                        bg-gradient-to-br
                        from-[#6d28d9]
                        via-[#9333ea]
                        to-[#ec4899]
                        text-white
                        p-8
                        relative
                        overflow-hidden
                    '>

                        {/* BG EFFECTS */}
                        <div className='
                            absolute
                            top-[-60px]
                            right-[-60px]
                            h-44
                            w-44
                            rounded-full
                            bg-white/10
                        '></div>

                        <div className='
                            absolute
                            bottom-[-70px]
                            left-[-70px]
                            h-52
                            w-52
                            rounded-full
                            bg-white/10
                        '></div>

                        <div className='relative z-10'>

                            {/* LOGO */}
                            <div className='flex items-center gap-3 mb-8'>

                                <div className='
                                    h-14
                                    w-14
                                    rounded-2xl
                                    overflow-hidden
                                    bg-white
                                    shadow-lg
                                '>

                                    <img
                                        src={logo}
                                        alt="NexHire Logo"
                                        className='
                                            h-full
                                            w-full
                                            object-cover
                                        '
                                    />

                                </div>

                                <div>

                                    <h1 className='
                                        text-3xl
                                        font-extrabold
                                        leading-none
                                    '>

                                        NexHire

                                    </h1>

                                    <p className='
                                        text-sm
                                        text-white/80
                                        mt-1
                                    '>

                                        Next Starts Here

                                    </p>

                                </div>

                            </div>

                            {/* TITLE */}
                            <h1 className='
                                text-3xl
                                font-extrabold
                                leading-tight
                            '>

                                Create Your
                                <br />
                                Dream Career

                            </h1>

                            {/* DESCRIPTION */}
                            <p className='
                                mt-5
                                text-sm
                                text-white/80
                                leading-relaxed
                                max-w-sm
                            '>

                                Join NexHire and unlock thousands of opportunities from top companies.

                            </p>

                        </div>

                    </div>

                    {/* ================= RIGHT SECTION ================= */}

                    <div className='p-8 md:p-10'>

                        <form onSubmit={submitHandler}>

                            {/* HEADER */}
                            <div className='mb-7'>

                                <h1 className='
                                    text-3xl
                                    font-extrabold
                                    text-gray-900
                                '>

                                    Create Account

                                </h1>

                                <p className='
                                    text-gray-500
                                    mt-2
                                '>

                                    Start your journey with NexHire

                                </p>

                            </div>

                            {/* FULLNAME */}
                            <div className='mb-4'>

                                <Label className="text-gray-700 font-medium">
                                    Full Name
                                </Label>

                                <div className='relative mt-2'>

                                    <User className='
                                        absolute
                                        left-4
                                        top-1/2
                                        -translate-y-1/2
                                        text-gray-400
                                        h-5
                                        w-5
                                    ' />

                                    <Input
                                        type="text"
                                        value={input.fullname}
                                        name="fullname"
                                        onChange={changeEventHandler}
                                        placeholder="Enter your fullname"
                                        className='
                                            pl-12
                                            h-12
                                            rounded-xl
                                            border-gray-200
                                            focus-visible:ring-[#9333ea]
                                        '
                                    />

                                </div>

                            </div>

                            {/* EMAIL */}
                            <div className='mb-4'>

                                <Label className="text-gray-700 font-medium">
                                    Email
                                </Label>

                                <div className='relative mt-2'>

                                    <Mail className='
                                        absolute
                                        left-4
                                        top-1/2
                                        -translate-y-1/2
                                        text-gray-400
                                        h-5
                                        w-5
                                    ' />

                                    <Input
                                        type="email"
                                        value={input.email}
                                        name="email"
                                        onChange={changeEventHandler}
                                        placeholder="Enter your email"
                                        className='
                                            pl-12
                                            h-12
                                            rounded-xl
                                            border-gray-200
                                            focus-visible:ring-[#9333ea]
                                        '
                                    />

                                </div>

                            </div>

                            {/* PHONE */}
                            <div className='mb-4'>

                                <Label className="text-gray-700 font-medium">
                                    Phone Number
                                </Label>

                                <div className='relative mt-2'>

                                    <Phone className='
                                        absolute
                                        left-4
                                        top-1/2
                                        -translate-y-1/2
                                        text-gray-400
                                        h-5
                                        w-5
                                    ' />

                                    <Input
                                        type="text"
                                        value={input.phoneNumber}
                                        name="phoneNumber"
                                        onChange={changeEventHandler}
                                        placeholder="Enter phone number"
                                        className='
                                            pl-12
                                            h-12
                                            rounded-xl
                                            border-gray-200
                                            focus-visible:ring-[#9333ea]
                                        '
                                    />

                                </div>

                            </div>

                            {/* PASSWORD */}
                            <div className='mb-4'>

                                <Label className="text-gray-700 font-medium">
                                    Password
                                </Label>

                                <div className='relative mt-2'>

                                    <LockKeyhole className='
                                        absolute
                                        left-4
                                        top-1/2
                                        -translate-y-1/2
                                        text-gray-400
                                        h-5
                                        w-5
                                    ' />

                                    <Input
                                        type="password"
                                        value={input.password}
                                        name="password"
                                        onChange={changeEventHandler}
                                        placeholder="Enter password"
                                        className='
                                            pl-12
                                            h-12
                                            rounded-xl
                                            border-gray-200
                                            focus-visible:ring-[#9333ea]
                                        '
                                    />

                                </div>

                            </div>

                            {/* ROLE */}
                            <div className='mb-5'>

                                <Label className="text-gray-700 font-medium">
                                    Select Role
                                </Label>

                                <RadioGroup className="flex gap-3 mt-3">

                                    {/* STUDENT */}
                                    <label className={`
                                        flex
                                        items-center
                                        gap-3
                                        border
                                        rounded-xl
                                        px-4
                                        py-3
                                        cursor-pointer
                                        transition-all
                                        w-full
                                        ${input.role === "student"
                                            ? "border-[#9333ea] bg-[#f5f3ff]"
                                            : "border-gray-200"}
                                    `}>

                                        <Input
                                            type="radio"
                                            name="role"
                                            value="student"
                                            checked={input.role === 'student'}
                                            onChange={changeEventHandler}
                                            className="w-4 h-4"
                                        />

                                        <span className='font-medium text-sm'>
                                            Student
                                        </span>

                                    </label>

                                    {/* RECRUITER */}
                                    <label className={`
                                        flex
                                        items-center
                                        gap-3
                                        border
                                        rounded-xl
                                        px-4
                                        py-3
                                        cursor-pointer
                                        transition-all
                                        w-full
                                        ${input.role === "recruiter"
                                            ? "border-[#9333ea] bg-[#f5f3ff]"
                                            : "border-gray-200"}
                                    `}>

                                        <Input
                                            type="radio"
                                            name="role"
                                            value="recruiter"
                                            checked={input.role === 'recruiter'}
                                            onChange={changeEventHandler}
                                            className="w-4 h-4"
                                        />

                                        <span className='font-medium text-sm'>
                                            Recruiter
                                        </span>

                                    </label>

                                </RadioGroup>

                            </div>

                            {/* BUTTON */}
                            {
                                loading ? (

                                    <Button
                                        className='
                                            w-full
                                            h-12
                                            rounded-xl
                                            text-base
                                            bg-gradient-to-r
                                            from-[#6d28d9]
                                            to-[#d946ef]
                                        '
                                    >

                                        <Loader2 className='
                                            mr-2
                                            h-4
                                            w-4
                                            animate-spin
                                        ' />

                                        Please wait

                                    </Button>

                                ) : (

                                    <Button
                                        type="submit"
                                        className='
                                            w-full
                                            h-12
                                            rounded-xl
                                            text-base
                                            font-semibold
                                            bg-gradient-to-r
                                            from-[#6d28d9]
                                            to-[#d946ef]
                                            hover:opacity-90
                                            shadow-lg
                                            shadow-purple-300
                                        '
                                    >

                                        Create Account

                                    </Button>

                                )
                            }

                            {/* FOOTER */}
                            <p className='
                                text-center
                                text-gray-600
                                mt-5
                                text-sm
                            '>

                                Already have an account?

                                <Link
                                    to="/login"
                                    className='
                                        text-[#9333ea]
                                        font-semibold
                                        ml-2
                                        hover:underline
                                    '
                                >
                                    Login
                                </Link>

                            </p>

                        </form>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Signup