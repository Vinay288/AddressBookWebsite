window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input', function () {
        if (name.value.length == 0) {
            textError.textContent = "";
            document.getElementById('submitButton').disabled = false;
            return;
        }
        try {
            (new Contact()).name = name.value;
            textError.textContent = "";
        } catch (e) {
            document.getElementById('submitButton').disabled = true;
            textError.textContent = e;
        }
    });
    const phoneNumber = document.querySelector('#phoneNumber');
    const PhoneNumberError = document.querySelector('.tel-error');
    phoneNumber.addEventListener('input', function () {
        if (phoneNumber.value.length == 0) {
            PhoneNumberError.textContent = "";
            document.getElementById('submitButton').disabled = true;
            return;
        }
        try {
            (new Contact()).phoneNumber = phoneNumber.value;
            PhoneNumberError.textContent = "";
        } catch (e) {
            document.getElementById('submitButton').disabled = true;
            PhoneNumberError.textContent = e;
        }
    });

    const zip = document.querySelector('#zip');
    const zipError = document.querySelector('.zip-error');
    zip.addEventListener('input', function () {
        console.log(phoneNumber);

        if (zip.value.length == 0) {
            zipError.textContent = "";
            document.getElementById('submitButton').disabled = true;
            return;
        }
        try {
            (new Contact()).zip = zip.value;
            if (zip.value && phoneNumber.value && name.value) {
                document.getElementById('submitButton').disabled = false;
            }
            zipError.textContent = "";
        } catch (e) {
            document.getElementById('submitButton').disabled = true;
            zipError.textContent = e;
        }
    });
});
const save = () => {
    createContact();
    createAndUpdateStorage();
}
function createContact() {
    let contact = new Contact();
    try {
        contact.name = getInputValueById('#name');
        contact.id = Math.floor(Math.random() * 100);
        contact.phoneNumber = getInputValueById("#phoneNumber");
        contact.address = getInputValueById('#address');
        contact.state = getInputValueById("#state");
        contact.city = getInputValueById("#city");
        contact.zip = getInputValueById("#zip");
    } catch (e) {
        console.log(e);
    }
    return contact;
}
const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
}

const createAndUpdateStorage = () => {
    let contactsList = JSON.parse(
        localStorage.getItem("ContactsList")
    );
    console.log(contactsList);

    if (contactsList) {

        contactsList.push(createContact());

    } else {
        contactsList = [createContact()];
    }
    localStorage.setItem(
        "ContactsList",
        JSON.stringify(contactsList)
    );
    console.log("fsffs");
    alert("updated contact details! total contacts are = " + contactsList.length);
};