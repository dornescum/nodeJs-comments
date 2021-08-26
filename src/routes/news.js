const express = require('express')
const newsRouter = express.Router()
const axios = require('axios')
// https://raddy.co.uk/wp-json/wp/v2/posts/


newsRouter.get('', async(req, res) => {
    try {
        const newsAPI = await axios.get(`https://jsonplaceholder.typicode.com/comments`)
        res.render('news', { comments : newsAPI.data })
    } catch (err) {
        if(err.response) {
            res.render('news', { comments : null })
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if(err.request) {
            res.render('news', { comments : null })
            console.log(err.requiest)
        } else {
            res.render('news', { comments : null })
            console.error('Error', err.message)
        }
    } 
})

newsRouter.get('/comment/:id', async(req, res) => {
    let articleID = req.params.id;

    try {
        const newsAPI = await axios.get(`https://jsonplaceholder.typicode.com/comments/${articleID}`)
        res.render('newsSingle', { comment : newsAPI.data })
    } catch (err) {
        if(err.response) {
            res.render('newsSingle', { comment : null })
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if(err.request) {
            res.render('newsSingle', { comment : null })
            console.log(err.request)
        } else {
            res.render('newsSingle', { comment : null })
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
        } else if(err.requiest) {
            res.render('newsSearch', { articles : null })
            console.log(err.requiest)
        } else {
            res.render('newsSearch', { articles : null })
            console.error('Error', err.message)
        }
    } 
})


module.exports = newsRouter 
