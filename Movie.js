// Class - Movie
// The class Movie is stated below.
//  An instance of class Movie represents a film. This class has the following three properties:

// title, which is a String representing the title of the movie
// studio, which is a String representing the studio that made the movie
// rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)

// a) Write a constructor for the class Movie, which takes a String representing the title of the movie, 
// A String representing the studio, and a String representing the rating as its arguments,
//  and sets the respective class properties to these values.

// b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

// c) Write a method getPG, which takes an array of base type Movie as its argument,
//  and returns a new array of only those movies in the input array with a rating of "PG". 
//  You may assume the input array is full of Movie instances. The returned array need not be full.

// d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, 
// the studio “Eon Productions”, and the rating “PG­13”


// Solution

class Movie
{
    constructor(Title,Studio,Rating)
    {
        this.title=Title;
        this.studio=Studio;
       
        if(Rating===undefined)
        {
            this.rating="PG";
        }
        else
        {
            this.rating=Rating;
        }
    }
    
 static getPG(x)
{
    if(x.rating=="PG")
    {
        arr.push(x.title);
         
    }
   
}

}


let movie1=new Movie("Casino Royale", "Eon Productions","PG-13");

let movie2=new Movie("Interstellar", "Paramount Productions","PG-13");

let movie3=new Movie("Joker", "Warner Bros.","R");

let movie4=new Movie("Avatar", "20th Century Fox");

let movie5=new Movie("Logan", "Village Roadshow Pictures","R");

var arr=[];

let i=[movie1,movie2,movie3,movie4,movie5];
for(let x of i)
{
(Movie.getPG(x));
}
console.log("Movies in the input array with a rating of PG");
console.log(arr);



console.log(movie1);
console.log(movie2);
console.log(movie3);
console.log(movie4);
console.log(movie5);
