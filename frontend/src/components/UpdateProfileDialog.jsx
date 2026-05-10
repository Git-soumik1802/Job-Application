import React, { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
} from "./ui/dialog";

import { Input } from "./ui/input";

import { Button } from "./ui/button";

import { Label } from "./ui/label";

import {
  Loader2,
  Upload,
  User,
  Mail,
  Phone,
  Pencil,
} from "lucide-react";

import { useDispatch, useSelector } from "react-redux";

import axios from "axios";

import { USER_API_END_POINT } from "@/utils/constant";

import { setUser } from "@/redux/authSlice";

import { toast } from "sonner";

const UpdateProfileDialog = ({ open, setOpen }) => {

  const { user } = useSelector((store) => store.auth);

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const [input, setInput] = useState({
    fullname: user?.fullname || "",
    email: user?.email || "",
    phoneNumber: user?.phoneNumber || "",
    bio: user?.profile?.bio || "",
    skills: user?.profile?.skills?.join(", ") || "",
    file: null,
  });

  // ================= INPUT CHANGE =================

  const changeEventHandler = (e) => {

    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  // ================= FILE CHANGE =================

  const fileChangeHandler = (e) => {

    setInput({
      ...input,
      file: e.target.files?.[0],
    });
  };

  // ================= SUBMIT =================

  const submitHandler = async (e) => {

    e.preventDefault();

    const formData = new FormData();

    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("bio", input.bio);
    formData.append("skills", input.skills);

    if (input.file) {
      formData.append("file", input.file);
    }

    try {

      setLoading(true);

      const res = await axios.post(
        `${USER_API_END_POINT}/profile/update`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );

      if (res.data.success) {

        dispatch(setUser(res.data.user));

        toast.success(res.data.message);

        setOpen(false);
      }

    } catch (error) {

      console.log(error);

      toast.error(
        error?.response?.data?.message || "Update failed"
      );

    } finally {

      setLoading(false);
    }
  };

  return (

    <Dialog open={open} onOpenChange={setOpen}>

      <DialogContent
        className="
          sm:max-w-[760px]
          rounded-[32px]
          border
          border-white/20
          overflow-hidden
          p-0
          bg-white/80
          backdrop-blur-2xl
          shadow-[0_20px_80px_rgba(0,0,0,0.15)]
        "
      >

        {/* ================= HEADER ================= */}

        <div
          className="
            relative
            overflow-hidden
            bg-gradient-to-r
            from-[#6A38C2]
            via-[#7c3aed]
            to-pink-500
            px-8
            py-7
            text-white
          "
        >

          {/* GLOW */}

          <div
            className="
              absolute
              top-[-60px]
              right-[-60px]
              h-[180px]
              w-[180px]
              bg-white/10
              rounded-full
              blur-3xl
            "
          />

          <div className="relative z-10">

            {/* BADGE */}

            <div
              className="
                inline-flex
                items-center
                gap-2
                px-4
                py-2
                rounded-full
                bg-white/15
                backdrop-blur-md
                text-sm
                font-semibold
                mb-4
              "
            >

              ✨ Premium Profile

            </div>

            <DialogTitle className="text-3xl font-extrabold">

              Update Your Profile

            </DialogTitle>

            <p className="text-white/80 mt-2 text-sm">

              Keep your profile updated for better opportunities.

            </p>

          </div>

        </div>

        {/* ================= FORM ================= */}

        <form onSubmit={submitHandler} className="p-8">

          {/* ================= PROFILE PREVIEW ================= */}

          <div
            className="
              flex
              items-center
              gap-5
              mb-8
              p-5
              rounded-3xl
              bg-gradient-to-r
              from-purple-50
              to-pink-50
              border
              border-purple-100
            "
          >

            {/* IMAGE */}

            <div
              className="
                h-20
                w-20
                rounded-3xl
                overflow-hidden
                border-4
                border-white
                shadow-lg
              "
            >

              <img
                src={
                  user?.profile?.profilePhoto ||
                  "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                }
                alt=""
                className="h-full w-full object-cover"
              />

            </div>

            {/* DETAILS */}

            <div>

              <h1 className="text-2xl font-bold text-gray-900">

                {input.fullname || "Your Name"}

              </h1>

              <p className="text-gray-500 mt-1">

                {input.email || "your@email.com"}

              </p>

              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-3
                  py-1
                  rounded-full
                  bg-green-100
                  text-green-700
                  text-xs
                  font-semibold
                  mt-3
                "
              >

                🟢 Profile Active

              </div>

            </div>

          </div>

          {/* ================= GRID ================= */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* FULL NAME */}

            <div>

              <Label className="mb-2 flex items-center gap-2 font-semibold">

                <User className="h-4 w-4 text-[#6A38C2]" />

                Full Name

              </Label>

              <Input
                type="text"
                name="fullname"
                value={input.fullname}
                onChange={changeEventHandler}
                placeholder="Enter fullname"
                className="
                  h-12
                  rounded-2xl
                  border-gray-200
                  bg-white
                  focus-visible:ring-[#6A38C2]
                  shadow-sm
                "
              />

            </div>

            {/* EMAIL */}

            <div>

              <Label className="mb-2 flex items-center gap-2 font-semibold">

                <Mail className="h-4 w-4 text-[#6A38C2]" />

                Email

              </Label>

              <Input
                type="email"
                name="email"
                value={input.email}
                onChange={changeEventHandler}
                placeholder="Enter email"
                className="
                  h-12
                  rounded-2xl
                  border-gray-200
                  bg-white
                  focus-visible:ring-[#6A38C2]
                  shadow-sm
                "
              />

            </div>

            {/* PHONE */}

            <div>

              <Label className="mb-2 flex items-center gap-2 font-semibold">

                <Phone className="h-4 w-4 text-[#6A38C2]" />

                Phone Number

              </Label>

              <Input
                type="text"
                name="phoneNumber"
                value={input.phoneNumber}
                onChange={changeEventHandler}
                placeholder="Enter phone number"
                className="
                  h-12
                  rounded-2xl
                  border-gray-200
                  bg-white
                  focus-visible:ring-[#6A38C2]
                  shadow-sm
                "
              />

            </div>

            {/* SKILLS */}

            <div>

              <Label className="mb-2 flex items-center gap-2 font-semibold">

                <Pencil className="h-4 w-4 text-[#6A38C2]" />

                Skills

              </Label>

              <Input
                type="text"
                name="skills"
                value={input.skills}
                onChange={changeEventHandler}
                placeholder="React, Node.js"
                className="
                  h-12
                  rounded-2xl
                  border-gray-200
                  bg-white
                  focus-visible:ring-[#6A38C2]
                  shadow-sm
                "
              />

            </div>

          </div>

          {/* ================= BIO ================= */}

          <div className="mt-6">

            <Label className="mb-2 flex items-center gap-2 font-semibold">

              <Pencil className="h-4 w-4 text-[#6A38C2]" />

              Bio

            </Label>

            <textarea
              rows={5}
              name="bio"
              value={input.bio}
              onChange={changeEventHandler}
              placeholder="Tell recruiters about yourself..."
              className="
                w-full
                rounded-2xl
                border
                border-gray-200
                p-4
                outline-none
                bg-white
                focus:ring-2
                focus:ring-[#6A38C2]
                resize-none
                shadow-sm
              "
            />

          </div>

          {/* ================= FILE UPLOAD ================= */}

          <div className="mt-6">

            <Label className="mb-2 flex items-center gap-2 font-semibold">

              <Upload className="h-4 w-4 text-[#6A38C2]" />

              Upload Profile Photo

            </Label>

            <div
              className="
                border-2
                border-dashed
                border-purple-200
                rounded-3xl
                p-6
                bg-purple-50/50
                text-center
              "
            >

              <Upload className="mx-auto h-10 w-10 text-[#6A38C2]" />

              <p className="mt-3 text-gray-700 font-medium">

                Drag & drop image here

              </p>

              <p className="text-sm text-gray-500 mt-1">

                PNG, JPG, JPEG supported

              </p>

              <Input
                type="file"
                accept="image/*"
                onChange={fileChangeHandler}
                className="
                  mt-4
                  rounded-2xl
                  bg-white
                  cursor-pointer
                "
              />

            </div>

          </div>

          {/* ================= BUTTON ================= */}

          <DialogFooter className="mt-8">

            {
              loading ? (

                <Button
                  className="
                    w-full
                    h-12
                    rounded-2xl
                    bg-[#6A38C2]
                    text-base
                    shadow-lg
                  "
                >

                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />

                  Updating Profile...

                </Button>

              ) : (

                <Button
                  type="submit"
                  className="
                    w-full
                    h-12
                    rounded-2xl
                    bg-gradient-to-r
                    from-[#6A38C2]
                    via-purple-600
                    to-pink-500
                    hover:scale-[1.01]
                    transition-all
                    duration-300
                    text-base
                    font-bold
                    shadow-[0_10px_30px_rgba(106,56,194,0.35)]
                  "
                >

                  ✨ Save Profile Changes

                </Button>

              )
            }

          </DialogFooter>

        </form>

      </DialogContent>

    </Dialog>
  );
};

export default UpdateProfileDialog;