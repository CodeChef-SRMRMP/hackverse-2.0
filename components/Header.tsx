import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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
      name: "Sponsors",
      href: "/",
    },
    {
      name: "Tracks",
      href: "/about",
    },
    {
      name: "Prizes",
      href: "/blog",
    },
    {
      name: "Speakers",
      href: "/projects",
    },
    {
      name: "Schedule",
      href: "/contact",
    },
    {
      name: "FAQs",
      href: "/contact",
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

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    if (currentTheme === "dark") {
      setTheme("light");
      setCurrentTheme("light");
    } else {
      setTheme("dark");
      setCurrentTheme("dark");
    }
  };
  return (
    <div
      className={cn(
        "flex items-center justify-between px-5 sticky top-0",
        scrolled &&
          "shadow-md dark:shadow-none dark:border-b dark:border-primary-dark/20 "
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
            <button
              className="font-bold uppercase cursor-pointer hover:underline hover:underline-offset-4 hover:text-primary/60 dark:hover:text-primary-dark/60 transition-all ease-out active:scale-95"
              key={index}
            >
              {route.name}
            </button>
          );
        })}
      </div>
      <Button className="hidden lg:inline-flex" variant={"ghost"} size={"icon"}>
        {theme === "light" ? (
          <Moon onClick={toggleTheme} />
        ) : (
          <Sun onClick={toggleTheme} />
        )}
      </Button>
      <Sheet>
        <SheetTrigger className="lg:hidden">
          <Button className="lg:hidden" variant={"ghost"} size={"icon"}>
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Contents</SheetTitle>
            <SheetDescription className="flex flex-col gap-5 pt-10 text-lg">
              {routes?.map((route, index) => {
                return (
                  <button
                    className="font-bold uppercase cursor-pointer hover:underline hover:underline-offset-4 hover:text-primary/60 dark:hover:text-primary-dark/60 transition-all ease-out active:scale-95"
                    key={index}
                  >
                    {route.name}
                  </button>
                );
              })}
            </SheetDescription>
          </SheetHeader>
          <SheetFooter className="text-white/30 absolute bottom-0 p-4 ">
            &copy; Hackverse 2.0
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Header;
