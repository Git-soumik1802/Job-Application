import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import AdminJobsTable from './AdminJobsTable'
import useGetAllAdminJobs from '@/hooks/useGetAllAdminJobs'
import { setSearchJobByText } from '@/redux/jobSlice'

import {
  Search,
  BriefcaseBusiness,
  PlusCircle,
  Sparkles
} from 'lucide-react'

import { motion } from 'framer-motion'

const AdminJobs = () => {

  useGetAllAdminJobs();

  const [input, setInput] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearchJobByText(input));
  }, [input, dispatch]);

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

      <div className='max-w-7xl mx-auto px-4 py-10'>

        {/* ================= HERO SECTION ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className='
            relative
            overflow-hidden
            rounded-[32px]
            bg-white
            border
            border-gray-200
            shadow-xl
            p-8
            md:p-10
          '
        >

          {/* BACKGROUND EFFECTS */}

          <div className='
            absolute
            top-[-100px]
            right-[-80px]
            h-[250px]
            w-[250px]
            bg-purple-300/20
            rounded-full
            blur-3xl
          '></div>

          <div className='
            absolute
            bottom-[-80px]
            left-[-80px]
            h-[220px]
            w-[220px]
            bg-pink-300/20
            rounded-full
            blur-3xl
          '></div>

          <div className='relative z-10'>

            {/* TOP BADGE */}

            <div className='
              inline-flex
              items-center
              gap-2
              bg-purple-100
              text-[#7209b7]
              px-5
              py-2
              rounded-full
              font-semibold
              mb-6
            '>

              <Sparkles size={16} />

              Smart Hiring Dashboard

            </div>

            {/* HEADING */}

            <div className='
              flex
              flex-col
              lg:flex-row
              lg:items-center
              lg:justify-between
              gap-8
            '>

              <div>

                <h1 className='
                  text-4xl
                  md:text-5xl
                  font-extrabold
                  text-gray-900
                  leading-tight
                '>

                  Manage &
                  <span className='
                    bg-gradient-to-r
                    from-[#7209b7]
                    to-pink-500
                    bg-clip-text
                    text-transparent
                  '>
                    {" "}Track Jobs
                  </span>

                </h1>

                <p className='
                  mt-4
                  text-lg
                  text-gray-600
                  max-w-2xl
                '>

                  Search, filter, and manage all job postings
                  from one beautiful admin dashboard.

                </p>

              </div>

              {/* NEW JOB BUTTON */}

              <Button
                onClick={() => navigate("/admin/jobs/create")}
                className='
                  h-[56px]
                  px-8
                  rounded-2xl
                  text-base
                  font-semibold
                  bg-gradient-to-r
                  from-[#7209b7]
                  to-[#b5179e]
                  hover:opacity-90
                  shadow-lg
                '
              >

                <PlusCircle className='mr-2 h-5 w-5' />

                Post New Job

              </Button>

            </div>

            {/* SEARCH BAR */}

            <div className='mt-10'>

              <div className='
                flex
                items-center
                bg-white
                border
                border-gray-200
                rounded-2xl
                overflow-hidden
                shadow-lg
                max-w-2xl
              '>

                <div className='px-5 text-gray-400'>

                  <Search className='h-5 w-5' />

                </div>

                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder='Search by company, role, skills, location...'
                  className='
                    border-0
                    focus-visible:ring-0
                    focus-visible:ring-offset-0
                    h-[60px]
                    text-base
                    shadow-none
                  '
                />

              </div>

            </div>

            {/* STATS */}

            <div className='
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              gap-6
              mt-10
            '>

              {/* CARD 1 */}

              <div className='
                bg-[#faf5ff]
                border
                border-purple-100
                rounded-3xl
                p-6
                shadow-sm
              '>

                <div className='
                  h-14
                  w-14
                  rounded-2xl
                  bg-white
                  flex
                  items-center
                  justify-center
                  text-[#7209b7]
                  shadow-md
                '>

                  <BriefcaseBusiness size={28} />

                </div>

                <h2 className='
                  text-3xl
                  font-extrabold
                  text-gray-900
                  mt-5
                '>

                  Hiring Hub

                </h2>

                <p className='
                  mt-2
                  text-gray-600
                '>

                  Manage all your active job listings efficiently.

                </p>

              </div>

              {/* CARD 2 */}

              <div className='
                bg-[#fdf2f8]
                border
                border-pink-100
                rounded-3xl
                p-6
                shadow-sm
              '>

                <div className='
                  h-14
                  w-14
                  rounded-2xl
                  bg-white
                  flex
                  items-center
                  justify-center
                  text-pink-500
                  shadow-md
                '>

                  <Search size={28} />

                </div>

                <h2 className='
                  text-3xl
                  font-extrabold
                  text-gray-900
                  mt-5
                '>

                  Smart Search

                </h2>

                <p className='
                  mt-2
                  text-gray-600
                '>

                  Instantly find jobs by role, company, or skill.

                </p>

              </div>

              {/* CARD 3 */}

              <div className='
                bg-[#eef2ff]
                border
                border-indigo-100
                rounded-3xl
                p-6
                shadow-sm
              '>

                <div className='
                  h-14
                  w-14
                  rounded-2xl
                  bg-white
                  flex
                  items-center
                  justify-center
                  text-indigo-500
                  shadow-md
                '>

                  <Sparkles size={28} />

                </div>

                <h2 className='
                  text-3xl
                  font-extrabold
                  text-gray-900
                  mt-5
                '>

                  AI Ready UI

                </h2>

                <p className='
                  mt-2
                  text-gray-600
                '>

                  Modern responsive dashboard with premium experience.

                </p>

              </div>

            </div>

          </div>

        </motion.div>

        {/* ================= TABLE ================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className='mt-10'
        >

          <div className='
            bg-white
            rounded-[30px]
            border
            border-gray-200
            shadow-xl
            p-6
            overflow-x-auto
          '>

            <AdminJobsTable />

          </div>

        </motion.div>

      </div>

    </div>
  )
}

export default AdminJobs