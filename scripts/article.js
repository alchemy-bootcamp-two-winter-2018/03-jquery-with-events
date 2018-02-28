'use strict';

const articles = [];

function Article(rawDataObj) {
    Object.keys(rawDataObj).forEach(key => {
        this[key] = rawDataObj[key];
    });
}

Article.prototype.toHtml = function () {
    const template = $('#article-template').html();
    const $newArticle = $(template);
    if (!this.publishedOn) {
        $newArticle.addClass('draft');
    }

    // TODOne: Use jQuery to add the author name as an additional data-attribute of the new article. Doing so will allow us to use selectors to target articles based on who wrote them.
    $newArticle.attr({
        'data-js-category': this.category,
        'data-js-author': this.author
    });

    $newArticle.find('.byline a').html(this.author);
    $newArticle.find('.byline a').attr('href', this.authorUrl);
    $newArticle.find('h1:first').html(this.title);
    $newArticle.find('.article-body').html(this.body);
    $newArticle.find('time[pubdate]').attr('datetime', this.publishedOn);
    $newArticle.find('time[pubdate]').attr('title', this.publishedOn);
    $newArticle.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn)) / 60 / 60 / 24 / 1000) + ' days ago');
    $newArticle.append('<hr>');
    return $newArticle;
};

rawData.sort(function (a, b) {
    return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

rawData.forEach(function (articleObject) {
    articles.push(new Article(articleObject));
});

articles.forEach(function (article) {
    $('#articles').append(article.toHtml());
});
