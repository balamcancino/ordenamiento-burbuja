import { Contact } from '../Models/Contact.js';
import { Queue } from '../Models/Queue.js';
let queue = new Queue();

document.getElementById("btn_add").addEventListener("click", function() {
    let contactName = document.getElementById("contactName").value;
    let number = document.getElementById("number").value;
    
    if(contactName !=='' && number !==''){
        if(number.length != 10){
            alert("Ingrese un número de teléfono de 10 dígitos");
        } else {
            if (isDuplicate(contactName, number)) {
                alert("El nombre o el número de teléfono ya están en la lista");
            } else {
                let contact = new Contact(contactName, number);
                queue.enqueue(contact);
                displayContacts();
            }
        }
    } else {
        alert("Llene todos los campos");
    }
});

document.getElementById("btn_delete").addEventListener("click", function() {
    queue.dequeue();
    displayContacts();
});

document.getElementById("btn_sort_name").addEventListener("click", function() {
    queue.sortBubble('name');
    displayContacts();
});

document.getElementById("btn_sort_number").addEventListener("click", function() {
    queue.sortBubble('number');
    displayContacts();
});

function isDuplicate(contactName, number) {
    let currentContact = queue.head;
    while (currentContact) {
        if (currentContact.value.name === contactName || currentContact.value.number === number) {
            return true;
        }
        currentContact = currentContact.next;
    }
    return false;
}

function displayContacts() {
    let contactListDiv = document.getElementById("contactList");
    contactListDiv.innerHTML = "";
    let currentContact = queue.head;
    while (currentContact) {
        let contactItem = document.createElement("div");
        contactItem.textContent = `Nombre: ${currentContact.value.name}, Número: ${currentContact.value.number}`;
        contactListDiv.appendChild(contactItem);
        currentContact = currentContact.next;
    }
}
