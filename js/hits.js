function getHitCount(key, classname) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.countapi.xyz/hit/tomsgrants.com/" + key);
    xhr.responseType = "json";
    xhr.onload = function() {
        document.getElementsByClassName(classname)[0].innerText = this.response.value;
    }
    xhr.send();
}

window.addEventListener('DOMContentLoaded', (event) => {
    today = new Date;
    getHitCount("total", "hits-total");
    // Could break if year is less than 100 because key needs to be at least 3 characters long
    getHitCount("Y" + today.getFullYear(), "hits-yearly");
    getHitCount("Y" + today.getFullYear() + "M" + today.getMonth(), "hits-monthly");
    getHitCount("Y" + today.getFullYear() + "M" + today.getMonth() + "daily" + today.getDate(), "hits-daily");
});