const Api = {
    nasaPics() {
        const url = 'https://api.nasa.gov/planetary/apod?api_key=hkR46pfgidgKhUCu3slAhQHJvlRiDYslNWCwjXT6'
        return fetch(url)
                .then((res)=> res.json())
    }
}

module.exports = Api;