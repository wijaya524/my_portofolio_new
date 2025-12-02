/* eslint-disable prettier/prettier */


import Jombang from "../../components/images/Jombang.png";
import Asah from "../../components/images/asah.png";
import Stock from "../../components/images/stocks.png";


const myProject = [
    {
        id: 1,
        name: "SIADES",
        domain: "siades.com",
        image: Jombang,
        describe: "Sistem Administrasi Desa Jombang digunakan untuk mengelola data desa, termasuk data penduduk, laporan, dan informasi lainnya.",
        url: "https://wijaya524.github.io/aryansyah.github.io/"

    }, {
        id: 2,
        name: "React Asah",
        domain: "react-asah.com",
        image: Asah,
        describe: "Hasil menyelesaikan learning path React-Backend with AI by Dicoding Indonesia and Accenture.",
        url: "https://github.com/wijaya524/personal-notes-app-starter.git"
    }, {
         id: 3,
        name: "Hitung Dividen Saham",
        domain: "https://dividen-saham.vercel.app/",
        image: Stock,
        describe: "Kalkulator untuk menghitung jumlah deviden saham yang diterima berdasarkan data saham yang dimiliki.",
        url: "https://dividen-saham.vercel.app/"
    }

];

function project() {

    return myProject;
}

export default project;
