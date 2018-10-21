## Inspiration
We wanted to build a mobile game that involves getting outside and connecting users that otherwise wouldn't be, and we knew we wanted to use AI or machine learning. The idea progressed from an open-world AR game to an IRL adventure game, and found its final form in Seekr.

## What it does
Seekr is a mobile game that consists of user-created challenges. The challenge is as follows: given a photo and an area of play, find the exact location where the photo was taken and take a highly similar photo from the **same perspective**. Users will have to explore to find the secret location where the photo was taken, and if their photo is deemed similar enough to the original, they have defeated the challenge.

## How we built it
We used React Native and Expo to build a cross-platform application for both iOS and Android. The map that displays nearby challenges is created and displayed using the Google Maps API (from Google Cloud Platform). We use geolocation data to determine if the user is close to a challenge. The similarity between the original photo and the user's photo is judged by DeepAI's Image Similarity API.

## Challenges we ran into
One challenge we encountered was NPM was not behaving correctly when we were trying to get our environment set up. This led to some delays in the development process. Another challenge we encountered was that geolocation data is not as exact as we would like it to be, so we decided to give the user an inexact, relative location for the challenge (this makes the puzzle harder too!).

## Accomplishments that we're proud of
None of our teammates had used React Native before, so we are very proud that we were able to build such a complex application with many different functionalities in such a short time period.

We are also proud of the fact that we built an app that encourages people to be active and adventurous. The game encourages a change in perspective and connects people through beautiful scenery and adventure!

## What we learned
We obviously learned a ton about React.js and React Native, which we will definitely use and expand upon in the future. On top of this, we learned about how to integrate a map view into an app, as well as how to make conclusions about complex user data.

Our main takeaway from this project is learning how to work efficiently on a team. We brainstormed as a team, divided up the work, and learned how to learn and build something completely new together. 

## What's next for Seekr
There's still plenty to be done for Seekr, and we've got plenty of ideas for the future. Our first goal is to build a backend so we can store user data for our leaderboard and host the app in the cloud. This shouldn't prove too difficult as we intentionally built the app to easily support a backend architecture. Another goal is to improve the UX/UI to be more straightforward and look better. With React there's definitely room to improve this. We see this app being a fun activity for anyone to do anywhere, and we hope it gains a user base!
