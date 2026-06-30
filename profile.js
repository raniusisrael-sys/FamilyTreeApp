const API_URL =
"https://script.google.com/macros/s/AKfycbxc5k1nVP4Olrjnr27r2d_wjX6-I4eypqzQ35xgQ7d-kRA2GzOmGn_nNjuG0F6CgAxI/exec";

async function loadProfile() {

    try {

        const id = Number(localStorage.getItem("selectedMember"));

        if (!id) {
            document.getElementById("profileCard").innerHTML =
                "<h2>No member selected.</h2>";
            return;
        }

        const response = await fetch(API_URL);
        const members = await response.json();

        const member = members.find(m => Number(m.ID) === id);

        if (!member) {
            document.getElementById("profileCard").innerHTML =
                "<h2>Member not found.</h2>";
            return;
        }

        document.getElementById("profileCard").innerHTML = `

<div class="card profile-card">

<img
class="profile-photo"
src="${member["Photo URL"] || "https://cdn-icons-png.flaticon.com/512/149/149071.png"}">

<h2>${member.Name}</h2>

<p>👤 ${member.Gender || "-"}</p>

<p>🎂 ${member.DOB || "-"}</p>

<p>💼 ${member.Occupation || "-"}</p>

<p>📞 ${member.Mobile || "-"}</p>

<p>📍 ${member.Address || "-"}</p>

</div>

`;

    } catch (err) {

        console.error(err);

        document.getElementById("profileCard").innerHTML =
            "<h2>Unable to load profile.</h2>";

    }

}

loadProfile();
