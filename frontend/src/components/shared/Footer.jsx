import React, { useState } from 'react';

import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone
} from 'lucide-react';

// ================= LOGO =================
import logo from '@/assets/logo.png';

const Footer = () => {

  const [email, setEmail] = useState("");

  return (

    <footer className="
      relative
      mt-24
      overflow-hidden
      bg-gradient-to-r
      from-[#14002e]
      via-[#240046]
      to-[#3c096c]
      text-white
    ">

      {/* BACKGROUND EFFECTS */}

      <div className="
        absolute
        top-0
        left-0
        h-72
        w-72
        bg-purple-500/20
        rounded-full
        blur-3xl
      "></div>

      <div className="
        absolute
        bottom-0
        right-0
        h-72
        w-72
        bg-pink-500/10
        rounded-full
        blur-3xl
      "></div>

      {/* MAIN */}

      <div className="
        relative
        z-10
        max-w-7xl
        mx-auto
        px-6
        py-16
      ">

        <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-4
          gap-12
        ">

          {/* ================= LOGO SECTION ================= */}

          <div>

            <div className="flex items-center gap-3">

              {/* LOGO */}
              <div className="
                h-14
                w-14
                rounded-2xl
                overflow-hidden
                bg-white
                shadow-lg
              ">

                <img
                  src={logo}
                  alt="NexHire Logo"
                  className="
                    h-full
                    w-full
                    object-cover
                  "
                />

              </div>

              {/* TEXT */}
              <div>

                <h1 className="text-3xl font-extrabold">
                  NexHire
                </h1>

                <p className="text-sm text-gray-300">
                  Next Starts Here
                </p>

              </div>

            </div>

            <p className="
              mt-6
              text-gray-300
              leading-relaxed
              text-sm
            ">

              Discover thousands of opportunities and build your future with top companies around the world.

            </p>

          </div>

          {/* ================= WHY NEXHIRE ================= */}

          <div>

            <h1 className="text-xl font-bold mb-6">
              Why NexHire?
            </h1>

            <div className="space-y-5">

              <div className="
                bg-white/5
                border
                border-white/10
                rounded-2xl
                p-4
                backdrop-blur-xl
                hover:bg-white/10
                transition-all
              ">

                <h2 className="font-semibold text-white mb-1">
                  Smart Job Matching
                </h2>

                <p className="
                  text-sm
                  text-gray-300
                  leading-relaxed
                ">

                  Discover opportunities tailored to your skills and goals.

                </p>

              </div>

              <div className="
                bg-white/5
                border
                border-white/10
                rounded-2xl
                p-4
                backdrop-blur-xl
                hover:bg-white/10
                transition-all
              ">

                <h2 className="font-semibold text-white mb-1">
                  Trusted Companies
                </h2>

                <p className="
                  text-sm
                  text-gray-300
                  leading-relaxed
                ">

                  Apply to verified recruiters and leading global companies.

                </p>

              </div>

              <div className="
                bg-white/5
                border
                border-white/10
                rounded-2xl
                p-4
                backdrop-blur-xl
                hover:bg-white/10
                transition-all
              ">

                <h2 className="font-semibold text-white mb-1">
                  Career Growth
                </h2>

                <p className="
                  text-sm
                  text-gray-300
                  leading-relaxed
                ">

                  Build your future with internships, remote jobs, and full-time roles.

                </p>

              </div>

            </div>

          </div>

          {/* ================= CONTACT ================= */}

          <div>

            <h1 className="text-xl font-bold mb-6">
              Contact
            </h1>

            <div className="
              space-y-5
              text-gray-300
            ">

              <div>
                Bangalore, India
              </div>

              <div className="
                flex
                items-center
                gap-3
              ">

                <Mail className="
                  h-5
                  w-5
                  text-purple-300
                " />

                <p>
                  bnk.souvik2019@gmail.com
                </p>

              </div>

              <div className="
                flex
                items-center
                gap-3
              ">

                <Phone className="
                  h-5
                  w-5
                  text-purple-300
                " />

                <p>
                  6297462342
                </p>

              </div>

            </div>

          </div>

          {/* ================= NEWSLETTER ================= */}

          <div>

            <h1 className="text-xl font-bold mb-6">
              Stay Updated
            </h1>

            <p className="
              text-gray-300
              text-sm
              mb-5
            ">

              Subscribe to get the latest jobs and career tips.

            </p>

            <div className="
              flex
              items-center
              bg-white/10
              backdrop-blur-xl
              rounded-2xl
              overflow-hidden
              border
              border-white/10
            ">

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                className="
                  flex-1
                  bg-transparent
                  px-4
                  py-3
                  outline-none
                  text-white
                  placeholder:text-gray-300
                "
              />

              <button
                onClick={() => {

                  if (!email) {

                    alert("Please enter your email");

                    return;
                  }

                  alert(`Thanks for joining 🚀\n${email}`);

                  setEmail("");
                }}
                className="
                  bg-gradient-to-r
                  from-[#6A38C2]
                  to-purple-500
                  px-5
                  py-3
                  font-semibold
                  hover:opacity-90
                  transition-all
                "
              >
                Join
              </button>

            </div>

          </div>

        </div>

        {/* DIVIDER */}

        <div className="
          border-t
          border-white/10
          my-10
        "></div>

        {/* ================= BOTTOM ================= */}

        <div className="
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-5
        ">

          <p className="
            text-gray-400
            text-sm
            text-center
            md:text-left
          ">

            © 2026 NexHire. All rights reserved.

          </p>

          {/* SOCIAL ICONS */}

          <div className="
            flex
            items-center
            gap-4
          ">

            <a
              href="https://www.facebook.com/soumik.nandi.77377/"
              target="_blank"
              rel="noreferrer"
              className="
                h-11
                w-11
                rounded-full
                bg-white/10
                flex
                items-center
                justify-center
                hover:bg-[#1877F2]
                transition-all
                duration-300
                hover:scale-110
              "
            >
              <Facebook className="h-5 w-5" />
            </a>

            <a
              href="https://x.com/Soumik794899"
              target="_blank"
              rel="noreferrer"
              className="
                h-11
                w-11
                rounded-full
                bg-white/10
                flex
                items-center
                justify-center
                hover:bg-black
                transition-all
                duration-300
                hover:scale-110
              "
            >
              <Twitter className="h-5 w-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/soumik-nandi-b48a0922a"
              target="_blank"
              rel="noreferrer"
              className="
                h-11
                w-11
                rounded-full
                bg-white/10
                flex
                items-center
                justify-center
                hover:bg-[#0A66C2]
                transition-all
                duration-300
                hover:scale-110
              "
            >
              <Linkedin className="h-5 w-5" />
            </a>

            <a
              href="https://www.instagram.com/nandi_soumik1802/"
              target="_blank"
              rel="noreferrer"
              className="
                h-11
                w-11
                rounded-full
                bg-white/10
                flex
                items-center
                justify-center
                hover:bg-pink-500
                transition-all
                duration-300
                hover:scale-110
              "
            >
              <Instagram className="h-5 w-5" />
            </a>

          </div>

        </div>

      </div>

    </footer>
  )
}

export default Footer;