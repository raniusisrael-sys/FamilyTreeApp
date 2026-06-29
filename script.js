// =====================================
// Family Tree App v1.2
// =====================================

const API_URL = "https://script.google.com/macros/s/AKfycbyT-GTuIcAxkkTNi5_c7GVhO6WrUMfEZ33T4U_NwVxa5VTtljsKrp1XwegEvsEYZHIn/exec";

let members = [];

// Load members from Google Sheets
async function loadMembers() {

    try {

        const response = await fetch(API_URL);

        members = await response.json();

        document.getElementById("totalMembers").textContent = members.length;

        console.log(members);

    } catch (error) {

        console.error(error);

        alert("Unable to connect to Google Sheets.");

    }

}

// Display members
function showMembers() {

    let html = "";

    members.forEach(member => {

        html += `
        <div class="card member-card">
            <h3>👤 ${member.Name}</h3>
            <p>Gender : ${member.Gender}</p>
            <p>Occupation : ${member.Occupation}</p>
            <button onclick="viewMember('${member.ID}')">
                View Profile
            </button>
        </div>
        `;

    });

    document.getElementById("memberList").innerHTML = html;

}

// View member
function viewMember(id){

    const member = members.find(m => String(m.ID) === String(id));

    if(!member) return;

    alert(
`Name : ${member.Name}

Gender : ${member.Gender}

DOB : ${member.DOB}

Occupation : ${member.Occupation}

Address : ${member.Address}

Mobile : ${member.Mobile}`
    );

}

loadMembers();
