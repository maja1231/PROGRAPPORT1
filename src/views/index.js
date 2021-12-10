document.addEventListener("DOMContentLoaded", (event) => {
  const user = localStorage.getItem("user");
  if (!user) {
    location.href = "/login.html";
  }

  //Slet bruger 
  document.getElementById("delete").addEventListener("submit", (event) => {
    event.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));

    fetch("http://localhost:8080/users/delete", {
      method: "DELETE", //Benytter af HTTP request DELETE
      headers: {
        "Content-Type": "application/json", //Vores body vil være i form af JSON
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response) {
          localStorage.removeItem("user");
          location.href = "/login.html";
        }
      })
      .catch(() => {
        window.alert("Der skete en fejl");
      });
  });
});


