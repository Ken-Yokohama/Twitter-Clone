# Twitter-Clone
Full Stack Twitter Clone using React & Firebase

![Twitter Clone Logo](https://github.com/Ken-Yokohama/Twitter-Clone/blob/master/public/twitter-clone-logo.jpg?raw=true)

### Brief Summary
Twitter Clone is a full-stack social media web application similar to the popular website [Twitter](https://twitter.com/) created using React in the FrontEnd and Firebase to handle the Database, Authentication & Security. Here, users are able to post tweets, post media, comment, like, retweet, bookmark, chat, search, share as well as user specific services such as authentication and profile information updates. 

### Links:
- [Live Preview](https://ken-yokohama.github.io/Twitter-Clone)

<!-- Add Cover After Portfolio Image is Updated -->
<!-- ![Twitter Clone Cover Sample](https://github.com/Ken-Yokohama/Twitter-Clone/blob/master/public/twitter-clone-logo.jpg?raw=true) -->

### Features:
- Email and Token Based User Authentication
- Read, Write, Update and Delete Security Rules
- Profanity Filtering and Banned User Limits
- User Profile Information w/ Profile Avatar
- Search Query and filtering
- Global Chat Rooms
- Saved Bookmarks
- Reminders & To-Do Lists

### Version Logs
V1.0 24 Feb '22 - Original Release

- Created React App
- Installed Npm Packages (MUI, Firebase, React-Icons & React-Router-Dom)
- Organized Files following Best Practices for Components, Containers & Pages
- Added Firebase Config & Environment Variables
- Added Authentication w/ Email using Firebase Auth
- Added Authentication w/ Google using Firebase Google Auth Provider
- Created "Registered Users" DB using Firestore Database
- Added Logic to Authentication which adds a user to the "Registered Users" DB if the user isn't found in the database
- Added Private Routes for Authenticated Users
- Created Sidebar Menu with MUI
- Added CSS for Sidebar Menu Buttons
- Added Routing for Sidebar Menu
- Sectioned Home Page into 3 components: Sidebar Menu, Feed & Widgets
- Set Sidebar and Widgets to be Sticky
- Created Tweetbox with MUI

V1.1 24 Feb '22 - Added Layout for Tweets, User Profile & Responsiveness

- Added Schema for Template, Button and Icons for Tweets
- Added CSS for Tweets
- Added Sidebar Profile & Modal
- Moved Logout Button to the Sidebar Profile Modal
- Added Vertical Scrolling to Sidebar if items overflow

V1.2 25 Feb '22 - Implemented FireStore Databse and Firebase Storage

- Added Tweet DB & Test Data from Firestore DB
- Fixed Logic and CSS for displaying images when imageSrc is found in Tweet DB
- Adjusted Tweet Buttons to fill extra space in container
- Added Logic for like button to Write and Delete likes when post is liked/unliked
- Added CSS Indicators for liked and unliked tweets
- Added File Select Filtering to only allow file types of Jpg, Jpeg, Png & Gif's
- Added a file size upload limitation of 5 mb
- Disabled Tweet from posting if there is no text input or if there is no file uploaded
- Added Tweet writting to firebase db or text input
- Added Dynamic Query Limits to show more tweets when users click Show More
- Hid the show more button when query shows the last tweet in tweet db
- Added Logic for Media Files to be uploaded in Tweets using Firebase Storage
- Disabled Tweet Button if there is a fileSelect Error

V1.3 28 Feb '22 - Added Delete Functionality for Authenticated Users

- Added CSS to display/hide tweet delete button based on user current user logged in
- Added logic to delete tweet from firestore database when tweet delete button is pressed

V1.4 2 Mar '22 - Added Widgets & Comments

- Added Widgets into its own jsx to be more modular
- Added logic to display the "comments modal" when comments of tweet is clicked
- Added Comments section for modal to display comment data

V1.5 3 Mar '22 - Added Tweet Comments & Search User Section

- Added CSS for Comments modal
- Created, Fetched & Handled Comment Data from Tweets Db
- Added Query for Comments to be displayed in ascending order based on when it was commented
- Added logic to comment/reply to a tweet and save into the Tweets Db
- Fixed a bug where tweeting without a media file would create an undefinied media file in firebase storage
- Added logic to let users delete their own comment if the authenticated user matches the comment user id
- Added and Implemented react-copy-to-clipboard npm package to copy image url from the share menu
- Added alerts for copying to clipboard and adding to bookmarks
- Added logic to save tweets into a Bookmark Collection for each individual user
- Moved userId to parent file to be more accessible throughout the branch
- Refactored pull requests for Bookmarks
- Added logic and CSS to display users Bookmarks Db
- Added Remove Bookmark Button and Tooltip
- Added Search Input and Dropdown Suggestions for Explore Section
- Added Profile Navigation for each Registered User
- Fixed Routing for Explore Section
- Added CSS & Logic to the "Show More Tweets" button in the Explore Section
- Added logic for Profile Searching
- Added ToolTip for Tweet Delete Button
- Fixed a bug where switching from one profile to another doesn't re-render the profile page

V1.6 3 Mar '22 - Added Tweet Comments & Search User Section
- Added Newly Created Users in the Notifications Section
- Added CSS and Routing for Chat Rooms
- Added Chat Box CSS
- Added CSS for Chat Messages
- Fixed CSS to display dates more cleanly using localeTimeString
- Added Queries to sort the chatroom by latest message
- Added Database for ChatRooms 1,2,3 & 4
- Fixed a Bug where entering a Chat Room doesn't scroll down to the bottom of the chat

V1.7 4 Mar '22 - Added Chat Rooms and Notification Section
- Added a Notifications Section which displays Newly Created Users
- Added CSS Styles and Routes for Chat Rooms
- Added Conditional CSS for Chat Messages
- Refactored CSS to display shorthand dates using localeTimeString
- Added query to sort chatroom messages by latest message
- Added database for Chat Rooms 1, 2, 3 & 4
- Fixed a bug where entering a chat room doesn't scroll to the bottom of the chat

V1.8 8 Mar '22 - Refactoring Registered User Data
- Refactored the SignInWithGoogle function to store the UID of New Users as the Document ID for easier data parsing
- Refactored the Register User with Email function to the store the UID of New Users as the Document ID for easier data parsing
- Added Queries to sort the Registered Users based on date created

V1.9 9 Mar '22 - Added Lists Section
- Added CSS Styling for Lists Section
- Created CRUD functions for Reminders List
- Added Firebase Security Rules to Scope Users CRUD functions only to the Reminders List of their own Profile
- Added Query to order the reminder list by date added
- Added DB for Retweet Button
- Fixed a bug where the explore page threw an error due to the retweets not being assigned

V1.10 10 Mar '22 - Added User Profile Pictures/Avatars
- Added Profile Pictures to each User in the Users DB
- Added Modal to Update Pofile Pictures
- Added User Profile Picture to Sidebar
- Added User Profile Picture to Each Tweet
- Added User Profile Picture in TweetBox- 
- Added Security Rules to Firestore DB to only allow updates on Profile Pictures of their own Profile

V1.11 11 Mar '22 - Added Responsiveness part 1
- Converted the Sidebar Options to be Mobile Responsive
- Converted each Tweet to be Mobile Responsive 

V1.12 12 Mar '22 - Added Responsiveness part 2
- Converted Tweet Header and Page Headers to be Mobile Responsive
- Converted the Chat Home Page to be Mobile Responsive
- Converted the text inside tweets to be Mobile Responsive using wordBreak

V1.13 14 Mar '22 - Added Profanity Filter, Banned Users & Additional Responsiveness (LIVE DEPLOYMENT DATE)
- Added Profanity Filter using npm bad-words
- Added Banned Users DB
- Converted Comments to be Mobile Responsive
- Converted Notifications Section to be Mobile Responsive
- Added Navigation for Tweet Button w/ ToolTip
- Refactored Window Refresh when changing profile picture
- Fixed a bug where routing doesn't properly work, to fix this I used HashRouter instead of BrowserRouter
- LIVE DEPLOYMENT
