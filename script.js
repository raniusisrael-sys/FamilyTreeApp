// =====================================
// Family Tree App v2.0
// =====================================

const API_URL = "https://script.googleusercontent.com/macros/echo?user_content_key=AUkAhnQw2FpM3dhTEmP7vwvFRGPi5Mwf3hMoOYkeadtf3gUW73FAxanx5b8USjRC_-SH9ftZyOnE9ZNzYvE9LRbdiFrebNIOpEKLLshTSsWkq9_gejDNct3JUmLRrdgwBNeJhUFAQy1x6z1EKWoniH1UM2K9gAqkqdUZRrosYIi6yX4fmAE3Ek1NStbT0CEhgo4W-7XyOhO_31kqPOyjRVrbQe2hRcM2OPTL_mrB5a0E_L-Im7pWgN-Jrx2gyzy5UkQqYm_fqK_UWyh8TG6fko4dkOkE9yw2Nw&lib=MH_7RUUP2ceuyrQh8UC6mIGf9ULt4oFEb";

let members = [];

// Load members
async function loadMembers() {

    try {

        const response = await fetch(API_URL);

        members = await response.json();

        document.getElementById("totalMembers").textContent = members.length;

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

    const member = members.find(m => m.ID == id);

    if(!member) return;

    alert(`

Name : ${member.Name}

Gender : ${member.Gender}

DOB : ${member.DOB}

Occupation : ${member.Occupation}

Address : ${member.Address}

Mobile : ${member.Mobile}

`);

}

loadMembers();
