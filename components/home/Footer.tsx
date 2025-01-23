import React from "react";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground h-14 border-t px-9">
      <div className="container mx-auto flex items-center justify-between h-full">
        <p>&copy; 2025 Entertab, LLC</p>
        <Button variant={"link"} asChild>
          <a
            href="https://anas-okasha-next-portfolio.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            By: Anas Okasha
          </a>
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
