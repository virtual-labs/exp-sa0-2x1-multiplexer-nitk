//Your JavaScript goes in here
function reset() {
  window.location.reload();
}
function myFunction() {
  var x = parseInt(document.getElementById("a").value);
  var y = parseInt(document.getElementById("b").value);
  var z = parseInt(document.getElementById("c").value);
  var x1 = parseInt(document.getElementById("a1").value);
  var y1 = parseInt(document.getElementById("b1").value);
  var z1 = parseInt(document.getElementById("c1").value);
  let text;
  let txt = x + " " + y + " " + z;
  var p = x * x1;
  var q = y * y1;
  var r = z * z1;
  if (x1 == 0 && y1 == 0 && z1 == 0) {
    text = "I<sub>0</sub> I<sub>1</sub> S";
  }
  else if (x1 == 0 && y1 == 0) {
    text = "I<sub>0</sub> I<sub>1</sub>";
  }
  else if (y1 == 0 && z1 == 0) {
    text = "I<sub>1</sub> S";
  }
  else if (x1 == 0 && z1 == 0) {
    text = "I<sub>0</sub> S";
  }
  else if (x1 == 0) {
    text = "I<sub>0</sub>";
  }
  else if (y1 == 0) {
    text = "I<sub>1</sub>";
  }
  else if (z1 == 0) {
    text = "S";
  }
  else {
    text = "NIL";
  }

  var table = document.getElementById("truth-table");

  var rowCount = table.rows.length;
  var row = table.insertRow(rowCount);

  var cell1 = row.insertCell(0);
  cell1.innerHTML = txt;

  var cell2 = row.insertCell(1);
  cell2.innerHTML = text;

  var cell3 = row.insertCell(2);
  cell3.innerHTML = z ? y : x;

  var cell4 = row.insertCell(3);
  cell4.innerHTML = r ? q : p;
}

function fun() {
  var num = 0;
  var a1 = document.getElementById("correct1");
  var a2 = document.getElementById("correct2");
  var a3 = document.getElementById("correct3");
  var a4 = document.getElementById("correct4");
  var a5 = document.getElementById("correct5");
  if (a1.checked == true) {
    counter(++num);
    document.getElementById("answer1").style.color = "black";
  } else {
    document.getElementById("answer1").style.color = "red";
    counter(num);
  }
  if (a2.checked == true) {
    counter(++num);
    document.getElementById("answer2").style.color = "black";
  } else {
    document.getElementById("answer2").style.color = "red";
    counter(num);
  }
  if (a3.checked == true) {
    counter(++num);
    document.getElementById("answer3").style.color = "black";
  } else {
    document.getElementById("answer3").style.color = "red";
    counter(num);
  }
  if (a4.checked == true) {
    counter(++num);
    document.getElementById("answer4").style.color = "black";
  } else {
    document.getElementById("answer4").style.color = "red";
    counter(num);
  }
  if (a5.checked == true) {
    counter(++num);
    document.getElementById("answer5").style.color = "black";
  } else {
    document.getElementById("answer5").style.color = "red";
    counter(num);
  }
}
function counter(refNum) {
  document.getElementById("countOut").innerHTML = refNum + " out of 5";
}
