import { Instagram, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="bg-background  pt-5 z-50 relative border-t ">
      <div className=" max-w-6xl px-5 mx-auto flex items-center justify-between">
        <Image
          src={'/assets/images/short-logo.ico'}
          alt="logo-short"
          className="shadow-md shadow-foreground/20 rounded-md"
          width={50}
          height={50}
        />

        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-end gap-4">
            <Link
              target="_blank"
              className="hover:-translate-y-1 hover:text-foreground/50 cursor-pointer hover:scale-105 ease-out duration-200"
              href={'https://www.instagram.com/hackverseind/'}
            >
              <Instagram />
            </Link>
            <Link
              target="_blank"
              className="hover:-translate-y-1 hover:text-foreground/50 cursor-pointer hover:scale-105 ease-out duration-200"
              href={'https://www.linkedin.com/company/hackverse-india/'}
            >
              <Linkedin />
            </Link>
            <Link
              target="_blank"
              className="hover:-translate-y-1 hover:text-foreground/50 cursor-pointer hover:scale-105 ease-out duration-200"
              href={'https://twitter.com/HackVerseIND/'}
            >
              <Twitter />
            </Link>
          </div>
          <h1 className="text-right text-sm md:text-accent-foreground font-bold">
            For more updates
            <br /> Follow us on our social Media
          </h1>
        </div>
      </div>
      <div className="w-full py-2 font-medium mt-5 bg-secondary text-center">
        Made with ❤️ by Team Hackverse
      </div>
    </div>
  );
};

export default Footer;
