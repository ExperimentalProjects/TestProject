

let baseUrl = "http://localhost:3030/"

export const getWeather = (city) => {
    return new Promise((resolve, reject) => {
        let location = city.city
        fetch(`${baseUrl}weather?location=${location}`).then(
            response => {
                response.json().then(data => {
                    console.log(data)
                    resolve(data)
                })

            }
        ).catch(err => {
            console.log(err)
            reject(err)
        })
    })
}