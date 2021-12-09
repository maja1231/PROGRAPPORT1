//"Når denne besked kommer, vil dette ske" --> Giver submit kanppen funktionialitet
document.addEventListener("DOMContentLoaded", (event) => {
  document.getElementById("form").addEventListener("submit", (event) => {
    event.preventDefault();

    //Laver variabel med email + password og value vil være det brugeren skriver
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    //Ved at indsætte værdier vil dette blive et JSON objekt
    const user = {
      email: email,
      password: password,
    };

    //Bruger fetch funktionen til at lave et "kald" til det linket localhost
    fetch("http://localhost:8080/users/create", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json", //Vores body vil være i form af JSON
      },
      body: JSON.stringify(user), //Gør JSON objekt til string, så serven kan forstå det
    })
      .then((response) => response.json()) //Laver et promise .then (Værdien der skal komme) 
                                          // --> Response svar fra serveren.
      .then((response) => { //Vores reponse er nu et JSON objekt.
        if (response) {
          location.href = "/login.html"; //Hvis bruger findes, 
                                        // --> vil brugeren blive ført videre til login siden.
        }
      })
      .catch(() => {
        window.alert("Der skete en fejl"); //Hvis brugeren fx allerede eksisterer, vil der her sige fejl.
      });
  });
});





