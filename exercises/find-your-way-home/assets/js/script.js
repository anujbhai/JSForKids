(function () {
"use strict";

  console.log("JavaScript is running");

  var landmarks = [];
  var landmarksList = document.getElementById("landmarks");
  var wayHome = document.getElementById("way_home");
  var inputLandmark = document.getElementById("input_landmark");
  var btnPop = document.getElementById("btn_pop");
  var formAddLandmark = document.getElementById("form_add_landmark");

  var addNewValToList = function (val) {
    if (val !== "") {
      return landmarks.push(val);
    }
    return;
  };

  var onClickSubmit = function (e) {
    e.preventDefault();
    console.log("Form add landmark submitted!");

    var newLandmark = inputLandmark.value;
    console.log("input value: ", newLandmark)

    addNewValToList(newLandmark);
    console.log("Landmarks: ", landmarks);

    landmarksList.innerHTML += "<p>" + newLandmark + "</p>";
  };

  var onClickPop = function () {
    console.log("input value: ", landmarks)

    var lastItem = landmarks.pop();
    console.log("Last item: ", lastItem);
    console.log("input value: ", landmarks)

    wayHome.innerHTML += "<p>" + lastItem + "</p>";

    landmarksList.removeChild(landmarksList.lastElementChild);
  };

  formAddLandmark.addEventListener("submit", onClickSubmit);
  btnPop.addEventListener("click", onClickPop);
})();