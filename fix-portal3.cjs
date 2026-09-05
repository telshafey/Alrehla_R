const fs = require('fs');
const path = 'src/features/portal/templates/PortalPage.tsx';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(/\{content\?\.showStepsSection !== false && \(\s*\)\}/g, '');

fs.writeFileSync(path, content);
