// 1. Lista cose da fare
var todoThings = [
  "Vestirsi",
  "Prendere il caffè",
  "Allenarsi",
  "Doccia",
  "Preparare pranzo"
];

// 2. Inserimento cose da fare
for (var i = 0; i < todoThings.length; i++) {
  var cloneList = $('.template li').clone();
  cloneList.prepend(todoThings[i]);
  $('.todo_list').append(cloneList);
}

// 3. Evento al click
$('.todo_list').on('click','.todo_list-delete',
function(){
  $(this).parent().remove();
});

$('#add_list').keydown(function (event) {

  if ( event.which == 13 ) {
    var addThing = $(this).val();
    if ( addThing != "" ) {
      addThing = addThing[0].toUpperCase() + addThing.substring(1);
      var cloneList = $('.template li').clone();

      cloneList.prepend(addThing);

      $('.todo_list').append(cloneList);

      $(this).val("");

    }


  }
})
