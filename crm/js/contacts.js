const API_URL = "http://127.0.0.1:8000";


async function loadContacts(){

    try{

        const response = await fetch(`${API_URL}/contacts`);

        const contacts = await response.json();


        const table = document.getElementById("contactTable");


        contacts.forEach(contact => {


            table.innerHTML += `

            <tr>

            <td>${contact.id}</td>

            <td>${contact.name}</td>

            <td>${contact.email}</td>

            <td>${contact.phone}</td>

            <td>${contact.company}</td>

            <td>${contact.message}</td>

            </tr>

            `;


        });


    }

    catch(error){

        console.log(error);

    }

}


loadContacts();