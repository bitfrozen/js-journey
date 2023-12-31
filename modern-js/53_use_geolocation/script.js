import './style.css';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const copyrightLayer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
});
const map = L.map('map', {
  center: [0, 0],
  zoom: 2,
  zoomControl: true,
  layers: [copyrightLayer],
});

L.control.scale({
  imperial: false,
  maxWidth: 150
}).addTo(map);

const marker = L.marker([0, 0]).addTo(map);
navigator.geolocation.getCurrentPosition(function (position) {
  const lat = position.coords.latitude;
  const long = position.coords.longitude;

  marker.setLatLng([lat, long]);
  map.setView([lat, long], 13);

  marker.bindPopup('<strong>"Wave"</strong></br>Hello stranger!');
});
