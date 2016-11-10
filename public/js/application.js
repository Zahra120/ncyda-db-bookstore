$(document).ready(function() {
  $('.ny-book-delete-button').on('click', function() {
    console.log('clicks');
    var id = $(this).attr('data-book');
    $.ajax('/books/' +  id, {
      method: 'DELETE'
    });
  });  
});
