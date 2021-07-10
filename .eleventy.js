module.exports = config => {
    return{
        htmlTemplateEngine: 'njk',
        dir:{
            input:'src',
            output:'dist'
        },
        markdownTemplateEngine: 'njk',
    }
}