
var config = {
    apiKey: "AIzaSyAnSzzaSjKQ92amytEsviTj6UcNAGod2u4",
    authDomain: "train-time-project-8c6cf.firebaseapp.com",
    databaseURL: "https://train-time-project-8c6cf.firebaseio.com",
    projectId: "train-time-project-8c6cf",
    storageBucket: "",
    messagingSenderId: "1032772909260"
};
firebase.initializeApp(config);
    var DB = firebase.database();


$("#add-train-btn").click(function (event) {
    event.preventDefault();

    var nameInput = $("#train-name-input").val().trim();
    var destInput = $("#destination-input").val().trim();
    var timeInput = $("#firstTrain-input").val().trim();
    var frequencyInput = $("#frequency-input").val().trim();
    console.log(nameInput, destInput, timeInput, frequencyInput);
     
    var newTrain = {
        train:nameInput,
        place:destInput,
        trainTime:timeInput,
        frequency:frequencyInput,

    }
    DB.ref().push(newTrain);
})