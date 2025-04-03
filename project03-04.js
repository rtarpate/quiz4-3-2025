/*    JavaScript 7th Edition
      Chapter 3
      Project 03-04

      Application to write a list of customer reviews
      Author: Ashton Pate
      Date:   4/3/2025

      Filename: project03-04.js
*/

let reviewers = ["WillHa85", "GoldFry26", "Mittens41", "Tompkins8"];
let reviewType = ["P", "N", "", ""]
let stars = [5, 2, 1, 4];
let reviewDates = ["11/18/2024", "11/17/2024", "11/15/2024", "11/10/2024"];
let reviews = [
   "I've owned all of the Dance Off games from the beginning. I have lost 6 pounds since I started playing.",
   "A so-so release of this well-established game. Where this release fails is in the choreography. Many of the moves follow predictable patterns. I hope the next release improves the choreography .",
   "The installation was buggy and kept crashing my gaming console. I spent several hours on tech support with no solution to my problem. I finally returned it and got my money back. I wish I could give it a zero star rating.",
   "The latest version of Dance Off improves upon the 8th Edition only slightly; still is one of the best dance-style games on the market.",
];
let reviewTitles = ["My Favorite Workout Game", "Poor Choreography", "Buggy with Poor Tech Support", "Nice Improvement"];

//step 3:added function starImages
function starImages(rating)
{
      //step 4a: created variable for imageText
      let imageText = "";

      //step 4b: created for loop 
      for( let i = 1; i <= rating; i++)
      {
            //step 4c:
            imageText = imageText + "<img src = 'star.png' alt ='' >";


            

      }

      //step 4d: returns image text
      return imageText;

      //step 5:creates for loop
      for(let j = 1; j < reviewers.length; j++)
      {
            //step 6a: creates vairbel reviewCode
            let reviewCode = "";

            //step 6b: creates if else loop
            if(reviewType[i] == P)
            {
                  reviewCode += "<table class = 'prime'>";
            }
            else if (reviewType[i] == N)
            {
                  reviewCode += "<table class = 'new'>";
            }
            else 
            {
                  reviewCode += "<table>";
            }

            //step 6c: added HTML code to reivewCode varibael
            reviewCode += "<caption>" + reviewTitles[i] + "</caption>";

            reviewCode += "<tr><th>By</th><td>" + reviewers[i] + "</td></tr>";
          
            reviewCode += "<tr><th>Review Date</th><td>" + reviewDates[i] + "</td></tr>";
          
            reviewCode += "<tr><th>Rating</th><td>" + starImages(stars[i]) + "</td></tr>";
          
            reviewCode += "<tr><td colspan='2'>" + reviews[i] + "</td></tr>";
          
            reviewCode += "</table>";

            document.getElementsByTagName("article")[0].insertAdjacentElement("beforeend", reviewCode);
      }

    

}