// Popovers

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
const popoverList = [...popoverTriggerList].map((popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl));

const popover = new bootstrap.Popover(".popover-dismiss", {
  trigger: "focus",
});

// Scroll

$(window).scroll(function () {
  var wScroll = $(this).scrollTop();

  // Portfolio
  if (wScroll > $(".portfolio").offset().top - 250) {
    $('.portfolio').each(function (i)) {
      setTimeout(function (s) {
        $('.portfolio .portfolio-container').eq(i).addClass('fall');
      }, 300 * (i + 1));
    }
  }
});

// // Portfolio
// if (wScroll > $(".hobby").offset().top - 250) {
//   $(".hobby .thumbnail").each(function (i) {
//     setTimeout(function (s) {
//       $(".hobby .thumbnail").eq(i).addClass("muncul");
//     }, 300 * (i + 1));
//   });
// }
