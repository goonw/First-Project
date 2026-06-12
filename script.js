function go() {
    const id = document.getElementById("idInput").value;

    if (!id) {
        alert("Dimasukin Dulu Kink");
        return;
    }

    const BASE_URL = "https://nhentai.net/g/";
    window.location.href = BASE_URL + id + "/";
}

function generateRandom() {
    const randomNum = Math.floor(100000 + Math.random() * 900000);
    document.getElementById("idInput").value = randomNum;
}