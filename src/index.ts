declare var PROD:boolean;
const hljs:any = require("exports?hljs!highlight/lib/vendor/highlight.js/highlight.pack");

Reveal.initialize({});

document.addEventListener('DOMContentLoaded', function (event) {
    setTimeout(() => {
        // hljs.initHighlightingOnLoad();
        const codes = document.querySelectorAll('pre code');
        for (var i = 0; i < codes.length; i++) {
            hljs.highlightBlock(codes[i]);
        }
    }, 500);
});