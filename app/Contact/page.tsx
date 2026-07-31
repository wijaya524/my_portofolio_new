/* eslint-disable prettier/prettier */
"use client";

import { Button } from "@heroui/button";
import { Input, Textarea } from "@heroui/input";
import { Form } from "@heroui/react";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";

const ContactPage = () => {
  const { t } = useLanguage();

  return (
    <section suppressHydrationWarning className="text-gray-600 body-font relative" id="contact">
      <div className="container mx-auto px-5 py-16 md:py-24">
        <header className="flex flex-col text-center w-full mb-12">
          <h1 className="text-2xl md:text-5xl font-semibold title-font mb-4 text-gray-900 dark:text-slate-200">
            {t("contact.title")}
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-700 dark:text-slate-300">
            {t("contact.desc")}
          </p>
        </header>
        <Form className="max-w-2xl mx-auto p-6 rounded-lg shadow-md">
          <fieldset className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            <Input className="w-full" label={t("contact.name")} type="text" />
            <Input className="w-full" label={t("contact.email")} type="email" />
          </fieldset>
          <div className="mt-4 w-full">
            <Textarea className="w-full" label={t("contact.description")} placeholder={t("contact.placeholder")} />
          </div>
          <fieldset className="mt-6 w-full">
            <Button className="w-full" color="primary">{t("contact.submit")}</Button>
          </fieldset>
        </Form>
      </div>
    </section>
  );
};

export default ContactPage;
