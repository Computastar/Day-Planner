# Module 7: Day Pplanner

## Overview

To create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

The criteria specified to use the [Moment.js](https://momentjs.com/) library to work with date and time. After consultation with the tutor, it was decided that any Date/Time library would be allowed. Given Moment.js is no longer supported I decided to go with [dayjs.js](https://day.js.org). I initially thought that dayjs would be simpler to use, I got the comparisons working using standard equals, greater than, less than operators, but using the dayjs objects turned out to be a bit trickier. Firstly, you need to convert the string object to a standard js Date obj, this gives you the correct date format that dayjs is expecting, then you can create dayjs objects from there. Once you have the dayjs objects you can use the isSame, isBefore and isAfter dayjs functions for comparison. The functionality worked just fine using the normal comparison operators, but as this was an exercise in using third part APIs, I wanted to use the dayjs library, the documentation is not particularly comprehensive, and the fact it needed the correct date object passing in tripped me for a while. I did try to extend the functionality by making it multi day but for whatever reason the isBefore and isAfter function flipped on previous and future days, will investigate further when I have time, but after a day looking at it , it was more important to submit than add extra functions.


## User Story

```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```
 
## Acceptance Criteria

The app should:

* Display the current day at the top of the calender when a user opens the planner.
 
* Present timeblocks for standard business hours when the user scrolls down.
 
* Color-code each timeblock based on past, present, and future when the timeblock is viewed.
 
* Allow a user to enter an event when they click a timeblock

* Save the event in local storage when the save button is clicked in that timeblock.

* Persist events between refreshes of a page


## Grading Requirements

This challenge is graded based on the following criteria: 

### Technical Acceptance Criteria: 40%

* Satisfies all of the above acceptance criteria plus the following:

  * Uses a date utility library to work with date and time

### Deployment: 32%

* Application deployed at live URL

* Application loads with no errors

* Application GitHub URL submitted

* GitHub repo contains application code

### Application Quality: 15%

* Application user experience is intuitive and easy to navigate

* Application user interface style is clean and polished

* Application resembles the mock-up functionality provided in the homework instructions

### Repository Quality: 13%

* Repository has a unique name

* Repository follows best practices for file structure and naming conventions

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages

* Repository contains quality README file with description, screenshot, and link to deployed application

## Review

You are required to submit the following for review:

* The URL of the deployed application

* The URL of the GitHub repository, with a unique name and a README describing the project

---

**Website Screenshot**

![Day Planner!](/assets/images/05-third-party-apis-homework-demo.gif "Day Planner website")

## License

[MIT](https://choosealicense.com/licenses/mit/)

