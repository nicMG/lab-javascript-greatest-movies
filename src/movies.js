// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors (arr) {
  let directors = arr.map((elem) => {
    return elem.director
  })
  return directors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  let dramas = arr.filter((elem) => {
    return elem.director == "Steven Spielberg" && elem.genre.includes("Drama")
  })
    return dramas.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  if(arr.length == 0){
    return 0
  }
  else{
  let total = arr.reduce((sum, elem, index)=>{
    if(!elem.score){
      return sum
    }
    else{
    return sum + elem.score
    }
  },0)
  return +((total / arr.length).toFixed(2))
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr){
  let dramas = arr.filter((elem) => {
    if(elem.genre.includes("Drama")){
    return elem
    }
  })
  
  let total = dramas.reduce((sum,elem) => {
    return sum + elem.score
  },0)
  return +((total / dramas.length).toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  let clone = JSON.parse(JSON.stringify(arr))
  
  clone.sort((first, second) => {
    if(first.year > second.year){
      return 1
    }
    else if(first.year < second.year){
      return -1
    }
    else{
        if(first.title > second.title){
          return 1
        }
        else if(first.title < second.title){
          return -1
        }
        else{
          return 0
        }
    }
  })
  return clone
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  let clone = JSON.parse(JSON.stringify(arr))
  
  clone.sort((first, second) =>{
    if(first.title > second.title){
      return 1
    }
    else if(first.title < second.title){
      return -1
    }
    else{
      return 0
    }
  })
  
  return clone.map((elem) => {
    return elem.title
  }).slice(0,20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
