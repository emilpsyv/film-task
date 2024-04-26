$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})






fetch('https://api.tvmaze.com/shows')
.then(res=>res.json())
.then(data=>{getFilms(data);
})


var film=document.getElementById("film-1");
function getFilms(films){
    film.innerHTML="";



    films.forEach(char=>{
        film.innerHTML+=

       `<div class="col-md-2">
        <img src="${char.image.medium}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title" style="color:white;>${char.name}</h5>
          <p class="card-text" style="color:white;>${char.imdb}</p>
          <p class="card-text" style="color:white;">${char.network.name}</p>
          <p class="card-text" >${char.language}</p>
          <a href="#" class="btn btn-primary">info</a>
        </div>
      </div>;`
    })
}