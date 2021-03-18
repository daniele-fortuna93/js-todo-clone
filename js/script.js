// 1. Lista cose da fare
var todoThings = [
  "Vestirsi",
  "Prendere il caffè",
  "Allenarsi",
  "Doccia",
  "Preparare pranzo"
];
var cloneList = $('.template li'); // Elemento da clonare
var todoList = $('.todo_list'); // Elemento a cui aggiungere l'elemento clonato

// 2. Inserimento cose da fare
for (var i = 0; i < todoThings.length; i++) {
  clonaAggiungi(cloneList.clone(),todoThings[i],todoList);
}
// for (var i = 0; i < todoThings.length; i++) {
//   var cloneList = $('.template li').clone(); // Clono l'elemento che dovrò inserire nella pagina
//   cloneList.prepend(todoThings[i]);  // Aggiungo i valori all'elemento clonato
//   $('.todo_list').append(cloneList); // Inserisco l'elemento clonato nella pagina
// }

// 3. Evento al click
$('.todo_list').on('click','.todo_list-delete', // Sempre in ascolto anche per elementi aggiunti dopo il caricamento della pagina
  function(){

    $(this).fadeOut(400,
      function () { //Effetto fadeOut 
      $(this).parent().remove();
      }
    );
  }
);

$('#add_list').keydown(function (event) {

  if ( event.which == 13 ) {
    var addThing = $(this).val(); // Prendo il contenuto dell'input text
    if ( addThing != "" ) { // Controllo che non sia vuoto
      addThing = addThing[0].toUpperCase() + addThing.substring(1); // Trasformo la prima letterea in maiuscolo
      // var cloneList = $('.template li').clone(); // Clono l'elemento che dovrò inserire nella pagina
      // cloneList.prepend(addThing); // Aggiungo i valori all'elemento clonato
      // $('.todo_list').append(cloneList); // Inserisco l'elemento clonato nella pagina
      clonaAggiungi(cloneList.clone(),addThing,todoList);
      $(this).val(""); // Pulisco l'input text

    }
  }
});

// Funzioni
// Funzione al quale passo 3 argomenti:
// Il primo è l'elemento clonato.
// Il secondo è l'elemento da aggiungere all'elemento clonato.
// Il terzo è l'elemento a cui andrà aggiunto l'elemento clonato

function clonaAggiungi(elementoClonato, elementoDaAggiungere, elementoPadre) {
  var clonato = elementoClonato;
  clonato.prepend(elementoDaAggiungere);
  elementoPadre.append(clonato);
}
