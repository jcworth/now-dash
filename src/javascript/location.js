const shareLocation = document.getElementById('shareLocation')

function displayLocation(position) {
    const long = position.coords.longitude;
    const lat = position.coords.latitude;
    console.log(`${long}, ${lat}`)
}

function findLocation() {
    navigator.geolocation.getCurrentPosition(displayLocation);
}

shareLocation.addEventListener('click', findLocation);