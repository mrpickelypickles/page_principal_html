const table = document.getElementById("myTable");
const tbody = table.querySelector("tbody");
const maxEntries1 = 3; // Maximum number of entries allowed
/*
const seancetable = document.getElementById("choix_des_3_séances_d_information");
const seancebody = seancetable.querySelector("seancebody");
*/

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Your form handling code here
});


const data = [
    {
        name: "John Doe",
        subject: "Math",
        email: "john.doe@example.com",
        mainPhone: "123-456-7890",
        secondaryPhone: "098-765-4321"
    }
];

const dataseance = [
    {
        seance: "3d",
        enseigant: "Math",
        numerodegroupe: "03",
        nombredeleves: "45",
        niveau: "5",
        local:"4005",
        date:"10/20/2023",
        periode:"1periode",
        disponibilite:"verifier"
    }
];

function addEntry(event, data) {
    event.preventDefault(); // Prevents the page from refreshing

    

    if (data.length >= maxEntries1) {
        alert('Maximum number of entries reached. Cannot add more entries.');
        return;
    }

    const newEntry = {
        name: prompt("Enter name:"),
        subject: prompt("Enter subject:"),
        email: prompt("Enter email:"),
        mainPhone: prompt("Enter main phone number (format: 123-456-7890):"),
        secondaryPhone: prompt("Enter secondary phone number (format: 123-456-7890):")
    };
// Rest of your addEntry function code
    data.push(newEntry);
    renderTable(tbody, data);
}

function renderTable( data) {
    data.forEach((entry, index) => {
        if (index === 0) return; // Skip rendering the first entry (it's the initial data)

        const row = tbody.insertRow();

        const nameCell = row.insertCell();
        nameCell.textContent = entry.name;

        const subjectCell = row.insertCell();
        subjectCell.textContent = entry.subject;

        const emailCell = row.insertCell();
        emailCell.textContent = entry.email;

        const mainPhoneCell = row.insertCell();
        mainPhoneCell.textContent = entry.mainPhone;

        const secondaryPhoneCell = row.insertCell();
        secondaryPhoneCell.textContent = entry.secondaryPhone;
    });
    
 
}
  renderTable(tbody,data); 





function addEntry2() {
    const newEntry2 = {
        seance: prompt("Enter seance:"),
        enseigant: prompt ("Enter enseigant:"),
        numerodegroupe: prompt ("Enter numerodegroupe:"),
        nombredeleves: prompt ("Enter nombredeleves:"),
        niveau: prompt ("Select niveau:"),
        local: prompt("Enter local"),
        date: prompt("Enter date"),
        periode: prompt("Select periode"),
        disponibilite: prompt("verifie disponibilite")
    };

    seancedata.push(newEntry2);
    renderTable(seancebody, dataseance);
}

/*
function renderTable(seancebody, dataseance) {
    seancebody.innerHTML = "";
    dataseance.forEach((entry, index) => {
        if (index === 0) return; // Skip rendering the first entry (it's the initial data)
        const row = seancebody.insertRow();

        const seanceCell = row.insertCell();
        seanceCell.textContent = entry.seance;

        const enseigantCell = row.insertCell();
        enseigantCell.textContent = entry.enseigant;

        const numerodegroupeCell = row.insertCell();
        numerodegroupeCell.textContent = entry.numerodegroupe;

        const nombredelevesCell = row.insertCell();
        nombredelevesCell.textContent = entry.nombredeleves;

        const niveauCell = row.insertCell();
        niveauCell.textContent = entry.niveau;

        const localCell = row.insertCell();
        localCell.textContent = entry.local;

        const dateCell = row.insertCell();
        dateCell.textContent = entry.date;

        const periodeCell = row.insertCell();
        periodeCell.textContent = entry.periode;

        const disponibiliteCell = row.insertCell();
        disponibiliteCell.textContent = entry.disponibilite;

    });
}
renderTable(seancebody, dataseance);
*/

// Call the renderTable function initially to render the table with initial data
renderTable(seancebody, dataseance);
