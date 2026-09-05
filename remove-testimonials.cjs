const fs = require('fs');
const path = 'src/features/portal/templates/PortalPage.tsx';

let content = fs.readFileSync(path, 'utf8');

// The section is enclosed in {content?.showTestimonialsSection !== false && ( ... )}
// We can just remove it entirely using a regular expression or string replacement.

const startStr = "{content?.showTestimonialsSection !== false && (";
const endStr = "      )}";

if (content.includes(startStr)) {
  const parts = content.split(startStr);
  const part2 = parts[1];
  const endIdx = part2.indexOf(endStr) + endStr.length;
  
  content = parts[0] + part2.substring(endIdx);
  fs.writeFileSync(path, content);
}

