import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { HamburgerMenuIcon, MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import Link from 'next/link';

type routesType = {
  name: string;
  href: string;
};

const Header = () => {
  const { setTheme, theme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<string>(theme!);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const routes: routesType[] = [
    {
      name: 'Sponsors',
      href: '/',
    },
    {
      name: 'Tracks',
      href: '/#tracks',
    },
    {
      name: 'Prizes',
      href: '/#prize',
    },
    {
      name: 'Speakers',
      href: '/#speakers',
    },
    {
      name: 'Schedule',
      href: '/#schedule',
    },
    {
      name: 'FAQs',
      href: '/#faqs',
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    if (currentTheme === 'dark') {
      setTheme('light');
      setCurrentTheme('light');
    } else {
      setTheme('dark');
      setCurrentTheme('dark');
    }
  };
  return (
    <div
      className={cn(
        'flex  z-50 items-center justify-between px-5 sticky top-0',
        scrolled &&
          'shadow-md bg-background dark:shadow-none dark:border-b dark:border-primary-dark/20 '
      )}
    >
      <Image
        src="/assets/images/logo.png"
        alt="logo"
        className="invert w-36 py-4 dark:invert-0"
        width={200}
        height={200}
      />
      <div className="items-center gap-5 hidden lg:inline-flex">
        {routes?.map((route, index) => {
          return (
            <Link
              href={route.href}
              className="font-bold uppercase cursor-pointer hover:underline hover:underline-offset-4 hover:text-primary/60 dark:hover:text-primary-dark/60 transition-all ease-out active:scale-95"
              key={index}
            >
              {route.name}
            </Link>
          );
        })}
      </div>
      {theme === 'light' ? (
        <Button
          className="hidden lg:inline-flex"
          variant={'ghost'}
          onClick={toggleTheme}
          size={'icon'}
        >
          <MoonIcon className="w-5 h-5" />
        </Button>
      ) : (
        <Button
          className="hidden lg:inline-flex"
          variant={'ghost'}
          size={'icon'}
          onClick={toggleTheme}
        >
          <SunIcon className="h-5 w-5" />
        </Button>
      )}

      <Sheet>
        <SheetTrigger className="lg:hidden">
          <HamburgerMenuIcon className="w-5 h-5" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Contents</SheetTitle>
            <SheetDescription className="flex flex-col gap-10 pt-10 text-lg">
              <div>
                {routes?.map((route, index) => {
                  return (
                    <p
                      className="font-bold text-left uppercase cursor-pointer hover:underline hover:underline-offset-4 hover:text-primary/60 dark:hover:text-primary-dark/60 transition-all ease-out active:scale-95"
                      key={index}
                    >
                      {route.name}
                    </p>
                  );
                })}
              </div>
            </SheetDescription>
          </SheetHeader>
          <SheetFooter className="flex mt-10 text-left justify-between flex-row items-center">
            <p className="uppercase  font-bold animate-pulse ">
              &copy; Hackverse 2.0
            </p>
            <Button variant={'ghost'} size={'icon'} onClick={toggleTheme}>
              {theme === 'light' ? (
                <MoonIcon className="w-5 h-5" />
              ) : (
                <SunIcon className="h-5 w-5" />
              )}
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Header;
