function saveToLocalStorage(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const phonenumber = event.target.phonenumber.value;
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('phonenumber', phonenumber);
    const obj = {
        name,
        email,
        phonenumber
    }
    localStorage.setItem('userDetails',JSON.stringify (obj));
}

