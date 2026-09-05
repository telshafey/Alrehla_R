import React from 'react';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';

export interface LinkProps extends Omit<RouterLinkProps, 'to'> {
  href: string;
  to?: string;
}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ href, to, ...props }, ref) => {
    return <RouterLink ref={ref} to={href || to || '#'} {...props} />;
  }
);
Link.displayName = 'Link';
