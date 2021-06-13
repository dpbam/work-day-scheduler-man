const currentDate = moment();

document.getElementById("currentDay").innerHTML = currentDate.format(
  "dddd, MMMM Do, YYYY"
);

// loop through all of the div class="row"s to get all the info and do all the processes
var rows = document.getElementsByClassName("row");
for (let i = 0; i < rows.length; i++) {
  var text = rows[i].querySelector("input");
  var btn = rows[i].querySelector("button");

  var time = btn.dataset.buttonClick;

  //   store the value of the taskEntry of each time in localStorage
  document.getElementById("taskEntry" + time).value =
    localStorage.getItem(time);

  if (time === currentDate.format("H")) {
    $("#taskEntry" + time).addClass("present");
    // make new class in ("taskEntry" + time) called present
  } else if (time > currentDate.format("H")) {
    // make new class in ("taskEntry" + time) called future
    $("#taskEntry" + time).addClass("future");
  } else {
    // make new class in ("taskEntry" + time) called past
    $("#taskEntry" + time).addClass("past");
  }

  btn.addEventListener("click", function (clickEvent) {
    var clickKey = clickEvent.target.dataset.buttonClick;

    localStorage.setItem(
      clickKey,
      document.getElementById("taskEntry" + clickKey).value
    );
  });
}
