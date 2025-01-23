import React from "react";
import { Badge } from "../ui/badge";
import { Code2, Headset, PenToolIcon, VideotapeIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Separator } from "../ui/separator";
import ProgressiveTitle from "./OurServicesSection/ProgressiveTitle";
import MovingUpImage from "./OurServicesSection/MovingUpImage";

const services = [
  {
    title: "Web Development",
    description:
      "Our talented and experienced team of designers, developers & business analysts identifies your business & technical requirements to generate a successful web and mobile strategy.",
    icon: <Code2 className="size-8 text-primary" />,
    image: "https://www.entertab.net/img/service1.jpg?ver=1",
  },
  {
    title: "Graphic Design",
    description:
      "We design brochures, catalogs and other marketing collateral to be more than just handouts; they are educational & sales tools created specifically to take your company to the next level.",
    icon: <PenToolIcon className="size-8 text-primary" />,
    image: "https://www.entertab.net/img/service2.jpg?ver=1",
  },
  {
    title: "Video Production",
    description:
      "Effective video is video that drives action. We create targeted strategies so your video content speaks to the right audience in the right way through the right channels using the latest technologies.",
    icon: <VideotapeIcon className="size-8 text-primary" />,
    image: "https://www.entertab.net/img/service3.jpg?ver=1",
  },
  {
    title: "Technical Support",
    description:
      "Our developed solutions are monitored, managed and maintained 24 hours a day, 7 days a week. By opting to employ our team of certified system experts, you can better utilize your own staff on core business activities.",
    icon: <Headset className="size-8 text-primary" />,
    image: "https://www.entertab.net/img/service4.jpg?ver=1",
  },
];

const OurServicesSection = () => {
  return (
    <section className="relative py-24 bg-secondary/30 text-secondary-foreground">
      <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-background to-card" />
      {/* Content */}
      <div>
        {/* Header */}
        <div className="header text-center">
          <Badge variant={"secondary"}>Our Services</Badge>
          <h2 className="text-3xl md:text-4xl">
            How can we help you?
            {/* <Badge className="rounded-md text-4xl font-bold">you</Badge>? */}
          </h2>
        </div>
        <Separator className="my-6 md:my-6 mx-auto max-w-3xl" />
        {/* Services */}
        <ul className="p-8 space-y-8">
          {services.map((service, index) => (
            <li key={service.title + "-service"}>
              <SingleService service={service} index={index} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default OurServicesSection;

const SingleService = ({
  service: { title, description, icon, image },
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) => {
  return (
    <Card className="max-w-3xl mx-auto">
      <CardContent
        className={cn("flex gap-4 p-2 max-sm:flex-wrap", {
          "flex-row-reverse": index % 2 !== 0,
          "flex-row": index % 2 === 0,
        })}
      >
        <CardHeader>
          {icon}
          <CardTitle className="relative ">
            <ProgressiveTitle title={title} />
          </CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardFooter className="w-full flex items-center justify-center h-auto p-3 overflow-clip">
          <MovingUpImage>
            <Image
              src={image}
              alt={title}
              width={800}
              height={200}
              className="w-72 rounded-md"
            />
          </MovingUpImage>
        </CardFooter>
      </CardContent>
    </Card>
  );
};
