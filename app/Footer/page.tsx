import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <p className="text-sm">&copy; {new Date().getFullYear()} Aryansyah Yudha Wijaya. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-gray-400">
            <FaGithub size={20} />
            <span>GitHub</span>
          </a>
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-gray-400">
            <FaLinkedin size={20} />
            <span>LinkedIn</span>
          </a>
          <a href="mailto:your.email@example.com" className="flex items-center space-x-2 hover:text-gray-400">
            <FaEnvelope size={20} />
            <span>Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
