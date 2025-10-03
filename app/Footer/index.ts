/* eslint-disable prettier/prettier */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FaGithub, FaLinkedin,  FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

const listContact = [
    {
        id: 1,
        name: "GitHub",
        body: "For more source code, visit my GitHub.",
        url: "https://github.com/wijaya524",
        myIcon: FaGithub 
    },
    {
        id: 2,
        name: "LinkedIn",
        body: "Connect with me on LinkedIn.",
        url: "https://www.linkedin.com/in/aryansyah-yudha-wijaya-1247142a5",
        myIcon: FaLinkedin
    },
    {
        id: 3,
        name: "Instagram",
        body: "Follow me on Instagram.",
        url: "https://www.instagram.com/ryanfor58?igsh=MWl1eHk0OWR3Zmp4Mg==",
        myIcon: FaInstagram
    },
    {
        id: 4,
        name: "Youtube",
        body: "Subscribe to my YouTube channel.",
        url: "https://www.youtube.com/@aryakidyt2492",
        myIcon: FaYoutube
    }, {
        id: 5,
        name: "Tiktok",
        body: "Follow to my Tiktok.",
        url: "https://www.tiktok.com/@ryanfor_58?is_from_webapp=1&sender_device=pc",
        myIcon: FaTiktok
    },
];


function Contact() {
    return listContact;
}

export default Contact;