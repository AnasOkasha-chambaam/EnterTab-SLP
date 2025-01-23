import { ArrowBigUpDash, CodeIcon, ZapIcon } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Image from "next/image";
import EmblaCarouselAutoScroll from "../carousel/auto-scroll/EmblaCarouselAutoScroll";
import { cn } from "@/lib/utils";

const clients = [
  {
    image: "https://www.entertab.net/img/clients/20170423152359.png",
    alt: "client",
  },
  {
    image: "https://www.entertab.net/img/clients/20170423152231.png",
    alt: "client",
  },
  {
    image: "https://www.entertab.net/img/clients/20170423152144.png",
    alt: "client",
  },
  {
    image: "https://www.entertab.net/img/clients/20170423152308.png",
    alt: "client",
  },
  {
    image: "https://www.entertab.net/img/clients/20170423152322.png",
    alt: "client",
  },
  {
    image: "https://www.entertab.net/img/clients/20170423152335.png",
    alt: "client",
  },
];

const HeaderSection = () => {
  return (
    <header className="relative overflow-hidden pt-11 pb-8">
      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant={"outline"} className="py-1 px-3 text-base ">
            <ZapIcon className="size-4 mr-2" /> Fast Website Services
          </Badge>
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">
            We achieve{" "}
            <Badge className="rounded-md text-4xl sm:text-6xl font-bold">
              Perfection
            </Badge>{" "}
            in your business website
          </h1>
          <p className="mt-6 text-lg leading-8 tracking-wide font-semibold">
            Let the best designers and developers carry your business to the
            top.
          </p>
          <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-6">
            <Button size="lg" asChild>
              <a href="https://www.entertab.net/en/buildWebsite/create">
                <CodeIcon className="mr-2" /> Build Your Website
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://www.entertab.net/en">
                More About Us <ArrowBigUpDash className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>

        {/* Client logos */}
        <div className="mt-8">
          <p className="text-center text-lg mb-6 font-bold">
            Join our satisfied clients
          </p>
          <div className="relative md:w-fit mx-auto">
            <div className="hidden md:block absolute inset-y-0 left-0 bg-gradient-to-r from-background to-transparent w-24 z-10 pointer-events-none" />
            <div className="hidden md:block absolute inset-y-0 right-0 bg-gradient-to-l from-background to-transparent w-24 z-10 pointer-events-none" />
            <EmblaCarouselAutoScroll
              slides={clients}
              options={{ loop: true }}
            />
          </div>
        </div>
      </div>

      {/* Decorative image */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[55%] transform-gpu blur-[3px] w-[960px]"
        aria-hidden="true"
      >
        <Image
          src={
            "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            // https://img.freepik.com/free-photo/programming-background-collage_23-2149901789.jpg?t=st=1737555051~exp=1737558651~hmac=40e689643a38ac614b234fc72dd7deca44fbfa4e378d209ae2ab8eba362eca3a&w=740
          }
          alt="decorative image"
          width={1260}
          height={750}
          className={cn({
            "opacity-55": true,
          })}
        />
        <div className="absolute inset-0 z-10 bg-[radial-gradient(circle,_transparent_23%,_hsl(var(--background))_52%)]" />

        {/*         
        <div
          className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80CAFF] to-[#4F46E5] opacity-20"
          style={{
            clipPath:
              "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
          }}
        /> */}
      </div>
    </header>
  );
};

export default HeaderSection;
