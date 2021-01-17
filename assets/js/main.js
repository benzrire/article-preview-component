$(function () {
  var card = $(".card");

  card.each(function (i) {
    var cardFooter = $(this).find(".card-footer"),
        btn = cardFooter.find("button.btn");

    btn.click(function (e) {
      e.preventDefault();

      cardFooter.toggleClass("active");
      cardFooter.find(".card-share").fadeToggle(200);
    });
  });
});