import NextLink from 'next/link';

import clsx from 'clsx';

// Example of the code — https://user-images.githubusercontent.com/20713191/144221096-1939c382-4ab8-4d28-b0e6-7bbe3a8f8556.png
const styles = {
  transition: 'transition-colors duration-200',
  // FIXME: Add base styles
  base: '',
  // FIXME: Add sizes. Better to write down all sizes and go from higher to lower, e.g. "xl", "lg", "md", "sm", "xs"
  //       Check out an example by a link above for better understanding
  size: {},
  // FIXME: Add themes. Better to name the theme using this pattern: "${color-name}-${theme-type}", e.g. "black-filled"
  //       If there is no dividing between theme types, then feel free to use just color names, e.g. "black"
  //       Check out an example by a link above for better understanding
  theme: {},
};

type LinkProps = {
  className?: string;
  href: string;
  size?: keyof typeof styles.size;
  theme?: keyof typeof styles.theme;
  children: React.ReactNode;
  prefetch?: boolean;
  target?: string;
  rel?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
};

const Link = ({
  className: additionalClassName,
  size,
  theme,
  href,
  children,
  ...props
}: LinkProps) => {
  const linkClassName = clsx(
    styles.transition,
    size && theme && styles.base,
    size && styles.size[size],
    theme && styles.theme[theme],
    additionalClassName,
  );

  if (href.startsWith('/')) {
    return (
      <NextLink className={linkClassName} href={href} {...props}>
        {children}
      </NextLink>
    );
  }

  return (
    <a className={linkClassName} href={href} {...props}>
      {children}
    </a>
  );
};

export default Link;
