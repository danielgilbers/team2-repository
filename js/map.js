var map = L.map('map').setView([50.827, 6.891], 15);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

/**
 * Button definieren
 */
L.Control.Button = L.Control.extend({
    onAdd: function(map) {
        this.container = L.DomUtil.create('div');
        this.container.innerHTML =
        '<button class="btn btn-primary text-dark rounded-circle p-2 lh-1" type="button">'+
        '<span class="material-symbols-outlined" style="font-variation-settings:\'FILL\' 0; font-size: 30px;">camera</span>'+
        '</button>';

        return this.container;
    },

    onRemove: function(map) {

    }
});

L.control.button = function(opts) {
    return new L.Control.Button(opts);
}

// L.control.button({ position: 'bottomright'}).addTo(map);