  //Slet item
  document.getElementById("delete").addEventListener("submit", (event) => {
    event.preventDefault();
  
    const item = JSON.parse(localStorage.getItem("item"));
  
    fetch("http://localhost:8080/items/delete", {
      method: "DELETE", //Benytter af HTTP request DELETE
      headers: {
        "Content-Type": "application/json", //Vores body vil være i form af JSON
      },
      body: JSON.stringify(item), //Gør JSON objekt til string, så serven kan forstå det
    })
      .then((response) => response.json())
      .then((response) => {
        if (response) {
          localStorage.removeItem("item");
          location.href = "/items.html";
        }
      })
      .catch(() => {
        window.alert("Der skete en fejl");
      });
  });