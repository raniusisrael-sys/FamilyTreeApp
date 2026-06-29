// =====================================
// Family Tree App v1.2
// =====================================

const API_URL = "https://script.googleusercontent.com/macros/echo?user_content_key=AUkAhnRgsep8Kz6iphSWzWzLIxe1_ckPsIAtVFMuOnEWqniEpSOIghz2N5DJ2-wlS1SVL6x4d8HrqJsUYsHMr4Wv3cWY6QclvkREMV3TAJC3Hnjh4u8zWk4YnLO42hCelJVzy3c3BGWczB0rZaakO1VbDJgHH9YBbzTE6x8O84ckoYhPN5jYNh8OBHjDM_LWC5zZ0yjL-tUm7tNxOHxSrrk05jaU55vbjsrlc8EPX3bfnKqW-Iaur4HLVcr2djz1nr64swQGvoWvY55tTFynLiUlJ6OBK9TrhQ&lib=MH_7RUUP2ceuyrQh8UC6mIGf9ULt4oFEb";

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
