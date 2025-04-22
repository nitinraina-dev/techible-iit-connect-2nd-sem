// const headers = document.querySelectorAll('.accordion-header');

// headers.forEach(header => {
//   header.addEventListener('click', () => {
//     const item = header.parentElement;

//     // Close all open items
//     document.querySelectorAll('.accordion-item').forEach(i => {
//       if (i !== item) i.classList.remove('active');
//     });

//     // Toggle current item
//     item.classList.toggle('active');
//   });
// });



const accordion = document.querySelector('.accordion');

accordion.addEventListener('click', function (e) {
  if (e.target.classList.contains('accordion-header')) {
    const clickedItem = e.target.parentElement;

    // Close all other open items
    document.querySelectorAll('.accordion-item').forEach(item => {
      if (item !== clickedItem) {
        item.classList.remove('active')
      };
    });

    // Toggle clicked item
    clickedItem.classList.toggle('active');
  }
});
