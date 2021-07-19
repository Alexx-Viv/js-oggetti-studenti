var studentList = [
  {
    nome: "Alex",
    cognome: "Vivsenco",
    età: 21,
  },
  {
    nome: "Marco",
    cognome: "Corbo",
    età: 22,
  },
  {
    nome: "Andrea",
    cognome: "Conti",
    età: 22,
  },
  {
    nome: "Nico",
    cognome: "Gulino",
    età: 21,
  },
  {
    nome: "Luca",
    cognome: "Giaccone",
    età: 21,
  },
];

var datiStudente = document.getElementById("dati-studente");

for(var i = 0; i < studentList.length; i++){
    datiStudente.innerHTML += "<li>" + "nome studente: " + studentList[i].nome + "</li>";
    datiStudente.innerHTML += "<li>" + "cognome studente: " + studentList[i].cognome + "</li>";
    datiStudente.innerHTML += "<br>"
}