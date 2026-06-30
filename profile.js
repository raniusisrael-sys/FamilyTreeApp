const API_URL =
"https://script.google.com/macros/s/AKfycbxc5k1nVP4Olrjnr27r2d_wjX6-I4eypqzQ35xgQ7d-kRA2GzOmGn_nNjuG0F6CgAxI/exec";

const id = localStorage.getItem("selectedMember");

async function loadProfile(){

const res = await fetch(API_URL);

const members = await res.json();

const member = members.find(m=>m.ID==id);

document.getElementById("profileCard").innerHTML=`

<div class="card">

<h2>👤 ${member.Name}</h2>

<p><b>Gender</b><br>${member.Gender}</p>

<p><b>DOB</b><br>${member.DOB}</p>

<p><b>Occupation</b><br>${member.Occupation}</p>

<p><b>Mobile</b><br>${member.Mobile}</p>

<p><b>Address</b><br>${member.Address}</p>

</div>

`;

}

loadProfile();
