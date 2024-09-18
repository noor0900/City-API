const input = document.getElementById("input");
const contentBox = document.querySelector(".content-box");

input.oninput = function () {
    contentBox.innerHTML = "";
    const value = this.value;
    const city = value.toUpperCase();
    console.log(city);

    const url = "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

    fetch(url)
        .then(res => res.json())
        .then(data => {
            const cities = data;

            // console.log(cities);

            let foundedCity = [];


            for (let i = 0; i < cities.length; i++) {
                if (cities[i].city.toUpperCase().includes(city)) {

                    foundedCity.push(cities[i].city);

                    // const div = document.createElement("div");
                    contentBox.innerHTML += `
                    <div class="city">
                        <h3>${cities[i].city}, ${cities[i].state}</h3>
                        <p>${cities[i].population}</p>
                    </div>
                `;
                    // contentBox.appendChild(div);
                }
                // else {
                //     console.log("else part");

                //     contentBox.innerHTML = "<h1>City not found</h1>"
                // }
            }

            if (foundedCity.length === 0) {
                contentBox.innerHTML = "<h1>City not found</h1>";
            }
        })
}
















const url = "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

// https://salar-butt.github.io/CityAPI-Name-finder--JavaScript/