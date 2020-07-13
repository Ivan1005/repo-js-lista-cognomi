var cognomi = ["Marcello" , "Franci" , "Astella" , "Quadro"];

// FACCIO INSERIRE IL COGNOME AL CLIENTE
var cognome =prompt("Inserisci il tuo cognome");

// SISTEMO IL COGNOME COME LO VOGLIO
var Cognome = cognome.slice(0, 1).toUpperCase() + cognome.slice(1).toLowerCase();
// LO PUSHO NELL' ARRAY
cognomi.push(Cognome);
// ORDINO L'ARRAY ALFABETICAMENTE
cognomi.sort();

// CREO LA LISTA ORDINATA DI COGNOMI
for (var i = 0 ; i < cognomi.length ; i++){
  document.getElementById("lista").innerHTML += "<li>" + cognomi[i]+ "</li>" ;
}

// CREO IL CICLO PER TROVARE LA POSIZIONE DEL COGNOME
var posizione = -1;
var i =0;
while (i < cognomi.length && posizione ==-1) {
  if (Cognome == cognomi[i]) {
    posizione = ++i;
  }
  i++;
}

// STAMPO LA POSIZIONE 
document.getElementById("pos").innerHTML = "Il tuo cognome è nella posizione numero " + posizione + " della lista";
