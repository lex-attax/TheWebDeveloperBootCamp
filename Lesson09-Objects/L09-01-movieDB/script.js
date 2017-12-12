var movies = [
    {
        title: "Star Wars",
        rating: 4.5,
        hasWatched: true
    },
    {
        title: "Dark Knight",
        rating: 5,
        hasWatched: true
    },
    {
        title: "JusticeLeague",
        rating: 2,
        hasWatched: false
    }
]

movies.forEach(function (movie) {
    console.log(buildString(movie))
})

function buildString(movie) {
    var result = "You have "
    if (movie.hasWatched) {
        result += "watched"
    } else {
        result += "not seen "
    }
    result += "\"" + movie.title + "\" - "
    result += movie.rating + " stars"
    return result
}
