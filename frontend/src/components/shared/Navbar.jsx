import React from 'react'

import {
    Popover,
    PopoverContent,
    PopoverTrigger
} from '../ui/popover'

import { Button } from '../ui/button'

import { Avatar, AvatarImage } from '../ui/avatar'

import {
    LogOut,
    User2,
    Sparkles
} from 'lucide-react'

import {
    Link,
    NavLink,
    useNavigate
} from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'

import axios from 'axios'

import { USER_API_END_POINT } from '@/utils/constant'

import { setUser } from '@/redux/authSlice'

import { toast } from 'sonner'

// ================= LOGO =================
import logo from '@/assets/logo.png'

const Navbar = () => {

    const { user } = useSelector(store => store.auth);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    // ================= LOGOUT =================
    const logoutHandler = async () => {

        try {

            const res = await axios.get(
                `${USER_API_END_POINT}/logout`,
                {
                    withCredentials: true
                }
            );

            if (res.data.success) {

                dispatch(setUser(null));

                navigate("/");

                toast.success(res.data.message);
            }

        } catch (error) {

            console.log(error);

            toast.error(
                error?.response?.data?.message || "Logout failed"
            );
        }
    };

    return (

        <div className='
            sticky
            top-0
            z-50
            backdrop-blur-xl
            bg-white/90
            border-b
            border-gray-100
            shadow-sm
        '>

            <div className='
                max-w-7xl
                mx-auto
                px-5
                h-24
                flex
                items-center
                justify-between
            '>

                {/* ================= LOGO ================= */}

                <Link
                    to="/"
                    className='flex items-center gap-4 group'
                >

                    {/* LOGO IMAGE */}
                    <div className='
                        h-16
                        w-16
                        rounded-2xl
                        overflow-hidden
                        shadow-lg
                        shadow-purple-200
                        group-hover:scale-105
                        transition-all
                        duration-300
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

                    {/* TEXT */}
                    <div>

                        <h1 className='
                            text-5xl
                            font-extrabold
                            leading-none
                            tracking-tight
                        '>

                            <span className='text-[#111827]'>
                                Nex
                            </span>

                            <span className='
                                bg-gradient-to-r
                                from-[#6d28d9]
                                to-[#d946ef]
                                bg-clip-text
                                text-transparent
                            '>
                                Hire
                            </span>

                        </h1>

                        <p className='
                            text-gray-500
                            text-sm
                            font-medium
                            mt-1
                            tracking-wide
                        '>

                            Next Starts Here

                        </p>

                    </div>

                </Link>

                {/* ================= NAVIGATION ================= */}

                <ul className='
                    hidden
                    md:flex
                    items-center
                    gap-10
                    text-[18px]
                    font-semibold
                '>

                    {
                        user && user.role === 'recruiter' ? (
                            <>
                                <li>

                                    <NavLink
                                        to="/admin/companies"
                                        className={({ isActive }) =>
                                            `
                                            relative
                                            transition-all
                                            duration-300
                                            ${
                                                isActive
                                                    ? "text-[#6d28d9]"
                                                    : "text-gray-700 hover:text-[#6d28d9]"
                                            }
                                            `
                                        }
                                    >
                                        {({ isActive }) => (
                                            <>
                                                Companies

                                                {
                                                    isActive && (
                                                        <span className='
                                                            absolute
                                                            left-0
                                                            -bottom-2
                                                            w-full
                                                            h-[3px]
                                                            rounded-full
                                                            bg-gradient-to-r
                                                            from-[#8b5cf6]
                                                            to-pink-500
                                                        '></span>
                                                    )
                                                }
                                            </>
                                        )}
                                    </NavLink>

                                </li>

                                <li>

                                    <NavLink
                                        to="/admin/jobs"
                                        className={({ isActive }) =>
                                            `
                                            relative
                                            transition-all
                                            duration-300
                                            ${
                                                isActive
                                                    ? "text-[#6d28d9]"
                                                    : "text-gray-700 hover:text-[#6d28d9]"
                                            }
                                            `
                                        }
                                    >
                                        {({ isActive }) => (
                                            <>
                                                Jobs

                                                {
                                                    isActive && (
                                                        <span className='
                                                            absolute
                                                            left-0
                                                            -bottom-2
                                                            w-full
                                                            h-[3px]
                                                            rounded-full
                                                            bg-gradient-to-r
                                                            from-[#8b5cf6]
                                                            to-pink-500
                                                        '></span>
                                                    )
                                                }
                                            </>
                                        )}
                                    </NavLink>

                                </li>
                            </>
                        ) : (
                            <>
                                <li>

                                    <NavLink
                                        to="/"
                                        className={({ isActive }) =>
                                            `
                                            relative
                                            transition-all
                                            duration-300
                                            ${
                                                isActive
                                                    ? "text-[#6d28d9]"
                                                    : "text-gray-700 hover:text-[#6d28d9]"
                                            }
                                            `
                                        }
                                    >
                                        {({ isActive }) => (
                                            <>
                                                Home

                                                {
                                                    isActive && (
                                                        <span className='
                                                            absolute
                                                            left-0
                                                            -bottom-2
                                                            w-full
                                                            h-[3px]
                                                            rounded-full
                                                            bg-gradient-to-r
                                                            from-[#8b5cf6]
                                                            to-pink-500
                                                        '></span>
                                                    )
                                                }
                                            </>
                                        )}
                                    </NavLink>

                                </li>

                                <li>

                                    <NavLink
                                        to="/jobs"
                                        className={({ isActive }) =>
                                            `
                                            relative
                                            transition-all
                                            duration-300
                                            ${
                                                isActive
                                                    ? "text-[#6d28d9]"
                                                    : "text-gray-700 hover:text-[#6d28d9]"
                                            }
                                            `
                                        }
                                    >
                                        {({ isActive }) => (
                                            <>
                                                Jobs

                                                {
                                                    isActive && (
                                                        <span className='
                                                            absolute
                                                            left-0
                                                            -bottom-2
                                                            w-full
                                                            h-[3px]
                                                            rounded-full
                                                            bg-gradient-to-r
                                                            from-[#8b5cf6]
                                                            to-pink-500
                                                        '></span>
                                                    )
                                                }
                                            </>
                                        )}
                                    </NavLink>

                                </li>

                                <li>

                                    <NavLink
                                        to="/browse"
                                        className={({ isActive }) =>
                                            `
                                            relative
                                            transition-all
                                            duration-300
                                            ${
                                                isActive
                                                    ? "text-[#6d28d9]"
                                                    : "text-gray-700 hover:text-[#6d28d9]"
                                            }
                                            `
                                        }
                                    >
                                        {({ isActive }) => (
                                            <>
                                                Browse

                                                {
                                                    isActive && (
                                                        <span className='
                                                            absolute
                                                            left-0
                                                            -bottom-2
                                                            w-full
                                                            h-[3px]
                                                            rounded-full
                                                            bg-gradient-to-r
                                                            from-[#8b5cf6]
                                                            to-pink-500
                                                        '></span>
                                                    )
                                                }
                                            </>
                                        )}
                                    </NavLink>

                                </li>
                            </>
                        )
                    }

                </ul>

                {/* ================= AUTH SECTION ================= */}

                {
                    !user ? (

                        <div className='flex items-center gap-5'>

                            {/* LOGIN */}
                            <Link to="/login">

                                <Button
                                    variant="outline"
                                    className='
                                        h-14
                                        px-10
                                        rounded-2xl
                                        border
                                        border-gray-200
                                        text-xl
                                        font-semibold
                                        bg-white
                                        hover:bg-gray-50
                                    '
                                >
                                    Login
                                </Button>

                            </Link>

                            {/* SIGNUP */}
                            <Link to="/signup">

                                <Button
                                    className='
                                        h-14
                                        px-10
                                        rounded-2xl
                                        text-xl
                                        font-semibold
                                        bg-gradient-to-r
                                        from-[#6d28d9]
                                        to-[#d946ef]
                                        hover:opacity-90
                                        shadow-lg
                                        shadow-purple-300
                                    '
                                >

                                    <Sparkles className='mr-2 h-5 w-5' />

                                    Sign Up

                                </Button>

                            </Link>

                        </div>

                    ) : (

                        <Popover>

                            <PopoverTrigger asChild>

                                <div className='relative cursor-pointer'>

                                    <Avatar className='
                                        h-14
                                        w-14
                                        border-2
                                        border-[#7c3aed]
                                        shadow-lg
                                    '>

                                        <AvatarImage
                                            src={
                                                user?.profile?.profilePhoto ||
                                                "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                                            }
                                        />

                                    </Avatar>

                                    <div className='
                                        absolute
                                        bottom-0
                                        right-0
                                        h-4
                                        w-4
                                        rounded-full
                                        bg-green-500
                                        border-2
                                        border-white
                                    '></div>

                                </div>

                            </PopoverTrigger>

                            <PopoverContent
                                className='
                                    w-80
                                    rounded-3xl
                                    border-none
                                    shadow-2xl
                                    p-0
                                    overflow-hidden
                                '
                            >

                                {/* TOP */}
                                <div className='
                                    bg-gradient-to-r
                                    from-[#6d28d9]
                                    to-[#d946ef]
                                    p-6
                                    text-white
                                '>

                                    <div className='flex items-center gap-4'>

                                        <Avatar className='
                                            h-16
                                            w-16
                                            border-4
                                            border-white
                                        '>

                                            <AvatarImage
                                                src={
                                                    user?.profile?.profilePhoto ||
                                                    "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                                                }
                                            />

                                        </Avatar>

                                        <div>

                                            <h1 className='
                                                text-xl
                                                font-bold
                                            '>
                                                {user?.fullname}
                                            </h1>

                                            <p className='
                                                text-sm
                                                text-white/80
                                                mt-1
                                            '>
                                                {
                                                    user?.profile?.bio ||
                                                    "Welcome to NexHire"
                                                }
                                            </p>

                                        </div>

                                    </div>

                                </div>

                                {/* MENU */}
                                <div className='p-4'>

                                    {
                                        user?.role === 'student' && (

                                            <Link
                                                to="/profile"
                                                className='
                                                    flex
                                                    items-center
                                                    gap-3
                                                    p-4
                                                    rounded-2xl
                                                    hover:bg-[#f5f0ff]
                                                    transition-all
                                                '
                                            >

                                                <div className='
                                                    h-10
                                                    w-10
                                                    rounded-xl
                                                    bg-[#f3e8ff]
                                                    flex
                                                    items-center
                                                    justify-center
                                                    text-[#7e22ce]
                                                '>

                                                    <User2 size={18} />

                                                </div>

                                                <div>

                                                    <h1 className='font-semibold'>
                                                        View Profile
                                                    </h1>

                                                    <p className='text-sm text-gray-500'>
                                                        Manage account
                                                    </p>

                                                </div>

                                            </Link>

                                        )
                                    }

                                    {/* LOGOUT */}
                                    <div
                                        onClick={logoutHandler}
                                        className='
                                            flex
                                            items-center
                                            gap-3
                                            p-4
                                            rounded-2xl
                                            hover:bg-red-50
                                            transition-all
                                            cursor-pointer
                                            mt-2
                                        '

                                    >

                                        <div className='
                                            h-10
                                            w-10
                                            rounded-xl
                                            bg-red-100
                                            flex
                                            items-center
                                            justify-center
                                            text-red-500
                                        '>

                                            <LogOut size={18} />

                                        </div>

                                        <div>

                                            <h1 className='font-semibold'>
                                                Logout
                                            </h1>

                                            <p className='text-sm text-gray-500'>
                                                Sign out account
                                            </p>

                                        </div>

                                    </div>

                                </div>

                            </PopoverContent>

                        </Popover>

                    )
                }

            </div>

        </div>
    )
}

export default Navbar