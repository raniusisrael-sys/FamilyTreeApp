// =====================================
// Family Tree App v1.2
// =====================================

const API_URL = "https://script.google.com/macros/s/AKfycbzAF_QLrrHOWn1MBdyS67CXiwmaFwuq77vlCIvXm90AX2rGnaa2wZuzyktRxLCAh7SE/exec";

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
        <div class="card">
            <h3>👤 ${member[1]}</h3>
            <p>Gender : ${member[2]}</p>
            <p>Occupation : ${member[9]}</p>

            <button onclick="viewMember(${member[0]})">
                View Profile
            </button>
        </div>
        `;

    });

    document.getElementById("memberList").innerHTML = html;

}

// View member
function viewMember(id){

    const member = members.find(m => m[0] == id);

    if(!member) return;

    alert(
`Name : ${member[1]}

Gender : ${member[2]}

DOB : ${member[3]}

Occupation : ${member[9]}

Address : ${member[10]}

Mobile : ${member[7]}`
    );

}

loadMembers();
