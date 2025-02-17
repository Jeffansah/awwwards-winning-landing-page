import { Instagram, Twitch, Twitter, Youtube } from "lucide-react";

const socialLinks = [
  { href: "https://twitch.com", icon: <Twitch /> },
  { href: "https://twitter.com", icon: <Twitter /> },
  { href: "https://youtube.com", icon: <Youtube /> },
  { href: "https://instagram.com", icon: <Instagram /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-[#5542ff] py-4 text-black">
      <div className="container mx-auto flex flex-col gap-4 items-center justify-between px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          ©Anavrin {new Date().getFullYear()}. All rights reserved
        </p>

        <div className="flex justify-center gap-4  md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="#privacy-policy"
          className="text-center text-sm font-light hover:underline md:text-right"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
