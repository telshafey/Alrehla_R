import React from 'react';
import { cn } from '@/lib/utils';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fill?: boolean;
  priority?: boolean;
  objectFit?: string;
}

export function Image({ className, fill, priority, objectFit, ...props }: ImageProps) {
  return (
    <img
      className={cn(fill && 'absolute inset-0 w-full h-full', className)}
      loading={priority ? 'eager' : 'lazy'}
      style={{ objectFit: objectFit as any, ...props.style }}
      {...props}
    />
  );
}
