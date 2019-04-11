// Check off Specific Todos By Clicking
$('ul').on('click', 'li', function () {
  $(this).toggleClass('completed')
})

// Click on X to delete Todo
$('ul').on('click', 'span', function (e) {
  $(this).parent().fadeOut(500, function () {
    // this $(this) referes to the parent (li)
    $(this).remove()
  })
  event.stopPropagation()
})

$('input[type="text"]').keypress(function (e) {
  // check for enter key
  if (e.which === 13) {
    // grabbing new todo text from input
    var todoText = $(this).val()
    // clear input
    $(this).val('')
    // create a enw li and add to ul
    $('ul').append('<li><span><i class="fas fa-trash-alt"></i></span> ' + todoText + '</li>')
  }
})

$('.fa-plus').click(function () {
  $('input[type="text"]').fadeToggle();
})