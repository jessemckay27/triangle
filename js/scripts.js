//back-end

var triangleType = function(side1, side2, side3){
  var text;
  //not a triangle check
  if(side1 + side2 <= side3){
      text = "This is not a triangle";
      return text;
  }
  else if(side1 === side2 && side2 === side3){
      text = "This is an equilateral triangle.";
      return text;
  }
  else if(side1 === side2 && side1 != side3 || side1 === side3 && side1 != side2){
      text = "This is an isoceles triangle.";
      return text;
  }
  else if(side1 != side2 && side2 != side3){
      text = "This is a scalene triangle";
      return text;
  }
}


//front-end
$(document).ready(function(){
  $("#main-form form").submit(function(event){
      event.preventDefault();
      //alert("hey");
      var side1Input = parseInt($("#side1").val());
      var side2Input = parseInt($("#side2").val());
      var side3Input = parseInt($("#side3").val());

      var result = triangleType(side1Input, side2Input, side3Input);
      $("#result p").text(result);
   });
});
