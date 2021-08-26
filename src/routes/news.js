const express = require('express')
const newsRouter = express.Router()
const axios = require('axios')
// const url =`https://raddy.co.uk/wp-json/wp/v2/posts/`
//     `https://jsonplaceholder.typicode.com/comments`
const url =`https://newsapi.org/v2/top-headlines?country=us&apiKey=86c7427b19bc447aa64c4f2802cbb81c`


newsRouter.get('', async(req, res) => {
    try {
        const newsAPI = await axios.get(url)
        // console.log(newsAPI.data)
        res.render('news', { articles : newsAPI.data.articles })
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
    console.log(articleID)
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
        const newsAPI = await axios.get(`https://raddy.co.uk/wp-json/wp/v2/posts?search=${search}`)
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

