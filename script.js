const API_URL = "https://script.googleusercontent.com/macros/echo?user_content_key=AUkAhnTM-aQZ4s70yvJ60FecOKOCbJs1wWFgnUb8aM5kZ2PH1DFR_R6qTPkSdYFgCtEf1VqS1CLnNDXmze3A6LunZsrTfjNFZj29lqKlDvlv4jMNnlHvMLcBwLlFlBngU2jJy_7grFPf4yyJg7au5Q9ecbKqDXkTR1zwzZmkBVepSIjUIPaCmVAXXJ2g4LLU0UF1Uux7CjfOmKKCCB63FrO5qbnhbxUDmaxTLWY3DVUMlJB6lCgBq65JV-z9Srvd9Hq9g7zQpY4ldGVmbph3Ie40cVP4m7i0DQ&lib=MH_7RUUP2ceuyrQh8UC6mIGf9ULt4oFEb";

async function loadMembers() {

    try {

        const response = await fetch(API_URL);

        const data = await response.json();

        document.getElementById("totalMembers").innerHTML = data.length - 1;

        console.log(data);

    } catch (err) {

        alert("Unable to load family members");

        console.log(err);

    }

}

loadMembers();