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
            <div class="card">

                <h2>👤 ${member.Name}</h2>

                <p><b>Gender</b><br>${member.Gender || "-"}</p>

                <p><b>Date of Birth</b><br>${member.DOB || "-"}</p>

                <p><b>Occupation</b><br>${member.Occupation || "-"}</p>

                <p><b>Mobile</b><br>${member.Mobile || "-"}</p>

                <p><b>Address</b><br>${member.Address || "-"}</p>

            </div>
        `;

    } catch (err) {

        console.error(err);

        document.getElementById("profileCard").innerHTML =
            "<h2>Unable to load profile.</h2>";

    }

}

loadProfile();
