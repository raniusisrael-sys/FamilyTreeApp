// =====================================
// Family Tree App v2.0
// =====================================

const API_URL = "https://script.google.com/macros/s/AKfycbxc5k1nVP4Olrjnr27r2d_wjX6-I4eypqzQ35xgQ7d-kRA2GzOmGn_nNjuG0F6CgAxI/exec";

let members = [];

// Load members
async function loadMembers() {

    try {

        const response = await fetch(API_URL);

        members = await response.json();

        document.getElementById("totalMembers").textContent = members.length;
        // Count families (based on spouse)
const families = members.filter(m => m["Spouse ID"]).length;

document.getElementById("familyCount").textContent = families;

document.getElementById("birthdayCount").textContent = "0";

        showMembers();

    } catch (error) {

        console.error(error);

        alert("Unable to connect to Google Sheets.");

    }

}

// Show Members
function showMembers() {

    let html = "";

    members.forEach(member => {

        html += `
        <div class="card">

            <h3>👤 ${member.Name}</h3>

            <p>Gender : ${member.Gender}</p>

            <p>Occupation : ${member.Occupation}</p>

            <button onclick="viewMember(${member.ID})">
                View Profile
            </button>

        </div>
        `;

    });

    document.getElementById("memberList").innerHTML = html;

}

// View Member
function viewMember(id){

localStorage.setItem("selectedMember", id);

window.location = "profile.html";

}

loadMembers();
