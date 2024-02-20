function mySwitch () {
  const map = document.getElementById('map')
  const cam = document.getElementById('cam')
  map.classList.toggle('d-none')
  cam.classList.toggle('d-none')
}
if ('geolocation' in navigator) {
  navigator.geolocation.getCurrentPosition((position) => {
    console.log(position.coords.latitude, position.coords.longitude)
    const map = L.map('map').setView([position.coords.latitude, position.coords.longitude], 18)
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 20,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map)
    const marker = L.marker([position.coords.latitude, position.coords.longitude]).addTo(map)
  })
}
