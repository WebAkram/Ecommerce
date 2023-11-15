//  for li active class on current page
let navlinks = document.querySelectorAll(".ng");
navlinks.forEach((a) => {
  a.addEventListener("click", function () {
    navlinks.forEach((a) => a.classList.remove("active"));
    this.classList.add("active");
  });
});

//  ***** search navbar hover ***
$(document).ready(function () {
  $(".sea").click(function () {
    $("#search").fadeIn();
    $(".dis").css({ display: "block", "z-index": "1" });
  });
});

$(document).ready(function () {
  $(".dis").click(function () {
    $("#search").fadeOut();
    $(".dis").css("display", "none");
  });
});

$(document).ready(function () {
  $(".sea").click(function () {
    $(".sea").hide();
    $(".badge").hide();
    $(".gg").hide();
    $(".bi-person").hide();
    $("#none").hide();
    $(".des").show();
    $(".des").css("z-index", "1");
  });
});

$(document).ready(function () {
  $(".des").click(function () {
    $(".sea").show();
    $(".badge").show();
    $(".gg").show();
    $(".bi-person").show();
    $("#none").show();
  });
});

// init Isotope
var $grid = $(".collection-list").isotope({
  // options
});
// filter items on button click
$(".filter-button-group").on("click", "button", function () {
  var filterValue = $(this).attr("data-filter");
  resetFilterBtns();
  $(this).addClass("active-filter-btn");

  $grid.isotope({ filter: filterValue });
});

var filterBtns = $(".filter-button-group").find("button");
function resetFilterBtns() {
  filterBtns.each(function () {
    $(this).removeClass("active-filter-btn");
  });
}

//  timer deal of the week
intiTimer();
function intiTimer() {
  if ($(".timer").length) {
    var date = new Date();
    date.setDate(date.getDate() + 3);
    var target_date = date.getTime();
    // variables for these units
    var days, hours, minutes, seconds;
    var d = $("#day");
    var d = $("#hour");
    var d = $("#minute");
    var d = $("#second");
    setInterval(function () {
      // find the amount of the second between now and target
      var current_date = new Date().getTime();
      var seconds_left = (target_date - current_date) / 1000;

      // do some time calculations
      days = parseInt(seconds_left / 86400);
      seconds_left = seconds_left % 86400;

      hours = parseInt(seconds_left / 3600);
      seconds_left = seconds_left % 3600;

      minutes = parseInt(seconds_left / 60);
      seconds = parseInt(seconds_left % 60);
      // display unit
      d.text(days);
      d.text(hours);
      d.text(minutes);
      d.text(seconds);
    }, 1000);
  }
}

// feactured slider start
var swiper = new Swiper(".cart_swiper", {
  // slidesPerView: 4.7,
  speed: 800,
  loop: false,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      slidesPerGroup: 1,
    },

    480: {
      slidesPerView: 3,
      spaceBetween: 5,
      slidesPerGroup: 2,
    },

    768: {
      slidesPerView: 4,
      spaceBetween: 10,
      slidesPerGroup: 3,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 10,
      slidesPerGroup: 4,
    },
  },
});
// end feactured slider

// *** Review's Client ***
var swiper = new Swiper(".review-slide", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
  },
});

// *** Review's Client end ***

// blogs section

// blogs section end

//   back to top  Btn
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 550) {
      $("#topBtn").fadeIn();
    } else {
      $("#topBtn").fadeOut();
    }
  });

  $("#topBtn").click(function () {
    $("html ,body").animate({ scrollTop: 0 }, 600);
  });
});
