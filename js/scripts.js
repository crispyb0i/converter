/*var convertFahrenheightToCelcius = function() {
return ((parseInt(prompt("Type the fahrenheight that you want to convert to Celcius"))-32)*5/9)
}

convertFahrenheightToCelcius()

var convertCelciusToFahrenheight = function() {
return ((parseInt(prompt("Type the celcius that you want to convert fahrenheight"))*9)/5+32)

}

convertCelciusToFahrenheight()*/

var convertGallonsToLiters = function(input) {
   return input*3.785411784;
}

// convertGallonsToLiters();


// var convertLitersToGallons = function() {
//    alert(parseFloat(prompt("Type in the liters you want to convert into gallons")/3.785411784))
// }

$(document).ready(function(){
  $('#gallonsToLiters').submit(function(event){
    var gallons = parseInt($("#gallon").val());
    gallons = convertGallonsToLiters(gallons);
    $('#answer').text(gallons);
    event.preventDefault();
  });
});
