const fs = require('fs');
let file = fs.readFileSync('src/components/creative-writing/booking/BookingSummary.tsx', 'utf8');

file = file.replace("import Accordion from '@/components/ui/accordion';", "import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';");

// find <Accordion title={<span...} className="!border-0 !p-0">...
// replace with <Accordion type="single" collapsible><AccordionItem value="item-1"><AccordionTrigger>...
file = file.replace(/<Accordion title=\{(.*?)\} className="(.*?)">([\s\S]*?)<\/Accordion>/g, 
  `<Accordion type="single" collapsible className="$2">\n<AccordionItem value="item-1">\n<AccordionTrigger>$1</AccordionTrigger>\n<AccordionContent>\n$3\n</AccordionContent>\n</AccordionItem>\n</Accordion>`);

fs.writeFileSync('src/components/creative-writing/booking/BookingSummary.tsx', file);
