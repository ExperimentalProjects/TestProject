

let baseUrl = "http://localhost:3030/"

export const getWeather = (zipcode) => {
    return new Promise((resolve, reject) => {
        fetch(`${baseUrl}weather?zipcode=${zipcode}`).then(
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