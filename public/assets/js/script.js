$(document).ready(function() {

  function loadPage() {
    $("#burgerListDiv").empty();
    $("#devourButtonDiv").empty();
    $("#devouredBurgerDiv").empty();
    $.get("/burgers", function(data) 
    {
        for (let i of data)
        {
          var burgerRow = $("<div class='row center-block'>");
          burgerRow.append("<p>"+i.Name+"</p>")
          $("#burgerListDiv").append(burgerRow);
          var newRow = $("<div class='row center-block'>");
          newRow.append("<button class='devour_button' id='"+i.id+"'>Devour Me!</button>");
          $("#devourButtonDiv").append(newRow);
        }
    });
    $.get("/burgers/eaten", function(data) 
    {
        for (let i of data)
        {
          $("#devouredBurgerDiv").append("<p>"+i.Name+"</p>");
        }
    });
}

  loadPage();


$("#text-enter-button").on("click",function()
{
  console.log("In the enter function");
  event.preventDefault()
  addBurger();
});

  function addBurger()
  {
    console.log("Adding Burger");
    var name = $("#enter_text").val().trim();
    var burger = {name:name};
    $.post("/burgers/add", burger).then(location.reload());
    $("#enter_text").val(" ")
  }

  $(document).on("click", "button.devour_button",function()
    {
        var id = this.id;
        console.log(id);
        $.ajax({
            method: "PUT",
            url: "/burgers/devour/"+id,
            data:{devoured:true}
        }).then(location.reload());
    
    });

});
