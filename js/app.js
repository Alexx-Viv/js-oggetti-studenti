var datiStudente = document.getElementById("dati-studente");

var student = {
  nome: "Alex",
  cognome: "Vivsenco",
  età: 21,
};

for (var key in student){
    datiStudente.innerHTML += "<li>" + key + " studente: " + student[key] + "</li>";
}