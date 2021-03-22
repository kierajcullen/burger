// hit the backend routes from burger_controller
$("#burger-btn").on("click", function (event) {
  event.preventDefault();
  // alert("hi");
  let burgerName = $("#add-burger").val().trim();
  $.post("/api/burgers", {
    burger_name: burgerName,
    // 0 means false, check
    devoured: 0,
  }).then((response) => {
    location.reload();
    console.log(response);
  });
});

// ajax method with put (look in the cat assignment public/js)
