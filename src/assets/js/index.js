let api = "https://efest-api.vercel.app/"

function getNav() {
    let navbar = document.getElementById("navbar-cta");
    navbar.classList.toggle("hidden");
}

let clicked = false
async function daftar() {
    if (!clicked) {

        let namaAbsen = document.getElementById("namaAbsen").value
        let kelas = document.getElementById("kelas").value
        let jenis = document.getElementById("jenis").value
        if(jenis.includes("Jenis")){
            alert("Please select a type")
            return
        }
        clicked = true
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
            localStorage.setItem("daftar",jenis)
            alert("Mengarahkan mu ke page grup")
            document.location.href = "./grup.html"
        }
    } else {
        alert("Please wait for the previous request to finish")
    }
}

if(localStorage.getItem("daftar")){
    document.getElementById("done").innerHTML += `<a href="./grup.html" class="btn btn-wide">Telah Daftar ? Masuk Grup disini</a>`
    document.getElementById("done").classList.remove("hidden")
}