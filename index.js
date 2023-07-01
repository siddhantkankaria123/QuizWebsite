var questions_array = [
  "What does the abbreviation HTML stand for?",
  "How many sizes of headers are available in HTML by default?",
  "What is the smallest header in HTML by default?",
  "What are the types of lists available in HTML?",
  "How to create an ordered list in HTML?",
];

var questions_array_two = [
  "Which of the following CSS selector is used to specify a rule to bind a particular unique element?",
  "Which of the following type of HTML tag is used to define an internal style sheet?",
  "Which of the following CSS property is used to make the text bold?",
  " Which of the following CSS style property is used to specify an italic text?",
  "Which of the following function defines a linear gradient as a CSS image?",
];

var question_no = document.getElementById("question-number");
var questions = document.getElementById("ques");
var option1 = document.getElementById("opt1");
var option2 = document.getElementById("opt2");
var option3 = document.getElementById("opt3");
var option4 = document.getElementById("opt4");

var optt1 = ["HighText Machine Language", "5", "h1", "oul", "ul"];
var optt2 = ["HyperText and links Markup Language", "1", "h2", "bnl", "ol"];
var optt3 = ["HyperText Markup Language", "3", "h6", "nul", "href"];
var optt4 = ["None of these", "6", "h4", "none", "b"];

var opttt1 = [
  "tag",
  "<script>",
  "text-decoration: bold",
  "style",
  "gradient()",
];
var opttt2 = ["id", "<link>", "font-weight: bold", "font", "linear-gradient()"];
var opttt3 = [
  "class",
  "<class>",
  "font-style: bold",
  " font-style",
  "grayscale()",
];
var opttt4 = [
  "both class and tag",
  "<style>",
  " text-align: bold",
  "@font-face",
  " image()",
];

var ans = ["opt3", "opt4", "opt3", "opt4", "opt2"];

var ans2 = ["opt2", "opt4", "opt2", "opt3", "opt2"];

var i = 0;
var x;
var answer;
var stoptime = 0;

function start_quizz() {
  document.getElementById("start").style.display = "none";
  document.getElementById("start-button").style.display = "none";
  document.getElementById("containers").style.display = "block";
  generate_question();

  // code for countdown timer of 5 minutes
  var timerElement = document.getElementById("timer");
  var time = 300; // 2 minutes in seconds
  var minutes, seconds;

  var countdown = setInterval(function () {
    minutes = Math.floor(time / 60);
    seconds = time % 60;

    // Add leading zero if minutes or seconds is a single digit
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    // console.log(seconds);
    console.log("Time left: " + minutes + ":" + seconds);
    timerElement.textContent = "Time left: " + minutes + ":" + seconds;
    if (stoptime == 1) {
      clearInterval(countdown);
      timerElement.textContent = "00:00";
    }

    if (time <= 0) {
      clearInterval(countdown);
      timerElement.textContent = "00:00";
      alert("Timer is Over");
      document.getElementById("containers").style.display = "none";
      document.getElementById("scores").style.display = "block";
      document.getElementById(
        "scores"
      ).innerHTML = `Your score : ${score} out of 5`;
      document.getElementById("scores").style.fontWeight = "700";
    }

    time--;
  }, 1000);
  // timer code ends here.
}

function generate_question() {
  var question_decider = generateRandom(0, 1);
  if (question_decider == 0) {
    question_no.innerHTML = "Question NO) " + (i + 1);
    questions.innerText = questions_array[i];
    answer = ans[i];
    option1.innerText = optt1[i];
    option2.innerText = optt2[i];
    option3.innerText = optt3[i];
    option4.innerText = optt4[i];
    i++;
  } else {
    question_no.innerHTML = "Question NO) " + (i + 1);

    questions.innerText = questions_array_two[i];
    answer = ans2[i];

    option1.innerText = opttt1[i];
    option2.innerText = opttt2[i];
    option3.innerText = opttt3[i];
    option4.innerText = opttt4[i];
    i++;
  }

  // var j = generateRandom(0, questions_array.length - 1);
  // question_no.innerHTML = i + 1;
  // questions.innerText = questions_array[j];
  // answer = ans[j];

  // option1.innerText = optt1[j];
  // option2.innerText = optt2[j];
  // option3.innerText = optt3[j];
  // option4.innerText = optt4[j];
  // i++;
}
var score = 0;
function next_question() {
  var y = get_label_value();
  if (y == answer) {
    score++;
  }
  if (i < questions_array.length) {
    if (y != 0) {
      generate_question();
      let selectedValue = document.querySelector("input[name=opt]:checked");
      selectedValue.checked = false;
    }
  } else {
    if (y != 0) {
      document.getElementById("containers").style.display = "none";
      document.getElementById("scores").style.display = "block";
      document.getElementById(
        "scores"
      ).innerHTML = `Your score : ${score} out of 5`;
      stoptime = 1;
      document.getElementById("scores").style.fontWeight = "700";
    }
  }
}
function generateRandom(min, max) {
  x = Math.floor(Math.random() * (max - min + 1) + min);
  return x;
}
function get_label_value() {
  var getSelectedValue = document.querySelector("input[name=opt]:checked");
  if (getSelectedValue != null) {
    return getSelectedValue.value;
  } else {
    alert("Must select an option");
    return 0;
  }
}
