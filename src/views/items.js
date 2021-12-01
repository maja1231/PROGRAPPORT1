window.addEventListener('load', function() {
    document.querySelector('input[type="file"]').addEventListener('change', function() {
        if (this.files && this.files[0]) {
            var img = document.querySelector('img');
            img.onload = () => {
                URL.revokeObjectURL(img.src);  
            }
  
            img.src = URL.createObjectURL(this.files[0]); 
        }
    });
  });
 


document.addEventListener("DOMContentLoaded", (event) => {
    const item = localStorage.getItem("item");
    if (item) {
      location.href = "/";
    }
  
    document.getElementById("form").addEventListener("submit", (event) => {
      event.preventDefault();

  
      const product = document.getElementById("product").value;
      const pris = document.getElementById("pris").value;
  
      const item = {
        product: product,
        pris: pris,
      };
  
      fetch("http://localhost:8080/views/items.html", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      })
        .then((response) => response.json())
        .then((response) => {
          if (response) {
            

            localStorage.setItem("item", JSON.stringify(item));
            location.href = "/";
          } else {
            window.alert("wup");
          }
        })
        .catch(() => {
          window.alert("Der skete en fejl");
        });
    });
  });