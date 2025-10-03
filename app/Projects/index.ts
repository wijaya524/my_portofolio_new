/* eslint-disable prettier/prettier */


import Jombang from "../../components/images/Jombang.png";
import Asah from "../../components/images/asah.png";


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
        describe: "Hasil menyelesaikan learning path React-Backend with AI by Dicoding Indonesia and AAccenture.",
        url: "https://www.youtube.com/watch?v=y8QZ8A8F4i8"
    }

];

function project() {

    return myProject;
}

export default project;
