/* eslint-disable prettier/prettier */
import { Card, CardBody, CardHeader, Link } from "@heroui/react";
import { FaEnvelope } from "react-icons/fa";

import Contact from ".";


export default function Footer() {
  const currentYear = new Date().getFullYear();
  const email = "aryansyahyudhawijaya@gmail.com";

  const contactMenu = Contact();

  return (
    <footer className="dark:text-white py-6">
      <div className="container mx-auto flex flex-col justify-between items-center px-6 space-y-12">
        <section className="space-y-3 text-center">
          <h1 className="text-2xl md:text-5xl font-semibold">
            My Social Media
          </h1>
          <p> Follow me on my social media to get the latest update!</p>
        </section>

        <nav
          aria-label="Social Media Links"
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {
            contactMenu.map((data : any) => (
          <Card key={data.id} className="w-72 dark:bg-[#0B0B0C]">
            <CardHeader>
              <FooterLink
                href="https://github.com/wijaya524"
                icon={<data.myIcon size={30} />}
                label={data.name}
                />
            </CardHeader>
            <CardBody>
              <p className=" line-clamp-3">{data.body}</p>
            </CardBody>
          </Card>
          ))
          }
        </nav>

        <address className="flex flex-col items-center space-y-3 py-10 text-center">
          <p className="flex items-center gap-2 text-sm">
            <FaEnvelope />
            <a className="hover:underline" href={`mailto:${email}`}>
              {email}
            </a>
          </p>
          <p className="text-sm">
            &copy; {currentYear} Aryansyah Yudha Wijaya. All rights reserved.
          </p>
        </address>
      </div>
    </footer>
  );
}

interface FooterLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

function FooterLink({ href, icon, label }: FooterLinkProps) {
  return (
    <div className="flex items-center justify-center space-x-3">
      <span>{icon}</span>
      <Link
        isExternal
        showAnchorIcon
        className="text-lg flex items-center justify-center space-x-2 hover:text-gray-400"
        color="foreground"
        href={href}
        rel="noopener noreferrer"
        target="_blank"
      >
        {label}
      </Link>
    </div>
  );
}