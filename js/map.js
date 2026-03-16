// // create map and set initial view
// const map = L.map("map").setView([9.082, 8.6753], 6); // lat, lng, zoom

// // // Load GeoJson file
// fetch("../assests_images/ng.json")
//   .then((res) => res.json())
//   .then((data) => {
//     function zoomToFeature(e) {
//       map.fitBounds(e.target.getBounds());
//     }

//     function onEachFeature(feature, layer) {
//       layer.on({
//         click: zoomToFeature,
//       });
//     }

//     L.geoJSON(data, {
//       style: {
//         color: "#ff7800",
//         weight: 3,
//         opacity: 0.65,
//       },
//       onEachFeature: onEachFeature,
//     }).addTo(map);
//   });

// // Add OpenStreetMap tile layer
// L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
//   maxZoom: 19,
//   attribution:
//     '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
// }).addTo(map);


