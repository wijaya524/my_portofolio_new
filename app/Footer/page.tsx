import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const email = "aryansyahyudhawijaya@gmail.com";
  
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <div>
        <p className="text-sm">&copy; {currentYear} Aryansyah Yudha Wijaya. All rights reserved.</p>
        <p className=" flex items-center gap-2 text-sm"> <FaEnvelope />{email}</p>
        </div>
        
        <div className="flex space-x-4 mt-4 md:mt-0">
          <FooterLink href="https://github.com/wijaya524" icon={<FaGithub size={20} />} label="GitHub" />
          <FooterLink href="https://www.linkedin.com/in/aryansyah-yudha-wijaya-1247142a5" icon={<FaLinkedin size={20} />} label="LinkedIn" />
          <FooterLink href={`https://www.instagram.com/ryanfor58?igsh=MWl1eHk0OWR3Zmp4Mg==`} icon={<FaInstagram size={20} />} label="Instagram" />
        </div>
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
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-2 hover:text-gray-400"
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}
