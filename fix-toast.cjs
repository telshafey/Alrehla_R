const fs = require('fs');
const glob = require('glob');

const files = glob.sync('src/**/*.{ts,tsx}');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/addToast\((.*?),\s*['"]error['"]\)/g, "toast({ title: $1, variant: 'destructive' })");
  content = content.replace(/addToast\((.*?),\s*['"]success['"]\)/g, "toast({ title: $1 })");
  content = content.replace(/const { addToast } = useToast\(\);/g, "const { toast } = useToast();");
  fs.writeFileSync(file, content);
});
