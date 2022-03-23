var container = document.querySelector('.container');
var seats = document.querySelectorAll('.row .seat:not(.occupied)');
var count = document.getElementById('count');
var total = document.getElementById('total');
var movieSelect = document.getElementById('movie');
// selecting all the ids and classes required.

const ticketPrice = +movieSelect.value;  //Converting to integer


// to update total and count
updateSelectedCount = () =>{
   var selectedSeats = document.querySelectorAll('.row .seat.selected');
   var selectedSeatsCount = selectedSeats.length;
   count.innerText = selectedSeatsCount;
   total.innerText = selectedSeatsCount*ticketPrice;
   
}


//Event Listener for Seats 
container.addEventListener('click',(e)=>{
     if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
         e.target.classList.toggle('selected');
     }

     updateSelectedCount();

});  