# Twitter-Clone


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
