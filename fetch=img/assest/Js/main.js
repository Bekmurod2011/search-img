let btn = document.querySelector(".btn")
    


btn.addEventListener("click", () => {
    let input = document.querySelector(".input"),
    image = document.querySelector(".image");
    input.value = ''
    fetch(`https://api.unsplash.com/search/photos/?client_id=NV6cJxzXuWmq1W1IOdXQrZuobE5TkS3_EvoMbxoMqBI&query=${image.value}`, () => {
        method: "GET"
    }).then(response => response.json())
    .then(data => {
        data.results.forEach(element => {
            image.innerHTML += `
            <img src="${element.urls.full}" alt="" width="500px">
            `
        });
    })
})