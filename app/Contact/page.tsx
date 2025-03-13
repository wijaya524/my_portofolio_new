/* eslint-disable prettier/prettier */
import { Button } from "@heroui/button";
import { Input, Textarea } from "@heroui/input";
import React from "react";

const ContactPage = () => {
  return (
    <section className="text-gray-600 body-font relative" id="contact">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 dark:text-slate-200">
            Contact Us
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-900 dark:text-slate-200">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify.
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
              <Input label="Name" type="text" />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
              <Input label="Email" type="email" />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
              <Textarea className="max-w-full" label="Description" placeholder="Enter your description" />
              </div>
            </div>
            <div className="p-2 w-full">
            <Button color="primary" className="w-full">Button</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
