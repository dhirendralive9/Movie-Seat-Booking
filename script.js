var container = document.querySelector('.container');
var seats = document.querySelectorAll('.row .seat:not(.occupied)');
var count = document.getElementById('count');
var total = document.getElementById('total');
var movieSelect = document.getElementById('movie');
// selecting all the ids and classes required.

var ticketPrice = +movieSelect.value;  //Converting to integer

// Save Selected movie index

setMovieData = (movieIndex,moviePrice) =>{
    localStorage.setItem('selectedMovieIndex',movieIndex);
    localStorage.setItem('selectedMoviePrice',moviePrice);

}

// to update total and count
updateSelectedCount = () =>{
   var selectedSeats = document.querySelectorAll('.row .seat.selected');

   const seatsIndex = [...selectedSeats].map((seat)=>
       [...seats].indexOf(seat));

   localStorage.setItem('selectedSeats',JSON.stringify(seatsIndex));

   var selectedSeatsCount = selectedSeats.length;
   count.innerText = selectedSeatsCount;
   total.innerText = selectedSeatsCount*ticketPrice;
   
}
// /movie selector event listener 

movieSelect.addEventListener('change',(e)=>{
    ticketPrice = +e.target.value;
    setMovieData(e.target.selectedIndex,e.target.value);
    updateSelectedCount();
});





//Event Listener for Seats 
container.addEventListener('click',(e)=>{
     if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
         e.target.classList.toggle('selected');
     }

     updateSelectedCount();

});  