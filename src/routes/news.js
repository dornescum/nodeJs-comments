const express = require('express')
const newsRouter = express.Router()
const axios = require('axios')
// news api
const apiKey = '86c7427b19bc447aa64c4f2802cbb81c';
const guardianApi ='59482159-77b5-47df-9a0c-7acea01f94ee';
// spoonacular
// const apiKey = '97b53cc1bc194de6bc68590469afb5dc';
// const url =`https://raddy.co.uk/wp-json/wp/v2/posts/`
//     `https://jsonplaceholder.typicode.com/comments`


const url =`https://newsapi.org/v2/top-headlines?country=ro&apiKey=${apiKey}`
const guardianUrl = `https://content.guardianapis.com/search?api-key=${guardianApi}`;


// const url =`https://api.spoonacular.com/food/products/search?query=yogurt&apiKey=${apiKey}`


newsRouter.get('', async(req, res) => {
    try {
        // const newsAPI = await axios.get(url)
        const newsAPI = await axios.get(guardianUrl)
        console.log(newsAPI.data.response.results)
        // res.render('news', { articles : newsAPI.data.articles })
        res.render('news', { articles : newsAPI.data.response.results})
        // res.render('news', { products : newsAPI.products })
    } catch (err) {
        if(err.response) {
            res.render('news', { articles : null })
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if(err.request) {
            res.render('news', { articles : null })
            console.log(err.requiest)
        } else {
            res.render('news', { articles : null })
            console.error('Error', err.message)
        }
    }
})

newsRouter.get('/:id', async(req, res) => {
    let articleID = req.params.id;
    // console.log(typeof articleID)
    try {
        const newsAPI = await axios.get(`url/${articleID}`)
        console.log(newsAPI)
        res.render('newsSingle', { article : newsAPI.data.articles })
    } catch (err) {
        if(err.response) {
            res.render('newsSingle', { article : null })
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if(err.request) {
            res.render('newsSingle', { article : null })
            console.log(err.request)
        } else {
            res.render('newsSingle', { article : null })
            console.error('Error', err.message)
        }
    }
})


newsRouter.post('', async(req, res) => {
    let search = req.body.search
    try {
        // const newsAPI = await axios.get(`https://raddy.co.uk/wp-json/wp/v2/posts?search=${search}`)
        const newsAPI = await axios.get(`url/?search=${search}`)
        res.render('newsSearch', { articles : newsAPI.data })
    } catch (err) {
        if(err.response) {
            res.render('newsSearch', { articles : null })
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if(err.request) {
            res.render('newsSearch', { articles : null })
            console.log(err.requiest)
        } else {
            res.render('newsSearch', { articles : null })
            console.error('Error', err.message)
        }
    }
})




// pt ca am trecut aici :id( : sunt importante)
// newsRouter.get('/comment/:id', async(req, res) => {
//     // folosesc si aici id
//     let articleID = req.params.id;
//
//     try {
//         const newsAPI = await axios.get(`https://jsonplaceholder.typicode.com/comments/${articleID}`)
//         res.render('newsSingle', { comment : newsAPI.data })
//     } catch (err) {
//         if(err.response) {
//             res.render('newsSingle', { comment : null })
//             console.log(err.response.data)
//             console.log(err.response.status)
//             console.log(err.response.headers)
//         } else if(err.request) {
//             res.render('newsSingle', { comment : null })
//             console.log(err.request)
//         } else {
//             res.render('newsSingle', { comment : null })
//             console.error('Error', err.message)
//         }
//     }
// })


// newsRouter.post('', async(req, res) => {
//     let search = req.body.search
//     try {
//         const newsAPI = await axios.get(`https://raddy.co.uk/wp-json/wp/v2/posts?search=${search}`)
//         res.render('newsSearch', { articles : newsAPI.data })
//     } catch (err) {
//         if(err.response) {
//             res.render('newsSearch', { articles : null })
//             console.log(err.response.data)
//             console.log(err.response.status)
//             console.log(err.response.headers)
//         } else if(err.requiest) {
//             res.render('newsSearch', { articles : null })
//             console.log(err.requiest)
//         } else {
//             res.render('newsSearch', { articles : null })
//             console.error('Error', err.message)
//         }
//     }
// })


module.exports = newsRouter ;

