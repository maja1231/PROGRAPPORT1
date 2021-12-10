function updateUser(){
    var oldEmail = localStorage.getItem("user");
    oldEmail = JSON.parse(oldEmail) 

    var email = document.getElementById("newEmail").value; //Hente den nye email brugeren skriver
    var password = document.getElementById("newPassword").value; //Hente det nye password brugeren skriver


    //Laver en opdateret bruger

    const updateUser = {email: email, password: password, oldEmail: oldEmail.email};
    const Update = {email: email, password: password};
    fetch("http://localhost:8080/users/update", {
        method: "PUT", //Benytter af HTTP request PUT
        headers: {
            "Content-Type": "application/json", //Vores body vil være i form af JSON
        },
        body: JSON.stringify(updateUser), //Gør JSON objekt til string, så serven kan forstå det
    })
    .then((response) => response.json())
    .then((response) => {
        if (response) {
                localStorage.setItem("user", JSON.stringify(Update))
                location.href = "/index.html";
            }         
        })
    .catch(() => {
        window.alert("Fejl");
    });
};
