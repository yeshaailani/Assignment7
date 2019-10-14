//STEP 1
console.log("1");
var favmovies = ["Avengers","BatMan","Joker","SpiderMan","IronMan"];
console.log(favmovies[1]);

//STEP 2
console.log("2");
var movies = new Array(5);
for (var i = 0; i < favmovies.length; i++) {
    movies[i] = favmovies[i];
}
console.log(movies[0]);

//STEP 3
console.log("3");
movies.splice(2, 0, "SuperMan");
console.log(movies.length);

//STEP 4
console.log("4");
var movies = [];
for (var i = 0; i < favmovies.length; i++) {
    movies.push(favmovies[i]);
}
delete movies[0];
console.log(movies);

//STEP 5
console.log("5");
var moviesOne = ["Avengers","BatMan","Joker","SpiderMan","IronMan","SuperMan","Thor"]
for(var i = 0;i<moviesOne.length;i++)
{
    console.log(moviesOne[i])
}


//STEP 6
console.log("6");
for (i in moviesOne) {
    console.log(moviesOne[i]);
}

//STEP 7
console.log("7");
var sortedMovies = moviesOne.sort();
for (i in sortedMovies) {
    console.log(sortedMovies[i]);
}

//STEP 8
console.log("8");
var leastFavMovies = ["Grudge", "Incredibles", "The Ring"];
var moviesTwo = moviesOne;

console.log("\nMovies I like:\n\n" +moviesTwo.join("\n") +
            "\n\n Movies I regret watching: \n\n" +
            leastFavMovies.join("\n") +
            "\n\n");

//STEP 9
console.log("9");
var movies = moviesTwo.concat(leastFavMovies);
var reverseSort = movies.sort().reverse();

console.log(reverseSort.join("\n"));

//STEP 10
console.log("10");
console.log(reverseSort.pop());

