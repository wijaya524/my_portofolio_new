export type Language = "id" | "en";

export const translations = {
  id: {
    "nav.home": "Beranda",
    "nav.projects": "Proyek Saya",
    "nav.skills": "Keahlian Saya",
    "nav.contact": "Hubungi Saya",
    
    "hero.welcome": "Selamat Datang di Portofolio Saya",
    "hero.typewriter1": "Saya seorang Web Developer",
    "hero.typewriter2": "Saya seorang Mahasiswa",
    "hero.typewriter3": "Saya Membangun Pengalaman",
    "hero.description": "Mahasiswa Teknik Informatika Universitas Hasyim Asy'ari Tebuireng Jombang dengan pengalaman di bidang pengembangan web dan teknologi terapan. Berpengalaman sebagai mantan magang di Telkom Akses Jombang (2022) serta alumni program ASAH LED oleh Dicoding (2025) yang memperkuat keahlian di bidang React, back-end development, dan AI. Saat ini juga aktif mengajar sebagai guru di SMK 10 Nopember Jombang.",

    "projects.titlePrefix": "Proyek",
    "projects.titleSuffix": "Saya",
    "projects.visit": "Kunjungi situs web →",

    "skills.titlePrefix": "Keahlian",
    "skills.titleSuffix": "Saya",

    "contact.title": "Untuk Bisnis?",
    "contact.desc": "Jika Anda ingin mempekerjakan saya, silakan isi formulir.",
    "contact.name": "Nama",
    "contact.email": "Email",
    "contact.description": "Deskripsi",
    "contact.placeholder": "Masukkan deskripsi Anda",
    "contact.submit": "Kirim",

    "footer.title": "Media Sosial Saya",
    "footer.desc": "Ikuti saya di media sosial untuk mendapatkan pembaruan terbaru!",
    "footer.copyright": "Hak cipta dilindungi undang-undang."
  },
  en: {
    "nav.home": "Home",
    "nav.projects": "My Projects",
    "nav.skills": "My Skills",
    "nav.contact": "Contact Me",

    "hero.welcome": "Welcome to My Portfolio",
    "hero.typewriter1": "I'm a Web Developer",
    "hero.typewriter2": "I'm a Student",
    "hero.typewriter3": "I'am Build a Experiences",
    "hero.description": "Informatics Engineering student at Hasyim Asy'ari University, Tebuireng, Jombang, with experience in web development and applied technology. He is a former intern at Telkom Akses Jombang (2022) and an alumnus of the ASAH LED program by Dicoding (2025), strengthening his skills in React, back-end development, and AI. He is also currently a teacher at SMK 10 Nopember Jombang.",

    "projects.titlePrefix": "My",
    "projects.titleSuffix": "Projects",
    "projects.visit": "Visit the website →",

    "skills.titlePrefix": "My",
    "skills.titleSuffix": "Skills",

    "contact.title": "For Business?",
    "contact.desc": "If you want to hire me, please fill in the form.",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.description": "Description",
    "contact.placeholder": "Enter your description",
    "contact.submit": "Submit",

    "footer.title": "My Social Media",
    "footer.desc": "Follow me on my social media to get the latest update!",
    "footer.copyright": "All rights reserved."
  }
} as const;

export type TranslationKey = keyof typeof translations["id"];
