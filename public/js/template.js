// CONFIGURABLE SETTINGS FOR PROBLEM STATEMENT HERE

// Copy the url to the spreadsheet, but remove the "/edit#gid=0" and replace with "pubhtml"
// When making a new spreadsheet, remember to "Publish to Web" on the Google Sheet first or else you will get an error
// File > Publish to the Web > Okay

// EXAMPLE:
// var MILESTONES_SPREADSHEET = "https://docs.google.com/spreadsheets/d/11b6Zm5Pl4AnnAQMHn7yrvyrsDmojHRzsgPYeLrJR90c/pubhtml";
// var TOP_MATRIX_SPREADSHEET = "https://docs.google.com/spreadsheets/d/1eRPECxenheM2PjDvj5lNOboW9I8okZMvNdAYOuGBzso/pubhtml";

var MILESTONES_SPREADSHEET = "";
var TOP_MATRIX_SPREADSHEET = "";

// these labels must match the dropdown options in the matrix spreadsheet, or else it will break
// set these in Google Sheets by selecting Data > Data Validation > enter the problem labels inside,
// and theyll populate in the dropdown

// EXAMPLE:
// PROBLEM_LABELS = ["digital-divide","digital-literacy","enumeration","hard-to-count"];

PROBLEM_LABELS = [];


// Don't edit unless you're trying to do something different here
// You can add more functions after the matrix accordion if you want anything else to run on this specific landing page
// If you want it to run everywhere, drop it in main.js instead
// Actually execute the setup functions with these configurations (defined in main.js)
$(document).ready(function(){
    progressBarSetup(MILESTONES_SPREADSHEET);
    matrixAccordion(TOP_MATRIX_SPREADSHEET, PROBLEM_LABELS);
});