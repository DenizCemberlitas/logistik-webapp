const API_URL = "http://localhost:3000/api/produkte"
const listEl = document.getElementById("ProdukteList");
const form = document.getElementById("produkteForm");

async function loadProdukte(){
    try{
        const response = await fetch(API_URL);
        if (!response.ok){
            throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        console.log(result);

        listEl.innerHTML = "";

        for (const it of result){
            const div = document.createElement("div");
            div.textContent = it.name + "-" + it.kategorie + "-" + it.einheit + "-" + it.bestand + "-" + it.mindestbestand + "-" + it.lagerort;
            listEl.appendChild(div);
        }
    } catch(error){
        console.error(error.message);
    }
}

form?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("nameProdukteInput").value;
    const kategorie = document.getElementById("kategorieProdukteInput").value;
    const einheit = document.getElementById("einheitProdukteInput").value;
    const bestand = document.getElementById("bestandProdukteInput").value;
    const mindestbestand = document.getElementById("mindestbestandProdukteInput").value;
    const lagerort = document.getElementById("lagerortProdukteInput").value;
    
    const response = await fetch("http://localhost:3000/api/produkte", {
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({name: name, kategorie: kategorie, einheit: einheit, bestand: bestand, mindestbestand: mindestbestand, lagerort: lagerort})
    })
    loadProdukte();
});
loadProdukte();