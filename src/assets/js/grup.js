let api = "https://efest-api.vercel.app/"

log()

async function log() {
    let grup = localStorage.getItem("daftar")

    console.log(grup)
    let res = await fetch(api + "api/grup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ grup:grup.toLowerCase() }),
    });

    let json = await res.json()

    document.getElementById("name").innerText = grup
    document.getElementById("url").innerText = json.message
    document.getElementById("url").setAttribute("href", json.message)

    console.log(json)
}

function ulang(){
    localStorage.removeItem("daftar")
    document.location.href = "../Efest-Daftar"
}