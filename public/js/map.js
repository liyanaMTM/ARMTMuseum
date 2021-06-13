// Initialize and add the map
function initMap() {
    // The location of Brunei
    const Brunei = { lat: 4.5353, lng: 114.7277 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 9,
      center: Brunei,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: Brunei,
      map: map,
    });
  }
  