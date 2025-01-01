"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

import { sendEmail } from "@/lib/sendEmail";
import LocationMap from "@/lib/LocationMap";
import Image from "next/image";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};

const Contact = () => {
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const validate = (values) => {
    const errors = {};
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const internationalPhoneRegex = /^\+2519\d{8}$/;

    if (!values.firstName) {
      errors.firstName = "First name is required!";
    }
    if (!values.lastName) {
      errors.lastName = "Last name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "Invalid email format!";
    }
    if (!values.message) {
      errors.message = "Message is required!";
    }
    if (!values.phone) {
      errors.phone = "Phone number is required!";
    } else if (!internationalPhoneRegex.test(values.phone)) {
      errors.phone = "Invalid phone number format (+251)";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
    if (formErrors[name]) formErrors[name] = "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validate(formValues);

    if (isValid) {
      try {
        setIsSubmitting(true);

        const templateParams = {
          recipient_name: "Addis Interior",
          from_email: formValues.email,
          first_name: formValues.firstName,
          last_name: formValues.lastName,
          phone_number: formValues.phone,
          message: formValues.message,
        };

        const res = sendEmail(templateParams);

        if (res === true) {
          Swal.fire({
            title: "Good job!",
            text: "Thank you for reaching out! We will contact you soon.",
            icon: "success",
            confirmButtonColor: "#fb8122",
            background: "#f7f7f7",
          }).then((res) => {
            if (res.isConfirmed) router.push("/");
          });
        }
      } catch (error) {
        console.error("Error occurred while submitting the form:", error);

        Swal.fire({
          title: "Error!",
          text: "Something went wrong, please try again later.",
          icon: "error",
          confirmButtonColor: "#fb8122",
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="relative w-full min-h-screen">
      <div className="bg-[url('/image/about.jpg')] bg-cover bg-center h-[65vh] flex items-center justify-center text-white relative mt-16">
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-t from-black/50 to-black/20 h-full w-full"></div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold z-10">Contact Us</h1>
      </div>

      <div className="c-space flex flex-col md:flex-row gap-20 md:gap-12">
        <div className="w-full md:w-[40%]">
          {/* <div className="mb-6">
            <h2 className="text-xl md:text-2xl font-semibold mb-8">Contact Information</h2>
          </div> */}

          <div className="flex flex-col gap-8">
            <div className="w-full flex items-center gap-6 bg-zinc-50 shadow-sm p-5 sm:flex-row sm:items-center sm:gap-4 lg:p-7">
              <div className="w-14 h-14 bg-blue-100 p-3 md:p-4 rounded-full flex items-center justify-center">
                <Image width={24} height={24} src="/icons/phone.svg" alt="Phone Icon" />
              </div>
              <div>
                <p className="text-md font-semibold text-gray-900">
                  Phone Number
                </p>
                <p className="mt-1 text-sm md:text-[.9rem] font-medium text-gray-700 tracking-wide">
                  +251 911 111 111
                </p>
              </div>
            </div>

            <div className="w-full flex items-center gap-6 bg-zinc-50 shadow-sm p-5 sm:flex-row sm:items-center sm:gap-4 lg:p-7">
              <div className="w-14 h-14 bg-blue-100 p-3 md:p-4 rounded-full flex items-center justify-center">
                <Image width={26} height={26} src="/icons/email.svg" alt="Phone Icon" />
              </div>
              <div>
                <p className="text-md font-semibold text-gray-900">
                  Email
                </p>
                <p className="mt-1 text-sm md:text-[.9rem] font-medium text-gray-700 tracking-wide">
                  contact@addisinterior.com
                </p>
              </div>
            </div>

            <div className="w-full flex items-center gap-6 bg-zinc-50 shadow-sm p-5 sm:flex-row sm:items-center sm:gap-4 lg:p-7">
              <div className="w-14 h-14 bg-blue-100 p-3 md:p-4 rounded-full flex items-center justify-center">
                <Image width={24} height={24} src="/icons/location.svg" alt="Phone Icon" />
              </div>
              <div>
                <p className="text-md font-semibold text-gray-900">
                  Address
                </p>
                <p className="mt-1 text-sm md:text-[.9rem] font-medium text-gray-700 tracking-wide">
                  Addis Ababa, Ethiopia
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 bg-transparent md:bg-zinc-50 py-8 px-0 md:px-10">
          {/* <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12">
            Let's get <span className="text-gray-900">in touch!</span>
          </h2> */}
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="block text-sm md:text-[.9rem] font-medium mb-2">
                  First Name*
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formValues.firstName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-3"
                />
                {formErrors.firstName && (
                  <p className="text-red-500 text-sm mt-1">
                    {formErrors.firstName}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm md:text-[.9rem] font-medium mb-2">
                  Last Name*
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formValues.lastName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-3"
                />
                {formErrors.lastName && (
                  <p className="text-red-500 text-sm mt-1">
                    {formErrors.lastName}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="block text-sm md:text-[.9rem] font-medium mb-2">
                  Business Email*
                </label>
                <input
                  type="email"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-3"
                />
                {formErrors.email && (
                  <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm md:text-[.9rem] font-medium mb-2">
                  Phone Number*
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formValues.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-3"
                />
                {formErrors.phone && (
                  <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm md:text-[.9rem] font-medium mb-2">
                Your message*
              </label>
              <textarea
                name="message"
                value={formValues.message}
                onChange={handleChange}
                rows="4"
                className="w-full border border-gray-300 rounded-md p-3"
              />
              {formErrors.message && (
                <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>
              )}
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-3 rounded-md hover:bg-gray-700 mt-6"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="c-space bg-zinc-50">
        <div className="flex flex-col gap-3 text-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">Find Us On Google Map</h1>
          <p>this is our office location you can visit us when ever you want</p>
        </div>
        <div className="bg-white shadow-lg w-full h-[60vh] md:h-[70vh] lg:h-[75vh] mt-10">
          <LocationMap />
        </div>
      </div>
    </div>
  );
};

export default Contact;
