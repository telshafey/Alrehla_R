const fs = require('fs');
let file = fs.readFileSync('src/features/creative-writing-booking/templates/CreativeWritingBookingPage.tsx', 'utf8');

// Replace remaining addToast calls just to console.error or toast
file = file.replace(/addToast\((.*?)\)/g, "toast({ title: $1 })");
file = file.replace(/toast\(\{\s*title:\s*toast\(\{.*\}\s*\}\)/g, "toast({ title: 'Error' })"); // Fix double replacements if any

fs.writeFileSync('src/features/creative-writing-booking/templates/CreativeWritingBookingPage.tsx', file);
