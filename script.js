function go() {
    const id = document.getElementById("idInput").value;

    if (!id) {
        alert("Dimasukin Dulu Kink");
        return;
    }

    let history = JSON.parse(localStorage.getItem("history")) || {};

    history[id] = (history[id] || 0) + 1;

    localStorage.setItem("history", JSON.stringify(history));

    renderHistory();

    const BASE_URL = "https://nhentai.net/g/";
    window.location.href = BASE_URL + id + "/";
}

function generateRandom() {
    const randomNum = Math.floor(100000 + Math.random() * 900000);
    document.getElementById("idInput").value = randomNum;
}

function renderHistory() {
    const history = JSON.parse(localStorage.getItem("history")) || {};

    let html = `
        <table class="history-table">
            <tr>
                <th>CODE</th>
                <th>SEARCHED</th>
            </tr>
    `;

    for (const [code, count] of Object.entries(history)) {
        html += `
            <tr>
                <td>${code}</td>
                <td>${count}x</td>
            </tr>
        `;
    }

    html += `</table>`;

    document.getElementById("history").innerHTML = html;
}

window.onload = renderHistory;