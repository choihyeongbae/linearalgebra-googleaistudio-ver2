import { Movie } from './types';

// A curated list of movies with "subjective" scores for Action, Story, and Visuals (scale 1-10)
export const movieDatabase: Movie[] = [
  {
    id: 1,
    title: "The Dark Knight",
    year: 2008,
    director: "Christopher Nolan",
    genres: ["Action", "Crime", "Drama"],
    description: "Batman raises the stakes in his war on crime when the Joker creates chaos.",
    vectors: { action: 9, story: 9, visual: 8 }
  },
  {
    id: 2,
    title: "Inception",
    year: 2010,
    director: "Christopher Nolan",
    genres: ["Sci-Fi", "Action"],
    description: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea.",
    vectors: { action: 8, story: 9, visual: 10 }
  },
  {
    id: 3,
    title: "The Grand Budapest Hotel",
    year: 2014,
    director: "Wes Anderson",
    genres: ["Adventure", "Comedy"],
    description: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy.",
    vectors: { action: 4, story: 7, visual: 10 }
  },
  {
    id: 4,
    title: "Mad Max: Fury Road",
    year: 2015,
    director: "George Miller",
    genres: ["Action", "Adventure"],
    description: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland.",
    vectors: { action: 10, story: 5, visual: 10 }
  },
  {
    id: 5,
    title: "Parasite",
    year: 2019,
    director: "Bong Joon Ho",
    genres: ["Thriller", "Drama"],
    description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    vectors: { action: 3, story: 10, visual: 8 }
  },
  {
    id: 6,
    title: "The Godfather",
    year: 1972,
    director: "Francis Ford Coppola",
    genres: ["Crime", "Drama"],
    description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    vectors: { action: 5, story: 10, visual: 7 }
  },
  {
    id: 7,
    title: "Avengers: Endgame",
    year: 2019,
    director: "Anthony & Joe Russo",
    genres: ["Action", "Sci-Fi"],
    description: "After the devastating events of Infinity War, the universe is in ruins. The Avengers assemble once more.",
    vectors: { action: 10, story: 6, visual: 9 }
  },
  {
    id: 8,
    title: "Eternal Sunshine of the Spotless Mind",
    year: 2004,
    director: "Michel Gondry",
    genres: ["Romance", "Sci-Fi"],
    description: "When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories.",
    vectors: { action: 2, story: 10, visual: 8 }
  },
  {
    id: 9,
    title: "Interstellar",
    year: 2014,
    director: "Christopher Nolan",
    genres: ["Sci-Fi", "Drama"],
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    vectors: { action: 6, story: 8, visual: 10 }
  },
  {
    id: 10,
    title: "John Wick",
    year: 2014,
    director: "Chad Stahelski",
    genres: ["Action", "Thriller"],
    description: "An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took everything from him.",
    vectors: { action: 10, story: 4, visual: 7 }
  },
  {
    id: 11,
    title: "Spirited Away",
    year: 2001,
    director: "Hayao Miyazaki",
    genres: ["Animation", "Adventure"],
    description: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits.",
    vectors: { action: 4, story: 9, visual: 10 }
  },
  {
    id: 12,
    title: "Pulp Fiction",
    year: 1994,
    director: "Quentin Tarantino",
    genres: ["Crime", "Drama"],
    description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    vectors: { action: 7, story: 9, visual: 7 }
  },
  {
    id: 13,
    title: "1917",
    year: 2019,
    director: "Sam Mendes",
    genres: ["War", "Drama"],
    description: "April 6th, 1917. As a regiment assembles to wage war deep in enemy territory, two soldiers are assigned to race against time and deliver a message.",
    vectors: { action: 8, story: 6, visual: 10 }
  },
  {
    id: 14,
    title: "Her",
    year: 2013,
    director: "Spike Jonze",
    genres: ["Romance", "Sci-Fi"],
    description: "In a near future, a lonely writer develops an unlikely relationship with an operating system designed to meet his every need.",
    vectors: { action: 1, story: 9, visual: 8 }
  },
  {
    id: 15,
    title: "Blade Runner 2049",
    year: 2017,
    director: "Denis Villeneuve",
    genres: ["Sci-Fi", "Action"],
    description: "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard.",
    vectors: { action: 7, story: 8, visual: 10 }
  },
  {
    id: 16,
    title: "The Matrix",
    year: 1999,
    director: "Lana & Lilly Wachowski",
    genres: ["Sci-Fi", "Action"],
    description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    vectors: { action: 9, story: 8, visual: 9 }
  },
  {
    id: 17,
    title: "La La Land",
    year: 2016,
    director: "Damien Chazelle",
    genres: ["Comedy", "Drama", "Music"],
    description: "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.",
    vectors: { action: 2, story: 7, visual: 9 }
  },
  {
    id: 18,
    title: "Gladiator",
    year: 2000,
    director: "Ridley Scott",
    genres: ["Action", "Adventure"],
    description: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    vectors: { action: 9, story: 8, visual: 8 }
  },
  {
    id: 19,
    title: "Whiplash",
    year: 2014,
    director: "Damien Chazelle",
    genres: ["Drama", "Music"],
    description: "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing.",
    vectors: { action: 5, story: 9, visual: 6 }
  },
  {
    id: 20,
    title: "Dune: Part One",
    year: 2021,
    director: "Denis Villeneuve",
    genres: ["Sci-Fi", "Adventure"],
    description: "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future.",
    vectors: { action: 7, story: 8, visual: 10 }
  },
  {
    id: 21,
    title: "Oldboy",
    year: 2003,
    director: "Park Chan-wook",
    genres: ["Action", "Mystery"],
    description: "After being kidnapped and imprisoned for fifteen years, Oh Dae-Su is released, only to find that he must find his captor in five days.",
    vectors: { action: 9, story: 9, visual: 9 }
  },
  {
    id: 22,
    title: "Before Sunrise",
    year: 1995,
    director: "Richard Linklater",
    genres: ["Romance", "Drama"],
    description: "A young man and woman meet on a train in Europe, and wind up spending one evening together in Vienna.",
    vectors: { action: 1, story: 10, visual: 5 }
  },
  {
    id: 23,
    title: "Top Gun: Maverick",
    year: 2022,
    director: "Joseph Kosinski",
    genres: ["Action", "Drama"],
    description: "After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past.",
    vectors: { action: 10, story: 6, visual: 9 }
  },
  {
    id: 24,
    title: "Spider-Man: Into the Spider-Verse",
    year: 2018,
    director: "Bob Persichetti",
    genres: ["Animation", "Action"],
    description: "Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions.",
    vectors: { action: 9, story: 8, visual: 10 }
  },
  {
    id: 25,
    title: "Schindler's List",
    year: 1993,
    director: "Steven Spielberg",
    genres: ["Biography", "Drama"],
    description: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce.",
    vectors: { action: 4, story: 10, visual: 8 }
  }
];