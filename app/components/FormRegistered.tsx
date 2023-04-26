"use client";

import { ValueTypes, registerValidation } from "@/utils/validate";
import { useFormik } from "formik";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function FormRegister() {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validate: registerValidation,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: async (values: ValueTypes) => {
      console.log(values);
    },
  });

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />

      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col gap-1 mb-6">
          <label className="text-gray-500" htmlFor="name">
            Name
          </label>
          <input
            {...formik.getFieldProps("name")}
            id="name"
            name="name"
            type="text"
            className="outline-none px-4 py-1.5 tracking-widest rounded-md border-2 border-red-200"
          />
        </div>

        <div className="flex flex-col gap-1 mb-8">
          <label className="text-gray-500" htmlFor="email">
            Email
          </label>
          <input
            {...formik.getFieldProps("email")}
            id="email"
            name="email"
            type="email"
            className="outline-none px-4 py-1.5 tracking-widest rounded-md border-2 border-red-200"
          />
        </div>

        <button
          type="submit"
          className="px-4 py-1.5 w-full tracking-widest rounded-md bg-red-400 text-white mb-2"
        >
          Create Account
        </button>
        <div className="flex items-center gap-1 justify-center">
          <p>Already have a account?</p>
          <p
            onClick={() => router.push("/")}
            className="cursor-pointer text-red-700"
          >
            Login
          </p>
        </div>
      </form>
    </>
  );
}
