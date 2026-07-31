/* eslint-disable prettier/prettier */

import Jombang from "../../components/images/Jombang.png";
import Stock from "../../components/images/stocks.png";
import PacuPintar from "../../components/images/pacuPintar.png";

const myProject = [
    {
        id: 1,
        name: "SIADES",
        domain: "siades.com",
        image: Jombang,
        describe: {
            id: "Sistem Administrasi Desa Jombang digunakan untuk mengelola data desa, termasuk data penduduk, laporan, dan informasi lainnya.",
            en: "Jombang Village Administration System is used to manage village data, including resident data, reports, and other information."
        },
        url: "https://wijaya524.github.io/aryansyah.github.io/"
    },
    {
        id: 2,
        name: "Hitung Dividen Saham",
        domain: "https://dividen-saham.vercel.app/",
        image: Stock,
        describe: {
            id: "Kalkulator untuk menghitung jumlah deviden saham yang diterima berdasarkan data saham yang dimiliki.",
            en: "A calculator to calculate the amount of stock dividends received based on stock ownership data."
        },
        url: "https://dividen-saham.vercel.app/"
    },
    {
        id: 3,
        name: "Capstone Project ASAH",
        domain: "https://pacupintar.netlify.app",
        image: PacuPintar,
        describe: {
            id: "Aplikasi Pacu Pintar adalah platform pembelajaran interaktif yang dirancang untuk membantu siswa meningkatkan keterampilan akademis mereka melalui kuis, latihan soal, dan materi pembelajaran yang menarik.",
            en: "The Pacu Pintar application is an interactive learning platform designed to help students improve their academic skills through quizzes, practice questions, and engaging learning materials."
        },
        url: "https://pacupintar.netlify.app"
    }
];

function project() {
    return myProject;
}

export default project;
