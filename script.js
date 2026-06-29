// ================================
// Family Tree App
// Version 1.0
// ================================

// Google Apps Script API
const API_URL = "https://script.google.com/macros/s/AKfycbyT-GTuIcAxkkTNi5_c7GVhO6WrUMfEZ33T4U_NwVxa5VTtljsKrp1XwegEvsEYZHIn/exec";

// Store all members
let members = [];

// Load data from Google Sheets
async function loadMembers() {

  try {

    const response = await fetch(API_URL);

    const data = await response.json();

    // Remove the header row
    members = data.slice(1);

    // Display total members
    document.getElementById("totalMembers").textContent = members.length;

    console.log("Members Loaded:", members);

  } catch (error) {

    console.error(error);

    alert("Unable to connect to Google Sheets.");

  }

}

// Show all members
function showMembers() {

  let html = "";

  members.forEach(member => {

    html += `
      <div class="card">
        <h3>👤 ${member[1]}</h3>
        <p>${member[2]}</p>
      </div>
    `;

  });

  document.getElementById("memberList").innerHTML = html;

}

// Start App
loadMembers();
