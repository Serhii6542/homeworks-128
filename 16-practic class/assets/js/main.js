import News from "../classes/News.js";


const newsAPI = new News()

const newList = await newsAPI.newsListHTML('')

// console.log(newList);


document.body.insertAdjacentHTML('afterbegin', newList)
document.addEventListener('click', async function(event){
    if(event.target.className === 'btn-detail'){
        const newData = await newsAPI.getNewsDetail(event.target.dataset.uuid)
        // console.log(newData)
    }
})