import React, { useEffect, useState } from 'react'

import {
    RadioGroup,
    RadioGroupItem
} from './ui/radio-group'

import { Label } from './ui/label'

import { useDispatch } from 'react-redux'

import { setSearchedQuery } from '@/redux/jobSlice'

import {
    MapPin,
    BriefcaseBusiness,
    IndianRupee,
    Filter
} from 'lucide-react'

// ================= FILTER DATA =================

const filterData = [

    {
        filterType: "Location",

        icon: <MapPin size={18} />,

        array: [
            "Delhi NCR",
            "Bangalore",
            "Hyderabad",
            "Pune",
            "Mumbai",
            "Chennai",
            "Kolkata"
        ]
    },

    {
        filterType: "Industry",

        icon: <BriefcaseBusiness size={18} />,

        array: [
            "Frontend Developer",
            "Backend Developer",
            "Full Stack Developer",
            "Data Science",
            "Graphic Designer",
            "HR Executive",
            "Digital Marketing"
        ]
    },

    {
        filterType: "Salary",

        icon: <IndianRupee size={18} />,

        array: [
            "0-40k",
            "40k-1lakh",
            "1lakh-5lakh",
            "5lakh-10lakh",
            "10lakh+"
        ]
    }
]

const FilterCard = () => {

    const [selectedValue, setSelectedValue] = useState('');

    const dispatch = useDispatch();

    // ================= HANDLE CHANGE =================

    const changeHandler = (value) => {

        setSelectedValue(value);
    }

    // ================= SEARCH QUERY =================

    useEffect(() => {

        dispatch(setSearchedQuery(selectedValue));

    }, [selectedValue]);

    return (

        <div className='
            w-full
            bg-white
            rounded-3xl
            shadow-xl
            border
            border-gray-100
            overflow-hidden
            sticky
            top-24
        '>

            {/* ================= HEADER ================= */}

            <div className='
                bg-gradient-to-r
                from-[#7209b7]
                to-[#9d4edd]
                p-5
                text-white
            '>

                <div className='flex items-center gap-3'>

                    <div className='bg-white/20 p-2 rounded-xl'>
                        <Filter size={22} />
                    </div>

                    <div>

                        <h1 className='text-xl font-bold'>
                            Filter Jobs
                        </h1>

                        <p className='text-sm text-gray-100 mt-1'>
                            Find jobs that match your preference
                        </p>

                    </div>

                </div>

            </div>

            {/* ================= FILTER OPTIONS ================= */}

            <div className='p-5'>

                <RadioGroup
                    value={selectedValue}
                    onValueChange={changeHandler}
                >

                    {
                        filterData.map((data, index) => (

                            <div
                                key={index}
                                className='mb-8'
                            >

                                {/* TITLE */}

                                <div className='flex items-center gap-2 mb-4'>

                                    <div className='text-[#7209b7]'>
                                        {data.icon}
                                    </div>

                                    <h1 className='font-bold text-lg text-gray-800'>
                                        {data.filterType}
                                    </h1>

                                </div>

                                {/* OPTIONS */}

                                <div className='space-y-3'>

                                    {
                                        data.array.map((item, idx) => {

                                            const itemId = `id${index}-${idx}`;

                                            return (

                                                <div
                                                    key={itemId}
                                                    className='
                                                        flex
                                                        items-center
                                                        space-x-3
                                                        bg-[#faf7ff]
                                                        hover:bg-[#f3e8ff]
                                                        px-4
                                                        py-3
                                                        rounded-2xl
                                                        transition-all
                                                        duration-300
                                                        cursor-pointer
                                                    '
                                                >

                                                    <RadioGroupItem
                                                        value={item}
                                                        id={itemId}
                                                        className='border-[#7209b7]'
                                                    />

                                                    <Label
                                                        htmlFor={itemId}
                                                        className='
                                                            text-gray-700
                                                            cursor-pointer
                                                            font-medium
                                                            w-full
                                                        '
                                                    >
                                                        {item}
                                                    </Label>

                                                </div>

                                            )
                                        })
                                    }

                                </div>

                            </div>

                        ))
                    }

                </RadioGroup>

                {/* ================= CLEAR FILTER ================= */}

                <button
                    onClick={() => setSelectedValue("")}
                    className='
                        w-full
                        mt-3
                        bg-[#7209b7]
                        hover:bg-[#5f32ad]
                        text-white
                        py-3
                        rounded-2xl
                        font-semibold
                        transition-all
                    '
                >

                    Clear Filters

                </button>

            </div>

        </div>
    )
}

export default FilterCard