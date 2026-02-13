function Place(location, landmarks, season, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.season = season;
  this.notes = notes;
}

Place.prototype.summary = function () {
  return this.location + " - " + this.landmarks;
};

function Placebook() {
  this.places = [];
}

Placebook.prototype.addplace = function(place) {
  this.places.push(place);
};

Placebook.prototype.getplace = function(index) {
  return this.places[index];
};

let testplace = new Place("Paris", "Eiffel Tower", "Summer", "Beautiful city");

console.log("test 1:", testplace.location === "Paris");
console.log("test 2:", testplace.summary() === "Paris - Eiffel Tower");

let testbook = new Placebook();

console.log("test 3:", testbook.places.length === 0);

testbook.addplace(testplace);

console.log("test 4:", testbook.places.length === 1);
console.log("test 5:", testbook.getplace(0) === testplace);

let placebook = new Placebook();

document.getElementById("pd").addEventListener("submit", function(e) {

  e.preventDefault();

  let location = document.getElementById("location").value;
  let landmarks = document.getElementById("landmarks").value;
  let season = document.getElementById("season").value;
  let notes = document.getElementById("notes").value;

  let newplace = new Place(location, landmarks, season, notes);

  placebook.addplace(newplace);

  displayplaces();

  this.reset();
});

function displayplaces() {

  let list = document.getElementById("placelist");

  list.innerHTML = "";

  placebook.places.forEach(function(place, index) {

    let li = document.createElement("li");

    li.textContent = place.summary();

    li.addEventListener("click", function() {
      showdetails(index);
    });

    list.appendChild(li);
  });
}

function showdetails(index) {

  let place = placebook.getplace(index);

  let details = document.getElementById("placedetails");

  details.innerHTML = `
    <p><strong>Location:</strong> ${place.location}</p>
    <p><strong>Landmarks:</strong> ${place.landmarks}</p>
    <p><strong>Date/Season:</strong> ${place.season}</p>
    <p><strong>Notes:</strong> ${place.notes}</p>
  `;
}

