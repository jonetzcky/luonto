// Initialize and add the map
function initMap() {
  // The location of Mansku36
  const uluru = { lat: 60.176440607343345, lng: 24.930535615343544 };
  // The map, centered at mansku36
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: uluru,
  });
  // The marker, positioned at mansku36
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

window.initMap = initMap;
