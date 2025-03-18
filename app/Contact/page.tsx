import { Button } from "@heroui/button";
import { Input, Textarea } from "@heroui/input";
import React from "react";

const ContactPage = () => {
  return (
    <section className="text-gray-600 body-font relative" id="contact">
      <div className="container mx-auto px-5 py-16 md:py-24">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className=" text-2xl md:text-5xl font-semibold title-font mb-4 text-gray-900 dark:text-slate-200">
            Contact Us
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-700 dark:text-slate-300">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.
          </p>
        </div>
        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input label="Name" type="text" className="w-full" />
            <Input label="Email" type="email" className="w-full" />
          </div>
          <div className="mt-4">
            <Textarea className="w-full" label="Description" placeholder="Enter your description" />
          </div>
          <div className="mt-6">
            <Button color="primary" className="w-full ">Submit</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
