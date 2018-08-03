function fetchWithTimeout(ms, promise) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject(new Error("timeout"))
        }, ms)
        promise.then(resolve, reject)
    })
}
 
export async function getCinemaworldList() {
    const url = `http://webjetapitest.azurewebsites.net/api/cinemaworld/movies`;
    const options = {
        method: 'GET',
        headers: new Headers({
            Accept: 'application/json',
            'x-access-token': 'sjd1HfkjU83ksdsm3802k',
        })
    }
 
    let movies = await fetchWithTimeout(10000,
        fetch(url, options)
            .then(function (response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(response => response.Movies)
    )
        .catch(function (error) { console.log(error) });
    return movies;
}
 
export async function getFilmworldList() {
    const url = `http://webjetapitest.azurewebsites.net/api/filmworld/movies`;
    const options = {
        method: 'GET',
        headers: new Headers({
            Accept: 'application/json',
            'x-access-token': 'sjd1HfkjU83ksdsm3802k',
        })
    }
 
    let movies = await fetchWithTimeout(10000,
        fetch(url, options)
            .then(function (response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(response => response.Movies)
    )
        .catch(function (error) { console.log(error) });
    return movies;
}
 
export async function getMoviePriceById(id, place) {
    const url = `http://webjetapitest.azurewebsites.net/api/${place}/movie/${id}`;
    const options = {
        method: 'GET',
        headers: new Headers({
            Accept: 'application/json',
            'x-access-token': 'sjd1HfkjU83ksdsm3802k',
        })
    }
 
    let price = await fetchWithTimeout(10000,
        fetch(url, options)
            .then(function (response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(response => response.Price)
    )
        .catch(function (error) { console.log(error) });
    return price;
}