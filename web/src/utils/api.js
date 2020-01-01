

let baseUrl = "https://whispering-castle-37895.herokuapp.com/"

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