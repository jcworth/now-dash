const shareLocation = document.getElementById('shareLocation')

function geoLookup(long, lat) {
    const url = `https://photon.komoot.de/reverse?lon=${long}&lat=${lat}`
    // const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${process.env.GOOGLE_API_KEY}`
    console.log(url)
    fetch(url)
        .then(response => (response.json()))
        .then(data => {
            console.log(data);
        })
}

function displayLocation(position) {
    let long = position.coords.longitude;
    let lat = position.coords.latitude;
    console.log(`Long: ${long} Lat: ${lat}`);
    geoLookup(long, lat);
};

function findLocation() {
    navigator.geolocation.getCurrentPosition(displayLocation);
};

shareLocation.addEventListener('click', findLocation);