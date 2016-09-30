declare var PROD : boolean;

const req = require.context("./", true, /^\.\/slides\/.*\.html/);

const keys = (PROD ? req.keys() : req.keys().filter((key) => key.indexOf('toto') < 0));
const htmlTree = keys
    .map((key) => {
        const result = req(key);
        const tree = key.replace(/(\.\/)?slides\//g, '').split('/');
        return {
            branchId: tree.shift(),
            html: `<section>${result}</section>`
        };
    }).reduce((acc, item) => {
        acc[item.branchId] = acc[item.branchId] || [];
        acc[item.branchId].push(item.html);
        return acc;
    }, {});

const generatedHtml = Object.keys(htmlTree)
    .sort()
    .map((key) => {
        return `<section>${htmlTree[key].join('')}</section>`
    })
    .join('');


const container = document.createElement('div');
container.setAttribute('class', 'reveal');

const slides = document.createElement('div');
slides.setAttribute('class', 'slides');

slides.innerHTML = generatedHtml;

container.appendChild(slides);

document.body.appendChild(container);

Reveal.initialize({});