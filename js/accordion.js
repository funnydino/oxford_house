// Accordion:

$("[data-collapse]").on('click', function (event) {
  event.preventDefault();
  let $this = $(this);
  $this.toggleClass("active");
});

$("[data-collapse]").keypress(' ', function (event) {
  event.preventDefault();
  let $this = $(this);
  $this.toggleClass("active");
});