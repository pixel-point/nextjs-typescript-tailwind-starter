import Image from 'next/image';

import Link from '@/components/shared/link';

import GitHubIcon from '@/svgs/github.inline.svg';
import logo from '@/svgs/logo.svg';

function Header() {
  return (
    <>
      <header className="safe-paddings absolute left-0 right-0 top-0 h-[64px]">
        <nav className="container flex h-full items-center justify-between" aria-label="Global">
          <Link href="/">
            <Image src={logo} width={90} height={18} alt="NextJS logo" priority />
          </Link>
          <div className="flex gap-x-5">
            <Link className="text-base font-semibold" href="/about">
              About
            </Link>
            <span>|</span>
            <Link
              className="transition-opacity duration-200 hover:opacity-75"
              href="https://github.com/pixel-point/nextjs-typescript-tailwind-starter"
              target="__blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon className="h-6" />
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
