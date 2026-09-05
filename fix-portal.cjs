const fs = require('fs');
const path = 'src/features/portal/templates/PortalPage.tsx';
let content = fs.readFileSync(path, 'utf8');

// The section start before the steps is usually the closing tag of projects section or similar.
// Let's use a regex to match from `<div className="container mx-auto px-4">` containing `رحلتنا في 3 خطوات` up to `</section>`
const regex = /<section className="bg-background py-20 sm:py-24">[\s\S]*?رحلتنا في 3 خطوات[\s\S]*?<\/section>\s*\}\)/g;
content = content.replace(regex, '');

// There is a leftover `      {` right before it maybe.
content = content.replace(/\{\s*\}\)\s*/g, '');

fs.writeFileSync(path, content);
