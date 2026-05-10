import React, { useEffect } from 'react'

import Navbar from './shared/Navbar'

import HeroSection from './HeroSection'

import CategoryCarousel from './CategoryCarousel'

import LatestJobs from './LatestJobs'

import Footer from './shared/Footer'

import useGetAllJobs from '@/hooks/useGetAllJobs'

import { useSelector } from 'react-redux'

import { useNavigate } from 'react-router-dom'

import { motion } from 'framer-motion'

import {
  BriefcaseBusiness,
  Building2,
  ShieldCheck,
  Rocket
} from 'lucide-react'

const Home = () => {

  useGetAllJobs();

  const { user } = useSelector(store => store.auth);

  const navigate = useNavigate();

  // ================= REDIRECT RECRUITER =================

  useEffect(() => {

    if (user?.role === 'recruiter') {

      navigate("/admin/companies");

    }

  }, []);

  return (

    <div className='bg-[#fafafa] overflow-hidden'>

      {/* ================= NAVBAR ================= */}

      <Navbar />

      {/* ================= HERO ================= */}

      <HeroSection />

      {/* ================= FEATURES SECTION ================= */}

      <div className='max-w-7xl mx-auto px-4 py-20'>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-center mb-14'
        >

          <h1 className='
            text-4xl
            md:text-5xl
            font-extrabold
            text-gray-800
            leading-tight
          '>

            Build Your Future
            <span className='
              bg-gradient-to-r
              from-[#7209b7]
              to-pink-500
              bg-clip-text
              text-transparent
            '>
              {" "}With Confidence
            </span>

          </h1>

          <p className='
            text-gray-500
            mt-5
            text-lg
            max-w-3xl
            mx-auto
            leading-relaxed
          '>

            From internships to dream careers — NexHire connects talent with real opportunities that truly matter.

          </p>

        </motion.div>

        {/* ================= FEATURE CARDS ================= */}

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>

          {/* CARD 1 */}

          <motion.div
            whileHover={{ y: -10 }}
            className='
              group
              bg-white
              rounded-3xl
              p-8
              shadow-lg
              border
              border-gray-100
              hover:shadow-2xl
              transition-all
              duration-300
            '
          >

            <div className='
              h-16
              w-16
              bg-[#f3e8ff]
              rounded-2xl
              flex
              items-center
              justify-center
              text-[#7209b7]
              mb-5
              group-hover:scale-110
              transition-all
            '>

              <BriefcaseBusiness size={32} />

            </div>

            <h1 className='text-2xl font-bold text-gray-800'>
              50K+ Jobs
            </h1>

            <p className='
              text-gray-500
              mt-3
              leading-relaxed
            '>

              Find careers that match your passion, skills, and long-term goals.

            </p>

          </motion.div>

          {/* CARD 2 */}

          <motion.div
            whileHover={{ y: -10 }}
            className='
              group
              bg-white
              rounded-3xl
              p-8
              shadow-lg
              border
              border-gray-100
              hover:shadow-2xl
              transition-all
              duration-300
            '
          >

            <div className='
              h-16
              w-16
              bg-[#ede9fe]
              rounded-2xl
              flex
              items-center
              justify-center
              text-[#7209b7]
              mb-5
              group-hover:scale-110
              transition-all
            '>

              <Building2 size={32} />

            </div>

            <h1 className='text-2xl font-bold text-gray-800'>
              Top Companies
            </h1>

            <p className='
              text-gray-500
              mt-3
              leading-relaxed
            '>

              Connect with trusted brands and companies actively hiring top talent.

            </p>

          </motion.div>

          {/* CARD 3 */}

          <motion.div
            whileHover={{ y: -10 }}
            className='
              group
              bg-white
              rounded-3xl
              p-8
              shadow-lg
              border
              border-gray-100
              hover:shadow-2xl
              transition-all
              duration-300
            '
          >

            <div className='
              h-16
              w-16
              bg-[#f3e8ff]
              rounded-2xl
              flex
              items-center
              justify-center
              text-[#7209b7]
              mb-5
              group-hover:scale-110
              transition-all
            '>

              <ShieldCheck size={32} />

            </div>

            <h1 className='text-2xl font-bold text-gray-800'>
              Trusted Platform
            </h1>

            <p className='
              text-gray-500
              mt-3
              leading-relaxed
            '>

              Your applications stay secure with verified recruiters and authentic opportunities.

            </p>

          </motion.div>

          {/* CARD 4 */}

          <motion.div
            whileHover={{ y: -10 }}
            className='
              group
              bg-white
              rounded-3xl
              p-8
              shadow-lg
              border
              border-gray-100
              hover:shadow-2xl
              transition-all
              duration-300
            '
          >

            <div className='
              h-16
              w-16
              bg-[#ede9fe]
              rounded-2xl
              flex
              items-center
              justify-center
              text-[#7209b7]
              mb-5
              group-hover:scale-110
              transition-all
            '>

              <Rocket size={32} />

            </div>

            <h1 className='text-2xl font-bold text-gray-800'>
              Career Growth
            </h1>

            <p className='
              text-gray-500
              mt-3
              leading-relaxed
            '>

              Level up your career journey with smarter opportunities and faster growth.

            </p>

          </motion.div>

        </div>

      </div>

      {/* ================= CATEGORY SECTION ================= */}

      <CategoryCarousel />

      {/* ================= LATEST JOBS ================= */}

      <div className='
        bg-gradient-to-b
        from-white
        to-[#f9f5ff]
        py-20
      '>

        <div className='max-w-7xl mx-auto px-4'>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='text-center mb-14'
          >

            <h1 className='
              text-4xl
              md:text-5xl
              font-extrabold
              text-gray-800
              leading-tight
            '>

              Opportunities
              <span className='
                bg-gradient-to-r
                from-[#7209b7]
                to-pink-500
                bg-clip-text
                text-transparent
              '>
                {" "}You Shouldn’t Miss
              </span>

            </h1>

            <p className='
              text-gray-500
              mt-5
              text-lg
              max-w-3xl
              mx-auto
              leading-relaxed
            '>

              Explore handpicked roles from fast-growing startups and industry-leading companies.

            </p>

          </motion.div>

          <LatestJobs />

        </div>

      </div>

      {/* ================= FOOTER ================= */}

      <Footer />

    </div>
  )
}

export default Home