const fs = require('fs');

const template = fs.readFileSync('illinois-map-animation.html', 'utf8');
const paths = fs.readFileSync('county_paths.txt', 'utf8');

const finalHtml = template.replace('<g id="county-group"></g>', `<g id="county-group">${paths}</g>`);

fs.writeFileSync('illinois-map-animation.html', finalHtml);
console.log('Successfully injected county paths into the prototype.');
