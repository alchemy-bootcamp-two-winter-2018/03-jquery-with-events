Lab 03: jQuery Events
===

## Content
1. Submission Instructions
1. Resources
1. Configuration
1. User Stories and Feature Tasks

--

## Submission Instructions
Follow the submission instructions outlined in our [submit-process repo](https://github.com/alchemy-bootcamp-two-winter-2018/submit-process).

## Resources  
[jQuery cheatsheet](https://oscarotero.com/jquery/)

[Template Literals MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

## Configuration
_Your repository must include:_

```
03-jquery-with-events
├── .eslintrc.json
├── .gitignore
├── LICENSE
├── README.md
├── index.html
├── scripts
│   ├── article.js
│   ├── articleView.js
│   └── blogArticles.js
├── styles
│   ├── base.css
│   ├── fonts
│   │   ├── icomoon.eot
│   │   ├── icomoon.svg
│   │   ├── icomoon.ttf
│   │   └── icomoon.woff
│   ├── icons.css
│   ├── layout.css
│   └── modules.css
└── vendor
    └── styles
        └── normalize.css
```

## User Stories and Feature Tasks

- Continue styling the app using SMACSS practices. Take a few minutes for code review of your partner's CSS and decide how to incorporate it into your paired lab. You can choose one partner's CSS structure, or you can combine them as you see fit. Seek to optimize and organize your CSS as much as possible!

*As a user, I want to be able to filter my articles so that I can selectively view articles by author or by category.*

- Complete the new requirements for setting `data-<attributes>` in your `toHtml()` method.
- Complete the methods for handling filter events when selecting an option from a drop down menu via Authors and Categories so that only the selected articles are displayed on the screen.

*As a user, I want to be able to preview each article so that I can easily view the results and select the one I want to read further.*

- Add an event to reveal a complete article if the user would like to see more of it beyond the teaser.

*As a user, I want tab-based navigation so that I can easily visit other sections of my site.*

- Complete the method `articleView.handleMainNav()` for implementing tab-based event navigation on the page.

*As a developer, I want my code to be thoughtfully organized, easy to read, and executing efficiently.*

- Review and understand the new JS file, `articleView.js`
- Add any new script tags to your HTML.
- Refactor concatenation using template literals.
- Render the app upon page load.

### Stretch Goal

*As a user, I want to be able to collapse an expanded article to the teaser view so that I can more easily scan over a series of articles.*

- Build in functionality such that a user can click on "Show Less" to collapse a full article into a teaser.
