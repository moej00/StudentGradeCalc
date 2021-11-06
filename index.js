const stdname = document.getElementById("stdname");
const subj = document.getElementById("Sbjct");
const avg = document.getElementById("avg");
const suc = document.getElementById("suc");
const pass = document.getElementById("pass");
const fail = document.getElementById("fail");
const exc = document.getElementById("exc");
const results = document.getElementById("results");
const p = document.getElementById("name");
const add = document.getElementById("Add");
const addNew = document.getElementById("addNew");
var div = document.getElementById("ginput");
var idarr = [];
var sbjarr = [];

addNew.addEventListener("click", function (e) {
  e.preventDefault();
  let reload;
  reload = location.reload();
});

add.addEventListener("click", function (e) {
  e.preventDefault();

  for (let i = 1; i <= subj.value; i++) {
    let subjectname = document.createElement("input");
    subjectname.name = "inputt" + i;
    subjectname.type = "text";
    subjectname.id = "inputt" + i;
    subjectname.style.textAlign = "center";
    subjectname.placeholder = "Subject Name";
    div.appendChild(subjectname);
    sbjarr.push(subjectname.name);

    let grade = document.createElement("input");
    grade.name = "inputn" + i;
    grade.id = "inputn" + i;
    grade.type = "number";
    grade.placeholder = "Grade";
    grade.style.textAlign = "center";
    div.appendChild(grade);

    idarr.push(grade.id);
    div.style.display = "block";
  }
});

results.addEventListener("click", function () {
  let grades = [];
  let subject = [];
  let total = 0;
  let average;
  let sbjname;
  let sbjgrade;
  let n;
  let g;
  let sname;

  for (let i = 0; i < sbjarr.length; i++) {
    n = sbjarr[i];
    sbjname = document.getElementById(n).value;
    subject.push(sbjname);
    sname += subject[i] + " ";
  }

  for (let i = 0; i < idarr.length; i++) {
    g = idarr[i];
    sbjgrade = parseInt(document.getElementById(g).value);

    grades.push(sbjgrade);
    total += grades[i];
  }

  average = total / grades.length;

  console.log(`${stdname.value} ${average}`);

  if (average > 0 && average <= 49) {
    avg.value = average;
    fail.style.display = "block";
    avg.style.color = "red";
    p.innerHTML = `${stdname.value} ${avg.value}`;
  } else if (average >= 50 && average <= 60) {
    avg.value = average;
    pass.style.display = "block";
    avg.style.color = "orange";
    p.innerHTML = `${stdname.value} ${avg.value}`;
  } else if (average >= 60 && average <= 80) {
    avg.value = average;
    suc.style.display = "block";
    avg.style.color = "blue";
    p.innerHTML = `${stdname.value} ${avg.value}`;
  } else if (average >= 80 && average <= 100) {
    avg.value = average;
    exc.style.display = "block";
    avg.style.color = "Green";
    p.innerHTML = `${stdname.value} ${avg.value}`;
  }
});
