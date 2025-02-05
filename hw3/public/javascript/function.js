// Daniel Le
$("#orderButton").click(function() {
    // get the values for each input
    var notes = $("textarea").val().toLowerCase();
    var quantity = $("select").val();
    var topping = $("input[name='topping']:checked").parent().text();

    // check if notes contain "vegan"
    if (notes.includes("vegan")) {
      alert("Warning: The cheesecakes contain dairy.");
    } 
    else {
       // replace content with order information
      $(".form-container").html(
      "<p>Thank you! Your order has been placed.</p>" +
      "<p>Topping: " + topping + "</p>" +
      "<p>Quantity: " + quantity + "</p>" +
      "<p>Notes: " + notes + "</p>"
      );
    }
  });

    $(".dropdown-content a").click(function() {
      // get the word that was clicked
      var selectedMonth = $(this).attr("data-month");

      // replace word at placeholder
      $(".dropbtn").text(selectedMonth);
    });