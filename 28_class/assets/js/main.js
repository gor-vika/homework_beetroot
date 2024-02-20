import News from "../classes/News.js";

const newsAPI = new News()

const newsList = await newsAPI.newsListHTML('')

document.body.insertAdjacentHTML('afterbegin', newsList)

document.addEventListener('click', async function
(event){
    if(event.target.className === 'btn-detail'){
        const newsData = await newsAPI.getNewsDetail
        (event.target.dataset.uuid)
        console.log(newsData)
    }
})
