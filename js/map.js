function mySwitch() {
    let map = document.getElementById('map');
    let cam = document.getElementById('cam');
    map.classList.toggle('d-none');
    cam.classList.toggle('d-none');
}
if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords.latitude, position.coords.longitude);
        const map = L.map('map').setView([position.coords.latitude, position.coords.longitude], 18)
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 20,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map)
        var marker = L.marker([position.coords.latitude, position.coords.longitude]).addTo(map);
    });


}
/**
 * Button definieren
 */
L.Control.Button = L.Control.extend({
  onAdd: function (map) {
    this.container = L.DomUtil.create('div')
    this.container.innerHTML =
        '<button class="btn btn-primary text-dark rounded-circle p-2 lh-1" type="button">' +
        '<span class="material-symbols-outlined" style="font-variation-settings:\'FILL\' 0; font-size: 30px;">camera</span>' +
        '</button>'

    return this.container
  },

  onRemove: function (map) {

  }
})

L.control.button = function (opts) {
  return new L.Control.Button(opts)
}

// L.control.button({ position: 'bottomright'}).addTo(map);
