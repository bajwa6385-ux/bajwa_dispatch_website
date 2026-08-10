const API_URL = "http://127.0.0.1:8000";


async function loadDashboard(){

    try{

        const response = await fetch(`${API_URL}/contacts`);

        const contacts = await response.json();


        // Total Contacts Update

        document.getElementById("contactCount").innerText = contacts.length;


    }
    catch(error){

        console.log("Dashboard Error:", error);

    }

}


window.onload = function(){

    loadDashboard();

};