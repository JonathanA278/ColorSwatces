$(document).ready(function () {

    $('.color-swatch').hover(function () {
      const newImage = $(this).data('image');
      const shoeCard = $(this).closest('.shoe-card');
      const shoeImage = shoeCard.find('.shoe-image');
      shoeImage.attr('src', newImage);
    });


    $('.shoe-card').hover(
      function () {
        $(this).css('background-color', '#f9f9f9');
      },
      function () {
        $(this).css('background-color', '#fff');
      }
    );
  });