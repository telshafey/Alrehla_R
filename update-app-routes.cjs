const fs = require('fs');
const path = 'src/App.tsx';
let content = fs.readFileSync(path, 'utf8');

// Add imports
if (!content.includes('JoinUsPage')) {
  content = content.replace(
    'import AboutPage from "@/features/about/templates/AboutPage";',
    'import AboutPage from "@/features/about/templates/AboutPage";\nimport JoinUsPage from "@/features/join-us/templates/JoinUsPage";\nimport SupportPage from "@/features/support/templates/SupportPage";'
  );
}

// Add routes
if (!content.includes('path="/join-us"')) {
  content = content.replace(
    '<Route path="/about" element={<AboutPage />} />',
    '<Route path="/about" element={<AboutPage />} />\n            <Route path="/join-us" element={<JoinUsPage />} />\n            <Route path="/support" element={<SupportPage />} />'
  );
}

fs.writeFileSync(path, content);
