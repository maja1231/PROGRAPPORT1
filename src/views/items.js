document.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById("formVare").addEventListener("submit", (event) => {
      event.preventDefault();

      //Laver variabel med vare + varekategori + pris og value vil være det brugeren skriver/ den kategori de vælger
      const vare = document.getElementById("vare").value;
      const vareKategori = document.getElementById("vareKategori").value;
      const pris = document.getElementById("pris").value;
  
      const item = {
        vare: vare,
        vareKategori: vareKategori,
        pris: pris
      };
  
      fetch("http://localhost:8080/item/createitem", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      })
        .then((response) => response.json())
        .then((response) => {
          if (response) {
            location.href = "/itemsSell.html"
          }
        })
        .catch(() => {
          window.alert("Der skete en fejl");
        });
    });
});

 //Tilføj billede af vare 
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
 

