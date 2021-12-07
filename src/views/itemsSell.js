  //Slet item
  document.getElementById("delete").addEventListener("submit", (event) => {
    event.preventDefault();
  
    const item = JSON.parse(localStorage.getItem("item"));
  
    fetch("http://localhost:8080/items/delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
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