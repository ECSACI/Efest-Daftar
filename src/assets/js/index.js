let api = "https://efest-api.vercel.app/"

function getNav() {
    let navbar = document.getElementById("navbar-cta");
    navbar.classList.toggle("hidden");
}

let finished = false
let clicked = false
async function daftar() {
    if (!clicked) {
        clicked = true

        let namaAbsen = document.getElementById("namaAbsen").value
        let kelas = document.getElementById("kelas").value
        let jenis = document.getElementById("jenis").value
        if(jenis.includes("jenis")){
            alert("Please select a type")
            return
        }
        let kelasStr = document.getElementById("kelasStr").value
        let res = await fetch(api + "api/absen", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nama: namaAbsen, kelas: kelas, jenis, kelasStr: kelasStr }),
        });
        let data = await res.json()
        if (data.status === 401) {
            alert(data.message)
            clicked = false
        } else {
            alert(data.message)
            clicked = false
            finished = true
        }
    } else {
        if(finished){
            alert("Request finished, please refresh the page")
        } else {
            alert("Please wait for the previous request to finish")
        }
    }
}