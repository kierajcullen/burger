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
$.ajax("/api/burgers/", {
  type: "POST",
  data: addBurger,
}).then(function () {
  console.log("Update Burger");
  location.reload();
});
// Add function to devour the burger - put
$(".delete").on("click", function (event) {
  // Prevent default on submit
  event.preventDefault();
  console.log("click");

  let id = $(this).attr("data-id");

  // Sending POST request
  $.ajax("/api/burgers/" + id, {
    type: "DELETE",
    //data: addBurger
  }).then(function () {
    console.log("Delete Burger");

    location.reload();
  });
});
$(".devour").on("click", function (event) {
  // Prevent default on submit
  event.preventDefault();
  console.log("click");

  let id = $(this).attr("data-id");
  let devouredBurger = $(this).attr("data-devoured");
  let newBurger = devouredBurger == 0 ? 1 : 0;
  console.log(devouredBurger, devour);
  let newStart = {
    devoured: newBurger,
  };
  // Sending POST request
  $.ajax("/api/burgers/" + id, {
    type: "PUT",
    data: newStart,
  }).then(function () {
    console.log("Delete Burger");

    location.reload();
    console.log(devouredBurger, devour);
  });
});
