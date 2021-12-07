function updateUser(){
    var oldEmail = localStorage.getItem("user");
    oldEmail = JSON.parse(oldEmail)

    var email = document.getElementById("newEmail").value;
    var password = document.getElementById("newPassword").value;


    //Laver en opdateret bruger

    const updateUser = {email: email, password: password, oldEmail: oldEmail.email};
    const Update = {email: email, password: password};
    fetch("http://localhost:8080/users/update", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updateUser),
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
