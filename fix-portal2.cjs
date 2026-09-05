const fs = require('fs');
const path = 'src/features/portal/templates/PortalPage.tsx';
let content = fs.readFileSync(path, 'utf8');

// I will just remove everything between "stepsTitle" and "showAboutSection !== false" (inclusive of the closing of the section)
const startIdx = content.indexOf('<div className="container mx-auto px-4">');
// Find where stepsTitle is
const stepsIdx = content.indexOf('stepsTitle');
if (stepsIdx !== -1) {
  const sectionStart = content.lastIndexOf('<section', stepsIdx);
  const sectionEnd = content.indexOf('</section>', stepsIdx) + 10;
  
  if (sectionStart !== -1 && sectionEnd !== -1) {
    const toRemove = content.substring(sectionStart, sectionEnd);
    content = content.replace(toRemove, '');
  }
}

fs.writeFileSync(path, content);
