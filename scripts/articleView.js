'use strict';

// REVIEW: Configure an object to hold all of our functions for dynamic updates and article-related event handlers.
const articleView = {};

articleView.populateFilters = function() {
    /*
        REVIEW:

        To populate our filters we we need to get the author and category data from the article elements on the page.

        We'll loop through all the articles, get their author and category data, then add those values to their respective select dropdowns.

        Walk through the each loop to make sure you understand what's happening.

    */

    $('article').each(function() {
        // TODOne: Refactor all the string concatenation in this function into template literals.

        const authorName = $(this).attr('data-js-author'); 
        
        if ($(`#author-filter option[value="${authorName}"]`).length === 0) {
            const optionTag = `<option value="${authorName}">${authorName}</option>`;
            $('#author-filter').append(optionTag);
        }

        const category = $(this).attr('data-js-category');

        if ($(`#category-filter option[value="${category}"]`).length === 0) {
            const optionTag = `<option value="${category}">${category}</option>`;
            $('#category-filter').append(optionTag);
        }

    });
};

articleView.handleAuthorFilter = function() {
    $('#author-filter').on('change', function() {
    // REVIEW: Inside this function, "this" is the element that triggered the event handler function we are defining. "$(this)" is using jQuery to select that element (analogous to event.target that we have seen before), so we can chain jQuery methods onto it.
        if ($(this).val()) {
            // TODOne: If the <select> menu was changed to an option that has a value, we first need to hide all the articles, and then show just the ones that match for the author that was selected.
            // Use an "attribute selector" to find those articles, and fade them in for the reader.
            const authorName = $(this).val();
            $('article').hide();
            $(`article[data-js-author="${authorName}"]`).fadeIn();

        } else {
            // TODOne: If the <select> menu was changed to an option that is blank, we should first show all the articles.
            $('article').show();

        }
        $('#category-filter').val('');
    });
};

articleView.handleCategoryFilter = function() {
    // TODOne: Just like we do for #author-filter above, we should handle change events on the #category-filter element.
    // When an option with a value is selected, hide all the articles, then reveal the matches.
    // When the blank (default) option is selected, show all the articles.
    // Be sure to reset the #author-filter while you are at it!
    $('#category-filter').on('change', function() {
        if ($(this).val()) {
            const categoryName = $(this).val();
            $('article').hide();
            $(`article[data-js-category="${categoryName}"]`).fadeIn();
        } else {
            $('article').show();
        }
        $('#author-filter').val('');
    });
};

articleView.handleMainNav = function() {
    // TODOne: Add an event handler to .main-nav elements that will power the Tabs feature.
    // Clicking any .tab element should hide all the .tab-content sections, and then reveal the single .tab-content section that is associated with the clicked .tab element.
    // So: You need to dynamically build a selector string with the correct ID, based on the data available to you on the .tab element that was clicked.

    $('.main-nav .tab').on('click', function (event) {
        event.preventDefault();
        $('.tab-content').hide();
        const dataContent = $(this).attr('data-content');
        $(`section[id="${dataContent}"]`).show();
    });

    // REVIEW: Now trigger a click on the first .tab element, to set up the page.
    $('.main-nav .tab:first').click();
};

articleView.setTeasers = function() {
    // REVIEW: Hide elements beyond the first 2 in any article body.
    $('.article-body *:nth-of-type(n+2)').hide();

    // TODOne: Add an event handler to reveal all the hidden elements, when the .read-on link is clicked. You can go ahead and hide the "Read On" link once it has been clicked. Be sure to prevent the default link-click action!
    // Ideally, we'd attach this as just one event handler on the #articles section, and let it process (in other words... delegate) any .read-on clicks that happen within child nodes.
    $('#articles').on('click', '.teaser-toggle', function(event) {
        event.preventDefault();
        const thisArticle = $(this).parent();
        thisArticle.find('.article-body *:nth-of-type(n+2)').toggle();
        $(this).toggleClass('show-less read-on');
        if ($(this).hasClass('show-less')) {
            $(this).text('Show less \u21E6');
        } else if ($(this).hasClass('read-on')) {
            $(this).text('Read on \u21E8');
        }
    });
};

// TODOne: Call all of the above functions, once we are sure the DOM is ready.
$(document).ready(function() {
    articleView.populateFilters();
    articleView.handleAuthorFilter();
    articleView.handleCategoryFilter();
    articleView.handleMainNav();
    articleView.setTeasers();
});
