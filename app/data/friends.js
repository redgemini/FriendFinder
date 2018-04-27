//You should save your application's data inside of app/data/friends.js as an array of objects.
//Each of these objects should roughly follow the format below.
//Determine the user's most compatible friend using the following as a guide:
//Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
//With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.
//Example:
//User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
//User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
//Total Difference: 2 + 1 + 2 = 5
//Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both 5-3 and 3-5 as 2, and so on.
//The closest match will be the user with the least amount of difference.

var friends = [
  {
    name: "Penny",
    photo: "..data/images/penny.jpg",
    scores: ["5", "4", "4", "4", "5", "4", "2", "5", "1", "3"]
  },
  {
    name: "Leonard Hofstadter",
    photo: "..data/images/leonard.jpg",
    scores: ["4", "2", "5", "1", "3", "2", "2", "1", "3", "2"]
  },
  {
    name: "Sheldon Cooper",
    photo: "..data/images/sheldon.jpeg",
    scores: ["1", "2", "2", "4", "1", "1", "3", "2", "5", "5"]
  },
  {
    name: "Howard Wolowitz",
    photo: "..data/images/howard.jpg",
    scores: ["3", "3", "4", "2", "2", "1", "3", "2", "2", "3"]
  },
  {
    name: "Raj Koothrappali",
    photo: "..data/images/raj.jpeg",
    scores: ["4", "3", "4", "1", "5", "2", "5", "3", "1", "4"]
  },
  {
    name: "Bernadette Rostenkowski",
    photo: "..data/images/bernadette.jpg.jpg",
    scores: ["3", "4", "2", "3", "2", "2", "3", "2", "4", "5"]
  }
];

//Export the array to other files using require
module.exports = friends;
