const API_URL = "http://localhost:3000/api/produkte"
const listEl = document.getElementById("ProdukteBody");
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
            //const div = document.createElement("div");
            //div.textContent = it.name + "|" + it.kategorie + "|" + it.einheit + "|" + it.bestand + "|" + it.mindestbestand + "|" + it.lagerort;
            const tr = document.createElement("tr");
            
            const tdName = document.createElement("td");
            tdName.textContent = it.name;
            tr.appendChild(tdName);

            const tdKategorie = document.createElement("td");
            tdKategorie.textContent = it.kategorie;
            tr.appendChild(tdKategorie);

            const tdEinheit = document.createElement("td");
            tdEinheit.textContent = it.einheit;
            tr.appendChild(tdEinheit);

            const tdBestand = document.createElement("td");
            tdBestand.textContent = it.bestand;
            tr.appendChild(tdBestand);

            const tdMindestbestand = document.createElement("td");
            tdMindestbestand.textContent = it.mindestbestand;
            tr.appendChild(tdMindestbestand);

            const tdLagerort = document.createElement("td");
            tdLagerort.textContent = it.lagerort;
            tr.appendChild(tdLagerort);

            //Delete 
            const deleteButton = document.createElement("Button")
            deleteButton.textContent = "x"
            deleteButton.addEventListener("click", async (e) => {
                const deleteProdukt = await fetch(API_URL + "/" + it.id, {
                    method: "DELETE"
                });
                loadProdukte();
            });
            
            //Mindestbestand Warning
            if (it.bestand < it.mindestbestand){
                tr.classList.add("warnung");
            }
            const tdDelete = document.createElement("td");
            tdDelete.appendChild(deleteButton);
            tr.appendChild(tdDelete);
            listEl.appendChild(tr);
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
    
    const response = await fetch(API_URL, {
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({name: name, kategorie: kategorie, einheit: einheit, bestand: bestand, mindestbestand: mindestbestand, lagerort: lagerort})
    });
    loadProdukte();
});
loadProdukte();