import {
  SiFacebook,
  SiInstagram,
  SiPinterest,
  SiX,
} from "@icons-pack/react-simple-icons";
import { Link2Icon } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Separator } from "../ui/separator";
import ContactForm from "./ContactSection/ContactForm";

const SOCIAL_MEDIA = [
  {
    name: "Facebook",
    link: "https://www.facebook.com/EnterTab-1778092955749918/timeline/",
    icon: <SiFacebook color="default" className="!size-6" />,
  },
  {
    name: "X",
    link: "https://x.com/EntertabNet",
    icon: <SiX className="!size-6" />,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/entertab/",
    icon: <SiInstagram color="default" className="!size-6" />,
  },
  {
    name: "Pinterest",
    link: "https://www.pinterest.com/entertab/",
    icon: <SiPinterest color="default" className="!size-6" />,
  },
];

const ContactSection = () => {
  return (
    <section className="relative bg-background pt-24 pb-9">
      <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-card to-background" />

      {/* Content */}
      <div>
        <div className="header text-center space-y-2">
          <Badge variant={"secondary"}>Contact Us</Badge>
          <h2 className="text-3xl md:text-3xl">
            Ask for a service, give a feedback,
            <br />
            <Badge variant={"outline"} className="text-3xl md:text-4xl mt-2">
              or just say hi!
            </Badge>
          </h2>
        </div>
        {/* Contact details */}
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 mt-7 px-4 mx-auto max-w-4xl">
          {/* Form */}
          <Card className="">
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
              <CardDescription>
                Fill the form below and we will get back to you as soon as
                possible
              </CardDescription>
              <CardContent className="pt-4">
                <ContactForm />
              </CardContent>
            </CardHeader>
          </Card>

          {/* Social Media Links */}
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center flex-col gap-2 border p-9 rounded-md w-full md:w-fit">
              <h3 className="text-2xl flex items-center gap-2">
                <Link2Icon />
                <Separator orientation="vertical" className="h-6 mx-2" /> Follow
                Us
              </h3>
              <Separator />
              <ul className="flex space-x-4">
                {SOCIAL_MEDIA.map((social) => (
                  <li key={social.name} className="">
                    <Button
                      variant={"ghost"}
                      size={"icon"}
                      className="size-10"
                      asChild
                    >
                      <a href={social.link} target="_blank" rel="noreferrer">
                        {social.icon}
                      </a>
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
