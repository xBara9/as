function Login() {
  var found = false;
  let Username = document.getElementById("Username").value;
  let Password = document.getElementById("Password").value;

  generateQuestion();
  localStorage.setItem("CurrentAccount", Username);

  if (Username === "admin" && Password === "admin") {
    window.location.href = "../adminhomepage/adminhomepage.html";
    alert("Logged in successfully");
    found = true;
  } else if (localStorage.getItem("Account")) {
    let AccountArray = localStorage.getItem("Account").split("_");
    for (let i = 0; i < AccountArray.length; i++) {
      let Array = AccountArray[i].split(",");
      if (Array[0] === Username && Array[1] === Password) {
        window.location.href = "../homepage/homePage.html";
        alert("Logged in successfully");
        found = true;
      }
    }
  }
  if (!found) {
    alert("Wrong username or Password!");
    location.reload();
  }
}

function generateQuestion() {
  const string =
    "How many teeth does an adult human have?,32.,34.,30.,28,32.,The answer is greater than 31._What is the largest bird of prey in the world?,Peregrine falcon.,Common buzzard.,Andean Condor.,Northern goshawk.,Andean Condor.,The bird from Cathartidae family._How many legs does a lobster have?,Four.,Eight.,Three.,Two.,Eight.,The answer is greater than 3._Who is fifth in line to the British throne?,Prince Louis.,Prince George.,Prince William.,Prince Charles.,Prince Louis.,The answer is not prince william._What is the biggest state in America?,New York.,Alaska.,Ohio.,Nevada.,Alaska.,The answer has six letters._What is the capital of Hawaii?,Canberra.,Minsk.,Vienna.,Honolulu.,Honolulu.,The answer has eight letters._How many eggs does the average chicken lay per year?,260.,250.,160.,150.,260.,The answer is greater than 200._What is a group of lions called?,A pride.,A flock.,A herd.,A tower.,A pride.,The answer has five letters._What is a baby kangaroo called?,A kitten.,A cub.,A joey.,A calf.,A joey.,The answer has four letters._What is the slowest animal in the world?,Manatee.,Slow Loris.,Starfish.,Three-toed sloth.,Three-toed sloth.,The answer has more than 1 word._Which bird can fly backwards?,Ostrich.,Rhea.,Hummingbird.,Kiwi.,Hummingbird.,The answer is not Kiwi._What is the capital of Chile?,Beijing.,Bogota.,Havana.,Santiago.,Santiago.,The answer has more than six letters._Who was the first female Prime Minister of Australia?,Julia Gillard.,Indira Gandhi.,Isabel Perón.,Margaret Thatcher.,Julia Gillard.,The answer does not start with I._Which country is the origin of the cocktail Mojito?,Cuba.,Suriname.,Paraguay.,Russia.,Cuba.,The country is in Latin America._Which year was the Premier League founded?,1992.,1995.,1980.,1988.,1992.,The year was after 1990._What is the longest river in the world?,Yangtze.,Amazon.,Nile.,Mississippi.,Nile.,It is The longest river in Africa._Who wrote Dracula?,William Shakespeare.,Bram Stoker.,Agatha Christie.,Danielle Steel.,Bram Stoker.,His first name is Bram._What is the most spoken language in the world?,Italian.,Arabic.,English.,Mandarin.,Mandarin.,The language spoken in Asia._Catalonia is a region of what country?,Spain.,Germany.,Russia.,Italy.,Spain.,Catalonia is at the same country as Madrid._How many people have walked on the moon?,15.,12.,17.,10.,12.,More than 11 but less than 16._20";
  if (localStorage.getItem("Question") === null) localStorage.setItem("Question", string);
}

function isExist() {
  if (localStorage.getItem("Account") === null) {
    return false;
  }
  let AccountArray = localStorage.getItem("Account").split("_");
  for (let i = 0; i < AccountArray.length; i++) {
    let Array = AccountArray[i].split(",");
    if (document.getElementById("Username").value == Array[0]) {
      return true;
    }
  }
  return false;
}

function Register() {
  const Username = document.getElementById("Username").value;
  const Password = document.getElementById("Password").value;

  if (Username == "" && Password == "") {
    alert("Please enter username and password!");
  } else if (Username == "") {
    alert("Please enter the username!");
  } else if (Password == "") {
    alert("Please enter the password!");
  } else if (isExist()) {
    alert("A username already exists!");
  } else {
    if (localStorage.getItem("Account") === null) {
      localStorage.setItem("Account", `${Username},${Password},,`);
    } else {
      let String = localStorage.getItem("Account") + `_${Username},${Password},,`;
      localStorage.setItem("Account", String);
    }
    alert("Registered successfully");
    location.reload();
  }
}

function logOut() {
  window.location.replace("../../loginpage/login.html");
}

function logOutHomePage() {
  window.location.replace("../loginpage/login.html");
}

function add() {
  const question = document.getElementById("Question").value;
  const Answer1 = document.getElementById("Answer1").value;
  const Answer2 = document.getElementById("Answer2").value;
  const Answer3 = document.getElementById("Answer3").value;
  const Answer4 = document.getElementById("Answer4").value;
  const CorrectAnswer = document.getElementById("CorrectAnswer").value;
  const hint = document.getElementById("hint").value;

  let string = localStorage.getItem("Question");
  let numberOfQuestion = Number(string.slice(string.length - 2, string.length)) + 1;
  string = string.slice(0, string.length - 3);
  localStorage.setItem(
    "Question",
    string +
      `_${question},${Answer1},${Answer2},${Answer3},${Answer4},${CorrectAnswer},${hint}_${numberOfQuestion}`
  );

  location.reload();
}

function remove() {
  const question = document.getElementById("Question").value;
  let flag = false;

  let arrayOfQuestion = localStorage.getItem("Question").split("_");
  let string = "";
  let numberOfQuestion = Number(arrayOfQuestion[arrayOfQuestion.length - 1]);

  for (let i = 0; i < arrayOfQuestion.length - 1; i++) {
    let array = arrayOfQuestion[i].split(",");
    if (array[0] != question) {
      string += `${arrayOfQuestion[i]}_`;
    } else {
      flag = true;
    }
  }
  if (flag) {
    numberOfQuestion--;
    alert("The question has deleted");
  } else {
    alert("The question didn't found");
  }
  localStorage.setItem("Question", string + numberOfQuestion);
  location.reload();
}

function toHomepage() {
  window.location.replace("../homepage/homePage.html");
}
