const fs = require('fs');
const path = 'src/App.tsx';
let content = fs.readFileSync(path, 'utf8');

if (!content.includes('SubscriptionBoxPage')) {
  content = content.replace(
    'import CustomExperiencesPage from "@/features/enha-lak-custom/templates/CustomExperiencesPage";',
    'import CustomExperiencesPage from "@/features/enha-lak-custom/templates/CustomExperiencesPage";\nimport SubscriptionBoxPage from "@/features/enha-lak-subscription/templates/SubscriptionBoxPage";'
  );
  content = content.replace(
    '<Route path="/enha-lak/subscription" element={<CustomExperiencesPage />} />',
    '<Route path="/enha-lak/subscription" element={<SubscriptionBoxPage />} />'
  );
}

fs.writeFileSync(path, content);
