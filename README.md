Chatting Application
=====================
Instructions to this assignment can be found [here](https://it3049c.github.io/coursework/labs/chatting-app).

## Checklist:
- [x] make sure the assignment checks pass
- [x] fill out the self evaluation and Reflection
- [x] submit the repository link on Canvas

## Self-Evaluation:

How many points out of 20 do you deserve on this assignment: 

Module 5:
I'd say 17/20 points. When I ran 'npm test', I noticed that it was skipping some tests (app-logic specifically). 
So until that test suite is fixed I'm not really sure where this lab stands in terms of grading. I tried
my best to make sure the content in the index.js file lined up with the assignment instructions.

Module 6:
I'd give myself 19/20 points. I assumed disabling message input just meant the footer (input box and send button), so I disabled that if there is no local storage with a key named 'name'. I realized that using the setItem() method updates the value for a key, so I just kept the 'save name' button instead of adding a dedicated 'update name' button.

## Self-Reflection:
<!-- Write your self-reflection under this line -->
Module 5:
I've always wondered how chatting applications worked so it's cool to catch a glimpse into the functionality of one.
This lab also introduced me to JSON, which I appreciate. I'm looking forward to the chatting application assignment next.

Module 6:
I knew of cookies and sessions prior to this week's module, but I didn't know much about local storage. It's cool to see how you can store objects locally and have it persist through page restarts/refreshes.

### How long it took me to finish this?
Module 5:
I worked on this a little bit over the afternoon, but in total I'd probably say an hour.

Module 6:
Adding the functionality to save names to local storage and hiding the message input probably took me less than 30 minutes in total.

## Discussion Questions:
1. What does the bootstrap `display-4` class do?
The Bootstrap 'display-4' class is Bootstrap's way to display different sized headings.