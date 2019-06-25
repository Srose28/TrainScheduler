var config = {
    apiKey: "AIzaSyAeLmpmxIj7Ddn2M1q8caHBMZQIawon13I",
    authDomain: "train-scheduler-hw-b5fb9.firebaseapp.com",
    databaseURL: "https://train-scheduler-hw-b5fb9.firebaseio.com",
    storageBucket: "train-scheduler-hw-b5fb9.appspot.com",
  };
  
  firebase.initializeApp(config);
  
  var database = firebase.database();
  
  $("#add-train-btn").on("click", function(event) {
    event.preventDefault();
  
    var trainName = $("#train-name-input").val().trim();
    var trainDestination = $("#destination-input").val().trim();
    var trainFrequency = moment($("#frequency-input").val().trim(), "MM/DD/YYYY").format("X");
    var trainArrival = $("#arrival-input").val().trim();
  
    var newTrain = {
      name: trainName,
      destination: trainDestination,
      frequency: trainFrequency,
      arrival: trainArrival
    };
  
    database.ref().push(newTrain);
  
    console.log(newTrain.name);
    console.log(newTrain.destination);
    console.log(newTrain.frequency);
    console.log(newTrain.arrival);
  
    alert("Train successfully added");
  
    $("#train-name-input").val("");
    $("#destination-input").val("");
    $("#frequency-input").val("");
    $("#arrival-input").val("");
  });
  
  database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());
  
    var trainName = childSnapshot.val().name;
    var trainDestination = childSnapshot.val().destination;
    var trainFrequency = childSnapshot.val().arrival;
    var trainArrival = childSnapshot.val().frequency;
  
    console.log(trainName);
    console.log(trainDestination);
    console.log(trainFrequency);
    console.log(trainArrival);
  
  
    
    var newRow = $("<tr>").append(
      $("<td>").text(trainName),
      $("<td>").text(trainDestination),
      $("<td>").text(trainFrequency),
      $("<td>").text(trainArrival),
    );
  
    
    $("train-table > tbody").append(newRow);
  });
  
