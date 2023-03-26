class Movie {
    constructor(title,Production,Rating)
    {
        this.title = title;
        this.Production = Production;
        this.Rating = Rating;
    }
   getPG(){
    }
}
let movie1 = new Movie("Casino Royale","Eon Productions","PG13")
console.log(movie1.title);
console.log(movie1.Production);
console.log(movie1.Rating);
