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
    AvatarFallback,
    AvatarImage
} from '../ui/avatar'

import {
    Popover,
    PopoverContent,
    PopoverTrigger
} from '../ui/popover'

import {
    Edit2,
    MoreHorizontal,
    Building2,
    CalendarDays,
    Sparkles
} from 'lucide-react'

import { useSelector } from 'react-redux'

import { useNavigate } from 'react-router-dom'

import { motion } from 'framer-motion'

const CompaniesTable = () => {

    const { companies, searchCompanyByText } =
        useSelector(store => store.company);

    const [filterCompany, setFilterCompany] =
        useState(companies);

    const navigate = useNavigate();

    // ================= FILTER COMPANY =================

    useEffect(() => {

        const filteredCompany =
            companies.length >= 0 &&
            companies.filter((company) => {

                if (!searchCompanyByText) {
                    return true;
                }

                return company?.name
                    ?.toLowerCase()
                    .includes(searchCompanyByText.toLowerCase());

            });

        setFilterCompany(filteredCompany);

    }, [companies, searchCompanyByText]);

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

                        Company Dashboard

                    </div>

                    <h1 className='
                        text-2xl
                        font-extrabold
                        text-gray-900
                    '>

                        Registered Companies

                    </h1>

                    <p className='
                        text-sm
                        text-gray-500
                        mt-1
                    '>

                        Manage all your registered hiring companies.

                    </p>

                </div>

                {/* TOTAL COUNT */}

                <div className='
                    hidden
                    md:flex
                    items-center
                    justify-center
                    px-5
                    py-3
                    rounded-2xl
                    bg-gradient-to-r
                    from-[#7209b7]
                    to-pink-500
                    shadow-lg
                    text-white
                    font-bold
                '>

                    {filterCompany?.length || 0} Companies

                </div>

            </div>

            {/* ================= TABLE ================= */}

            <div className='overflow-x-auto'>

                <Table>

                    <TableCaption className='
                        py-5
                        text-gray-500
                    '>

                        A list of your recently registered companies.

                    </TableCaption>

                    {/* ================= TABLE HEADER ================= */}

                    <TableHeader>

                        <TableRow className='bg-gray-50'>

                            <TableHead className='
                                font-bold
                                text-gray-700
                                py-4
                            '>

                                Company

                            </TableHead>

                            <TableHead className='
                                font-bold
                                text-gray-700
                            '>

                                Name

                            </TableHead>

                            <TableHead className='
                                font-bold
                                text-gray-700
                            '>

                                Created Date

                            </TableHead>

                            <TableHead className='
                                text-right
                                font-bold
                                text-gray-700
                            '>

                                Actions

                            </TableHead>

                        </TableRow>

                    </TableHeader>

                    {/* ================= TABLE BODY ================= */}

                    <TableBody>

                        {
                            filterCompany?.length <= 0 ? (

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

                                                No Companies Found

                                            </h1>

                                            <p className='
                                                text-gray-500
                                                mt-2
                                            '>

                                                Try searching with another name.

                                            </p>

                                        </div>

                                    </TableCell>

                                </TableRow>

                            ) : (

                                filterCompany?.map((company) => (

                                    <TableRow
                                        key={company._id}
                                        className='
                                            hover:bg-[#faf5ff]
                                            transition-all
                                            duration-200
                                        '
                                    >

                                        {/* ================= LOGO ================= */}

                                        <TableCell className='py-5'>

                                            <Avatar className='
                                                h-12
                                                w-12
                                                border
                                                border-gray-200
                                                shadow-sm
                                            '>

                                                <AvatarImage
                                                    src={company.logo}
                                                />

                                                <AvatarFallback>

                                                    <Building2 className='
                                                        h-5
                                                        w-5
                                                    ' />

                                                </AvatarFallback>

                                            </Avatar>

                                        </TableCell>

                                        {/* ================= NAME ================= */}

                                        <TableCell>

                                            <div>

                                                <h1 className='
                                                    font-semibold
                                                    text-gray-900
                                                '>

                                                    {company.name}

                                                </h1>

                                                <p className='
                                                    text-xs
                                                    text-gray-500
                                                    mt-1
                                                '>

                                                    Hiring Company

                                                </p>

                                            </div>

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
                                                    company?.createdAt
                                                        ?.split("T")[0]
                                                }

                                            </div>

                                        </TableCell>

                                        {/* ================= ACTION ================= */}

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
                                                    w-40
                                                    rounded-2xl
                                                    border
                                                    border-gray-200
                                                    shadow-xl
                                                    p-3
                                                '>

                                                    {/* EDIT */}

                                                    <div
                                                        onClick={() =>
                                                            navigate(`/admin/companies/${company._id}`)
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

                                                            Edit Company

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

export default CompaniesTable