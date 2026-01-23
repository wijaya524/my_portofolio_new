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
        describe: "Sistem Administrasi Desa Jombang digunakan untuk mengelola data desa, termasuk data penduduk, laporan, dan informasi lainnya.",
        url: "https://wijaya524.github.io/aryansyah.github.io/"

    },  {
         id: 2,
        name: "Hitung Dividen Saham",
        domain: "https://dividen-saham.vercel.app/",
        image: Stock,
        describe: "Kalkulator untuk menghitung jumlah deviden saham yang diterima berdasarkan data saham yang dimiliki.",
        url: "https://dividen-saham.vercel.app/"
    }, {
        id: 3,
        name: "Capstone Project ASAH",
        domain: "https://pacupintar.netlify.app",
        image: PacuPintar,
        describe: "Aplikasi Pacu Pintar adalah platform pembelajaran interaktif yang dirancang untuk membantu siswa meningkatkan keterampilan akademis mereka melalui kuis, latihan soal, dan materi pembelajaran yang menarik.",
        url: "https://pacupintar.netlify.app"
    }

];

function project() {

    return myProject;
}

export default project;
