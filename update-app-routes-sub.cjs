const fs = require('fs');
const path = 'src/App.tsx';
let content = fs.readFileSync(path, 'utf8');

// Add subscription route mapping to CustomExperiencesPage for now to avoid 404
if (!content.includes('path="/enha-lak/subscription"')) {
  content = content.replace(
    '<Route path="/enha-lak/store" element={<CustomExperiencesPage />} />',
    '<Route path="/enha-lak/store" element={<CustomExperiencesPage />} />\n            <Route path="/enha-lak/subscription" element={<CustomExperiencesPage />} />'
  );
}

fs.writeFileSync(path, content);
