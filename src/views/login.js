//Her vil login blive oprettet 
document.addEventListener("DOMContentLoaded", (event) => {
  const user = localStorage.getItem("user");
  if (user) {
    location.href = "/";
  }

  document.getElementById("form").addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const user = {
      email: email,
      password: password,
    };

    fetch("http://localhost:8080/users/login", {
      method: "POST", //HTTP request POST metoden 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response) {

          
          localStorage.setItem("user", JSON.stringify(user));
          location.href = "/"; //Hvis oplysningerne er rigtige vil vi blive hørt videre til index.js (Brugerens forside)
        } else {
          window.alert("Oplysninger forkert"); //Hvis brugeren ikke eksisterer vil dette komme frem.
        }
      })
      .catch(() => {
        window.alert("Der skete en fejl");
      });
  });
});
