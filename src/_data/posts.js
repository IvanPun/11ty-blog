const fetch = require('node-fetch')

module.exports = async () =>{
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()

        return data
    } catch(err){
        console.log(err);
        return[]
    }
}