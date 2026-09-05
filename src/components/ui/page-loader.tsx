import React from 'react';
import { Loader2 } from 'lucide-react';

export default function PageLoader({ text = 'جاري التحميل...' }: { text?: string }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh]">
      <Loader2 className="w-10 h-10 animate-spin text-primary mb-4" />
      <p className="text-muted-foreground">{text}</p>
    </div>
  );
}
