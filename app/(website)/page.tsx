import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
   CheckCheck,
   ChevronLeft,
   ChevronRight,
   ChevronsRight,
   Circle,
   Dribbble,
   Earth,
   Facebook,
   FileText,
   Gauge,
   Headset,
   Instagram,
   Link,
   Linkedin,
   Menu,
   MonitorPlay,
   Play,
   Plus,
   Quote,
   Smile,
   Tent,
   Twitter,
   UsersRound,
} from "lucide-react";
import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import banner from "../../public/banner.jpg";
import testimonials1 from "../../public/testimonials-5.jpg";
import testimonials2 from "../../public/testimonials-4.jpg";
import portfolio1 from "../../public/portfolio-1.jpg";
import portfolio2 from "../../public/portfolio-2.jpg";
import portfolio3 from "../../public/portfolio-3.jpg";
import portfolio4 from "../../public/portfolio-4.jpg";
import portfolio5 from "../../public/portfolio-5.jpg";
import portfolio6 from "../../public/portfolio-6.jpg";
import portfolio7 from "../../public/portfolio-7.jpg";
import portfolio8 from "../../public/portfolio-8.jpg";
import portfolio9 from "../../public/portfolio-9.jpg";
import team1 from "../../public/team-1.jpg";
import team2 from "../../public/team-2.jpg";
import team3 from "../../public/team-3.jpg";
import team4 from "../../public/team-4.jpg";

const page = () => {
   return (
      <section className="relative pt-[80px]">
         <header className="text-dark-brown fixed top-0 left-0 right-0 z-50 shadow-xl">
            <div className="bg-white">
               <div className="container flex justify-between items-center py-6">
                  {/* Logo */}
                  <div className="font-bold text-2xl text-slate-900">MULTI</div>
                  {/* Menu section */}
                  <div>
                     {/* mobile menu */}
                     <div className="lg:hidden">
                        <Sheet>
                           <SheetTrigger className="flex justify-center items-center">
                              <Menu />
                           </SheetTrigger>
                           <SheetContent>
                              <ul className="w-full flex flex-col py-10 gap-y-6">
                                 <li className="w-full text-primary">Home</li>
                                 <li className="w-full">About</li>
                                 <li className="w-full">Services</li>
                                 <li className="w-full">Portfolio</li>
                                 <li className="w-full">Drop Down</li>
                                 <li className="w-full">Contact</li>
                                 <li className="w-full mt-2">
                                    <button className="w-full py-2 px-4 text-left text-white bg-primary rounded-md">
                                       Get Started
                                    </button>
                                 </li>
                              </ul>
                           </SheetContent>
                        </Sheet>
                     </div>
                     {/* desktop menu */}
                     <div className="hidden lg:block">
                        <ul className="flex justify-center items-center gap-x-4">
                           <li className="px-2 text-primary cursor-pointer">Home</li>
                           <li className="px-2 cursor-pointer">About</li>
                           <li className="px-2 cursor-pointer">Services</li>
                           <li className="px-2 cursor-pointer">Portfolio</li>
                           <li className="px-2 cursor-pointer">Drop Down</li>
                           <li className="px-2 cursor-pointer">Contact</li>
                           <li className="px-2 flex justify-center items-center">
                              <button className="py-2 px-4 text-left text-white bg-primary rounded-md">
                                 Get Started
                              </button>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </header>
         <main>
            {/* Introduction */}
            <section className="w-full relative">
               <div className="h-0 pb-[calc(100vh-80px)] overflow-hidden">
                  <Image
                     src={banner}
                     alt="banner"
                     fill
                     className="object-center object-cover absolute top-0 bottom-0 left-0 right-0"
                  />
                  <div className="size-14 flex justify-center items-center bg-white rounded-full bg-opacity-20 absolute top-[calc(50%-28px)] right-0 md:right-4 cursor-pointer transition-all duration-300 hover:bg-opacity-30 [&>.next]:hover:text-opacity-60">
                     <ChevronRight className="size-10 text-white text-opacity-25 transition-all duration-300 next" />
                  </div>
                  <div className="size-14 flex justify-center items-center bg-white rounded-full bg-opacity-20 absolute top-[calc(50%-28px)] left:0 md:left-4 cursor-pointer transition-all duration-300 hover:bg-opacity-30 [&>.next]:hover:text-opacity-60">
                     <ChevronLeft className="size-10 text-white text-opacity-25 transition-all duration-300 next" />
                  </div>
                  <div className="flex flex-col justify-start start items-center lg:items-start absolute right-20 lg:right-24 xl:right-1/2 left-20 lg:left-24 bottom-16 md:top-[calc(50%-80px)]">
                     <div className="font-bold text-3xl text-center lg:text-left text-white">
                        Welcome to Multi
                     </div>
                     <div className="text-white text-center lg:text-left mt-4">
                        Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et
                        est quaerat sequi nihil ut aliquam. Occaecati alias dolorem
                        mollitia ut. Similique ea voluptatem. Esse doloremque accusamus
                        repellendus deleniti vel.
                     </div>
                     <div>
                        <button className="py-2 px-6 mt-4 bg-primary text-sm text-white rounded-md">
                           Read More
                        </button>
                     </div>
                  </div>
                  <div className="w-32 absolute bottom-4 md:bottom-10 left-[calc(50%-60px)] flex justify-center items-center align-middle gap-x-2">
                     <Circle className="size-3 text-primary bg-primary rounded-full" />
                     <Circle className="size-3 text-transparent bg-white opacity-60 rounded-full" />
                     <Circle className="size-3 text-transparent bg-white opacity-60 rounded-full" />
                  </div>
               </div>
            </section>
            {/* About Us */}
            <section className="container flex flex-col justify-center items-start gap-y-14 py-14">
               <div>
                  <span className="text-sm text-[#aaaaaa] tracking-widest relative after:absolute after:-right-32 after:top-1/3 after:w-28 after:mt-0.5 after:h-[1px] after:bg-primary">
                     ABOUT
                  </span>
                  <h2 className="font-extrabold text-3xl text-dark-blue pt-2">
                     ABOUT US
                  </h2>
               </div>
               <div className="text-dark-brown text-opacity-85 flex flex-col lg:flex-row justify-center items-start gap-x-8 gap-y-10">
                  <div className="flex flex-col flex-1">
                     <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                     </p>
                     <ul className="flex flex-col justify-center items-start gap-y-3 mt-4">
                        <li className="flex justify-start items-start">
                           <span className="text-primary">
                              <CheckCheck className="w-5" />
                           </span>
                           <p className="ml-2">
                              Ullamco laboris nisi ut aliquip ex ea commodo consequat
                           </p>
                        </li>
                        <li className="flex justify-start items-start">
                           <span className="text-primary">
                              <CheckCheck className="w-5" />
                           </span>
                           <p className="ml-2">
                              Duis aute irure dolor in reprehenderit in voluptate velit
                           </p>
                        </li>
                        <li className="flex justify-start items-start">
                           <span className="text-primary">
                              <CheckCheck className="w-5" />
                           </span>
                           <p className="ml-2">
                              Ullamco laboris nisi ut aliquip ex ea commodo consequat
                           </p>
                        </li>
                     </ul>
                  </div>
                  <div className="flex flex-col justify-center items-start flex-1">
                     <p className="">
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                        irure dolor in reprehenderit in voluptate velit esse cillum dolore
                        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est
                        laborum.
                     </p>
                     <button className="px-10 py-2 mt-6 border-2 border-primary rounded-md text-primary text-sm transition-all duration-300 hover:bg-primary hover:text-white">
                        Learn More
                     </button>
                  </div>
               </div>
               <div className="w-full grid grid-cols-4 gap-6 text-dark-brown text-opacity-85">
                  <div className="col-span-4 md:col-span-2 lg:col-span-1 px-6 py-6 shadow-xl">
                     <div className="flex justify-start items-center gap-x-4">
                        <span className="text-primary">
                           <Smile className="size-9" />
                        </span>
                        <span className="pb-5 font-bold text-4xl text-darker-blue">
                           232
                        </span>
                     </div>
                     <div>
                        <p className="text-sm">
                           <span className="font-bold mr-1">Happy Clients</span>
                           consequuntur quae qui deca rode
                        </p>
                     </div>
                     <div className="flex items-center gap-x-1.5 mt-4 font-semibold text-sm text-dark-blue">
                        Fine out More
                        <ChevronsRight className="size-3" />
                     </div>
                  </div>
                  <div className="col-span-4 md:col-span-2 lg:col-span-1 px-6 py-6 shadow-xl">
                     <div className="flex justify-start items-center gap-x-4">
                        <span className="text-primary">
                           <FileText className="size-9" />
                        </span>
                        <span className="pb-5 font-bold text-4xl text-darker-blue">
                           232
                        </span>
                     </div>
                     <div>
                        <p className="text-sm">
                           <span className="font-bold mr-1">Projects</span>
                           adipisci atque cum quia aut numquam delectus
                        </p>
                     </div>
                     <div className="flex items-center gap-x-1.5 mt-4 font-semibold text-sm text-dark-blue">
                        Fine out More
                        <ChevronsRight className="size-3" />
                     </div>
                  </div>
                  <div className="col-span-4 md:col-span-2 lg:col-span-1 px-6 py-6 shadow-xl">
                     <div className="flex justify-start items-center gap-x-4">
                        <span className="text-primary">
                           <Headset className="size-9" />
                        </span>
                        <span className="pb-5 font-bold text-4xl text-darker-blue">
                           232
                        </span>
                     </div>
                     <div>
                        <p className="text-sm">
                           <span className="font-bold mr-1">Hours Of Support</span>
                           aut commodi quaerat. Aliquam ratione
                        </p>
                     </div>
                     <div className="flex items-center gap-x-1.5 mt-4 font-semibold text-sm text-dark-blue">
                        Fine out More
                        <ChevronsRight className="size-3" />
                     </div>
                  </div>
                  <div className="col-span-4 md:col-span-2 lg:col-span-1 px-6 py-6 shadow-xl">
                     <div className="flex justify-start items-center gap-x-4">
                        <span className="text-primary">
                           <UsersRound className="size-9" />
                        </span>
                        <span className="pb-5 font-bold text-4xl text-darker-blue">
                           232
                        </span>
                     </div>
                     <div>
                        <p className="text-sm">
                           <span className="font-bold mr-1">Hard Workers</span>
                           rerum asperiores dolor molestiae doloribu
                        </p>
                     </div>
                     <div className="flex items-center gap-x-1.5 mt-4 font-semibold text-sm text-dark-blue">
                        Fine out More
                        <ChevronsRight className="size-3" />
                     </div>
                  </div>
               </div>
            </section>
            {/* Why Us */}
            <section className="flex flex-col lg:flex-row">
               {/* video */}
               <div className="h-[400px] lg:h-auto lg:w-[500px] xl:w-[600px] flex justify-center items-center bg-whyus bg-center bg-cover">
                  <a
                     href="https://www.youtube.com/watch?v=jDDaplaOz7Q"
                     className="size-16 flex justify-center items-center rounded-full bg-primary ring-[12px] ring-[rgba(237,80,43,0.4)] transition duration-300 hover:scale-125">
                     <Play className="fill-white size-8 text-primary" />
                  </a>
               </div>
               {/* description */}
               <div className="lg:flex-1 bg-[#F7F9FD] px-2 lg:px-6 xl:px-20 py-8 lg:py-10 xl:py-12">
                  <h3 className="font-normal text-3xl text-dark-blue leading-[44px]">
                     Eum ipsam laborum deleniti
                     <span className="font-bold ml-1">velit pariatur architecto</span>
                  </h3>
                  <p className="text-sm text-dark-brown text-opacity-75 leading-[22px] py-2">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                     eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute
                     irure dolor in reprehenderit
                  </p>
                  <div>
                     <Accordion
                        className="flex flex-col gap-y-4 mt-2"
                        type="single"
                        collapsible>
                        <AccordionItem
                           className="px-4 py-2 border-0 bg-white rounded-md"
                           value="item-1">
                           <AccordionTrigger className="flex justify-between gap-x-4 items-start text-left text-darker-blue [&>svg]:size-5 transition duration-300 hover:no-underline hover:text-primary">
                              <span className="dec">
                                 <span className="font-bold text-primary mr-2">01</span>
                                 Non consectetur a erat nam at lectus urna duis?
                              </span>
                           </AccordionTrigger>
                           <AccordionContent className="text-base text-dark-brown">
                              Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id
                              volutpat lacus laoreet non curabitur gravida. Venenatis
                              lectus magna fringilla urna porttitor rhoncus dolor purus
                              non.
                           </AccordionContent>
                        </AccordionItem>
                        <AccordionItem
                           className="px-4 py-2 border-0 bg-white rounded-md"
                           value="item-2">
                           <AccordionTrigger className="flex justify-between gap-x-4 items-start text-left text-darker-blue [&>svg]:size-5 transition duration-300 hover:no-underline hover:text-primary">
                              <span className="dec">
                                 <span className="font-bold text-primary mr-2">02</span>
                                 Feugiat scelerisque varius morbi enim nunc?
                              </span>
                           </AccordionTrigger>
                           <AccordionContent className="text-base text-dark-brown">
                              Dolor sit amet consectetur adipiscing elit pellentesque
                              habitant morbi. Id interdum velit laoreet id donec ultrices.
                              Fringilla phasellus faucibus scelerisque eleifend donec
                              pretium. Est pellentesque elit ullamcorper dignissim. Mauris
                              ultrices eros in cursus turpis massa tincidunt dui.
                           </AccordionContent>
                        </AccordionItem>
                        <AccordionItem
                           className="px-4 py-2 border-0 bg-white rounded-md"
                           value="item-3">
                           <AccordionTrigger className="flex justify-between gap-x-4 items-start text-left text-darker-blue [&>svg]:size-5 transition duration-300 hover:no-underline hover:text-primary">
                              <span className="dec">
                                 <span className="font-bold text-primary mr-2">03</span>
                                 Dolor sit amet consectetur adipiscing elit?
                              </span>
                           </AccordionTrigger>
                           <AccordionContent className="text-base text-dark-brown">
                              Eleifend mi in nulla posuere sollicitudin aliquam ultrices
                              sagittis orci. Faucibus pulvinar elementum integer enim. Sem
                              nulla pharetra diam sit amet nisl suscipit. Rutrum tellus
                              pellentesque eu tincidunt. Lectus urna duis convallis
                              convallis tellus. Urna molestie at elementum eu facilisis
                              sed odio morbi quis
                           </AccordionContent>
                        </AccordionItem>
                     </Accordion>
                  </div>
               </div>
            </section>
            {/* chech our services */}
            <section className="container">
               <div className="py-10">
                  <span className="text-sm text-[#aaaaaa] tracking-widest relative after:absolute after:-right-32 after:top-1/3 after:w-28 after:mt-0.5 after:h-[1px] after:bg-primary">
                     SERVICES
                  </span>
                  <h2 className="font-extrabold text-3xl text-dark-blue leading-[44px] pt-1">
                     CHECK OUR SERVICES
                  </h2>
               </div>
               <div className="grid grid-cols-6 gap-6 pb-14">
                  <div className="h-[330px] col-span-6 md:col-span-3 lg:col-span-2 flex flex-col justify-center items-center shadow-xl px-6 transition-all duration-300 hover:bg-primary [&>div>#iconBox]:hover:bg-white [&>div>#iconBox>svg]:hover:text-primary [&>h5]:hover:text-white [&>p]:hover:text-white">
                     <div className="w-16 h-[66px] relative z-20 after:absolute after:-z-10 after:-top-2 after:-left-2 after:w-16 after:h-[66px] after:bg-[rgb(249,198,187)] after:rounded-md">
                        <div
                           id="iconBox"
                           className="w-full h-full flex justify-center items-center bg-primary rounded-md overflow-hidden transition duration-300">
                           <Dribbble className="size-7 text-white transition dura" />
                        </div>
                     </div>
                     <h5 className="py-4 font-bold text-2xl text-darker-blue transition duration-300">
                        Lorem Ipsum
                     </h5>
                     <p className="text-center text-sm text-dark-brown text-opacity-85 transition duration-300">
                        Voluptatum deleniti atque corrupti quos dolores et quas molestias
                        excepturi
                     </p>
                  </div>
                  <div className="h-[330px] col-span-6 md:col-span-3 lg:col-span-2 flex flex-col justify-center items-center shadow-xl px-6 transition-all duration-300 hover:bg-primary [&>div>#iconBox]:hover:bg-white [&>div>#iconBox>svg]:hover:text-primary [&>h5]:hover:text-white [&>p]:hover:text-white">
                     <div className="w-16 h-[66px] relative z-20 after:absolute after:-z-10 after:-top-2 after:-left-2 after:w-16 after:h-[66px] after:bg-[rgb(249,198,187)] after:rounded-md">
                        <div
                           id="iconBox"
                           className="w-full h-full flex justify-center items-center bg-primary rounded-md overflow-hidden transition duration-300">
                           <FileText className="size-7 text-white transition dura" />
                        </div>
                     </div>
                     <h5 className="py-4 font-bold text-2xl text-darker-blue transition duration-300">
                        Sed ut perspiciatis
                     </h5>
                     <p className="text-center text-sm text-dark-brown text-opacity-85 transition duration-300">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore
                     </p>
                  </div>
                  <div className="h-[330px] col-span-6 md:col-span-3 lg:col-span-2 flex flex-col justify-center items-center shadow-xl px-6 transition-all duration-300 hover:bg-primary [&>div>#iconBox]:hover:bg-white [&>div>#iconBox>svg]:hover:text-primary [&>h5]:hover:text-white [&>p]:hover:text-white">
                     <div className="w-16 h-[66px] relative z-20 after:absolute after:-z-10 after:-top-2 after:-left-2 after:w-16 after:h-[66px] after:bg-[rgb(249,198,187)] after:rounded-md">
                        <div
                           id="iconBox"
                           className="w-full h-full flex justify-center items-center bg-primary rounded-md overflow-hidden transition duration-300">
                           <Gauge className="size-7 text-white transition dura" />
                        </div>
                     </div>
                     <h5 className="py-4 font-bold text-2xl text-darker-blue transition duration-300">
                        Magni Dolores
                     </h5>
                     <p className="text-center text-sm text-dark-brown text-opacity-85 transition duration-300">
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                        officia
                     </p>
                  </div>
                  <div className="h-[330px] col-span-6 md:col-span-3 lg:col-span-2 flex flex-col justify-center items-center shadow-xl px-6 transition-all duration-300 hover:bg-primary [&>div>#iconBox]:hover:bg-white [&>div>#iconBox>svg]:hover:text-primary [&>h5]:hover:text-white [&>p]:hover:text-white">
                     <div className="w-16 h-[66px] relative z-20 after:absolute after:-z-10 after:-top-2 after:-left-2 after:w-16 after:h-[66px] after:bg-[rgb(249,198,187)] after:rounded-md">
                        <div
                           id="iconBox"
                           className="w-full h-full flex justify-center items-center bg-primary rounded-md overflow-hidden transition duration-300">
                           <Earth className="size-7 text-white transition dura" />
                        </div>
                     </div>
                     <h5 className="py-4 font-bold text-2xl text-darker-blue transition duration-300">
                        Nemo Enim
                     </h5>
                     <p className="text-center text-sm text-dark-brown text-opacity-85 transition duration-300">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui
                        blanditiis
                     </p>
                  </div>
                  <div className="h-[330px] col-span-6 md:col-span-3 lg:col-span-2 flex flex-col justify-center items-center shadow-xl px-6 transition-all duration-300 hover:bg-primary [&>div>#iconBox]:hover:bg-white [&>div>#iconBox>svg]:hover:text-primary [&>h5]:hover:text-white [&>p]:hover:text-white">
                     <div className="w-16 h-[66px] relative z-20 after:absolute after:-z-10 after:-top-2 after:-left-2 after:w-16 after:h-[66px] after:bg-[rgb(249,198,187)] after:rounded-md">
                        <div
                           id="iconBox"
                           className="w-full h-full flex justify-center items-center bg-primary rounded-md overflow-hidden transition duration-300">
                           <MonitorPlay className="size-7 text-white transition dura" />
                        </div>
                     </div>
                     <h5 className="py-4 font-bold text-2xl text-darker-blue transition duration-300">
                        Dele cardo
                     </h5>
                     <p className="text-center text-sm text-dark-brown text-opacity-85 transition duration-300">
                        Quis consequatur saepe eligendi voluptatem consequatur dolor
                        consequuntur
                     </p>
                  </div>
                  <div className="h-[330px] col-span-6 md:col-span-3 lg:col-span-2 flex flex-col justify-center items-center shadow-xl px-6 transition-all duration-300 hover:bg-primary [&>div>#iconBox]:hover:bg-white [&>div>#iconBox>svg]:hover:text-primary [&>h5]:hover:text-white [&>p]:hover:text-white">
                     <div className="w-16 h-[66px] relative z-20 after:absolute after:-z-10 after:-top-2 after:-left-2 after:w-16 after:h-[66px] after:bg-[rgb(249,198,187)] after:rounded-md">
                        <div
                           id="iconBox"
                           className="w-full h-full flex justify-center items-center bg-primary rounded-md overflow-hidden transition duration-300">
                           <Tent className="size-7 text-white transition dura" />
                        </div>
                     </div>
                     <h5 className="py-4 font-bold text-2xl text-darker-blue transition duration-300">
                        Divera don
                     </h5>
                     <p className="text-center text-sm text-dark-brown text-opacity-85 transition duration-300">
                        Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit
                        aspernatur
                     </p>
                  </div>
               </div>
            </section>
            {/* testimonials */}
            <section className="bg-[#F7F9FD]">
               <section className="container">
                  <div className="py-14">
                     <span className="text-sm text-[#aaaaaa] tracking-widest relative after:absolute after:-right-32 after:top-1/3 after:w-28 after:mt-0.5 after:h-[1px] after:bg-primary">
                        TESTIMONIALS
                     </span>
                     <h2 className="font-extrabold text-3xl text-dark-blue pt-2">
                        TESTIMONIALS
                     </h2>
                  </div>
                  <div className="xl:flex xl:justify-center xl:items-center xl:gap-x-10">
                     <div className="xl:flex-1 pl-10">
                        <div className="pl-14 pr-6 py-8 md:pb-20 bg-white shadow-xl relative">
                           {/* avatar */}
                           <div className="w-[80px] h-[80px] absolute top-9 -left-10 rounded-md overflow-hidden ring-4 ring-white rotat">
                              <Image
                                 src={testimonials1}
                                 alt="testimonials-5"
                                 className="object-cover object-center"
                                 fill
                              />
                           </div>
                           <div className="pt-2 pb-4">
                              <div className="font-bold text-xl text-dark-brown">
                                 John Larson
                              </div>
                              <div className="text-sm text-dark-brown text-opacity-70">
                                 Entrepreneur
                              </div>
                           </div>
                           <div className="text-left text-dark-brown text-opacity-85 italic">
                              <div className="inline-block font-bold text-5xl text-[#f9c6bb] leading-[0px] align-top mr-1 mt-1">
                                 ،،
                              </div>
                              Quis quorum aliqua sint quem legam fore sunt eram irure
                              aliqua veniam tempor noster veniam enim culpa labore duis
                              sunt culpa nulla illum cillum fugiat legam esse veniam culpa
                              fore nisi cillum quid.
                              <div className="inline-block font-bold text-5xl text-[#f9c6bb] leading-[0px] align-bottom rotate-180 ml-1 mb-1.5">
                                 ،،
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="flex-1 pl-10 hidden xl:block">
                        <div className="pl-14 pr-6 py-8 md:pb-20 bg-white shadow-xl relative">
                           {/* avatar */}
                           <div className="w-[80px] h-[80px] absolute top-9 -left-10 rounded-md overflow-hidden ring-4 ring-white rotat">
                              <Image
                                 src={testimonials2}
                                 alt="testimonials-5"
                                 className="object-cover object-center"
                                 fill
                              />
                           </div>
                           <div className="pt-2 pb-4">
                              <div className="font-bold text-xl text-dark-brown">
                                 Matt Brandon
                              </div>
                              <div className="text-sm text-dark-brown text-opacity-70">
                                 Freelancer
                              </div>
                           </div>
                           <div className="text-left text-dark-brown text-opacity-85 italic">
                              <div className="inline-block font-bold text-5xl text-[#f9c6bb] leading-[0px] align-top mr-1 mt-1">
                                 ،،
                              </div>
                              Fugiat enim eram quae cillum dolore dolor amet nulla culpa
                              multos export minim fugiat minim velit minim dolor enim duis
                              veniam ipsum anim sunt elit fore quem dolore labore illum
                              veniam.
                              <div className="inline-block font-bold text-5xl text-[#f9c6bb] leading-[0px] align-bottom rotate-180 ml-1 mb-1.5">
                                 ،،
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="py-16 flex justify-center items-center align-middle gap-x-2">
                     <Circle className="size-3 text-primary bg-primary rounded-full" />
                     <Circle className="size-3 text-primary" />
                     <Circle className="size-3 text-primary" />
                     <Circle className="size-3 text-primary" />
                     <Circle className="size-3 text-primary" />
                  </div>
               </section>
            </section>
            {/* Call To Action */}
            <section className="py-14 bg-darker-blue">
               <div className="container flex flex-col justify-center items-center">
                  <div className="font-bold text-2xl text-white text-center">
                     Call To Action
                  </div>
                  <div className="mt-3 text-white text-center">
                     Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                     dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                     non proident, sunt in culpa qui officia deserunt mollit anim id est
                     laborum.
                  </div>
                  <button className="px-10 py-2 mt-6 border-2 border-primary rounded-md text-sm text-white">
                     Call To Action
                  </button>
               </div>
            </section>
            {/* portfolio */}
            <section className="container pb-20">
               <div className="py-10">
                  <span className="text-sm text-[#aaaaaa] tracking-widest relative after:absolute after:-right-32 after:top-1/3 after:w-28 after:mt-0.5 after:h-[1px] after:bg-primary">
                     PORTFOLIO
                  </span>
                  <h2 className="font-extrabold text-3xl text-dark-blue leading-[44px] pt-1">
                     CHECK OUR PORTFOLIO
                  </h2>
               </div>
               <div>
                  <div className="flex justify-center items-center gap-x-6 pt-2 pb-14">
                     <button className="font-medium text-sm text-primary">ALL</button>
                     <button className="font-medium text-sm text-darker-blue">APP</button>
                     <button className="font-medium text-sm text-darker-blue">
                        CARD
                     </button>
                     <button className="font-medium text-sm text-darker-blue">WEB</button>
                  </div>
                  <div className="grid grid-cols-6 gap-8">
                     {/* ................ */}
                     <div className="col-span-6 md:col-span-3 lg:col-span-2 relative [&>div>#detaile]:hover:-translate-y-6 [&>div>#detaile]:hover:bg-opacity-85 [&>div>#detaile>div>div]:hover:text-opacity-100 [&>div>#detaile>div>.icons]:hover:opacity-100">
                        <div className="h-0 pb-[80%]">
                           <Image
                              src={portfolio1}
                              alt="portfolio1"
                              className="object-cover object-center"
                              fill
                           />
                           <div
                              id="detaile"
                              className="h-20 w-[calc(100%-48px)] flex justify-between items-center absolute bottom-0 laft-6 right-6 px-4 bg-white bg-opacity-0 transition-all duration-300">
                              <div>
                                 <div className="font-medium text-lg text-darker-blue text-opacity-0 transition duration-300">
                                    App1
                                 </div>
                                 <div className="text-dark-blue text-opacity-0 transition duration-300">
                                    App
                                 </div>
                              </div>
                              <div className="flex justify-center items-center gap-x-2">
                                 <Plus className="text-darker-blue opacity-0 transition-all duration-300 cursor-pointer hover:text-primary icons" />
                                 <Link className="text-darker-blue opacity-0 transition-all duration-300 cursor-pointer hover:text-primary icons" />
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-span-6 md:col-span-3 lg:col-span-2 relative [&>div>#detaile]:hover:-translate-y-6 [&>div>#detaile]:hover:bg-opacity-85 [&>div>#detaile>div>div]:hover:text-opacity-100 [&>div>#detaile>div>.icons]:hover:opacity-100">
                        <div className="h-0 pb-[80%]">
                           <Image
                              src={portfolio2}
                              alt="portfolio1"
                              className="object-cover object-center"
                              fill
                           />
                           <div
                              id="detaile"
                              className="h-20 w-[calc(100%-48px)] flex justify-between items-center absolute bottom-0 laft-6 right-6 px-4 bg-white bg-opacity-0 transition-all duration-300">
                              <div>
                                 <div className="font-medium text-lg text-darker-blue text-opacity-0 transition duration-300">
                                    App1
                                 </div>
                                 <div className="text-dark-blue text-opacity-0 transition duration-300">
                                    App
                                 </div>
                              </div>
                              <div className="flex justify-center items-center gap-x-2">
                                 <Plus className="text-darker-blue opacity-0 transition-all duration-300 cursor-pointer hover:text-primary icons" />
                                 <Link className="text-darker-blue opacity-0 transition-all duration-300 cursor-pointer hover:text-primary icons" />
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-span-6 md:col-span-3 lg:col-span-2 relative [&>div>#detaile]:hover:-translate-y-6 [&>div>#detaile]:hover:bg-opacity-85 [&>div>#detaile>div>div]:hover:text-opacity-100 [&>div>#detaile>div>.icons]:hover:opacity-100">
                        <div className="h-0 pb-[80%]">
                           <Image
                              src={portfolio3}
                              alt="portfolio1"
                              className="object-cover object-center"
                              fill
                           />
                           <div
                              id="detaile"
                              className="h-20 w-[calc(100%-48px)] flex justify-between items-center absolute bottom-0 laft-6 right-6 px-4 bg-white bg-opacity-0 transition-all duration-300">
                              <div>
                                 <div className="font-medium text-lg text-darker-blue text-opacity-0 transition duration-300">
                                    App1
                                 </div>
                                 <div className="text-dark-blue text-opacity-0 transition duration-300">
                                    App
                                 </div>
                              </div>
                              <div className="flex justify-center items-center gap-x-2">
                                 <Plus className="text-darker-blue opacity-0 transition-all duration-300 cursor-pointer hover:text-primary icons" />
                                 <Link className="text-darker-blue opacity-0 transition-all duration-300 cursor-pointer hover:text-primary icons" />
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-span-6 md:col-span-3 lg:col-span-2 relative [&>div>#detaile]:hover:-translate-y-6 [&>div>#detaile]:hover:bg-opacity-85 [&>div>#detaile>div>div]:hover:text-opacity-100 [&>div>#detaile>div>.icons]:hover:opacity-100">
                        <div className="h-0 pb-[80%]">
                           <Image
                              src={portfolio4}
                              alt="portfolio1"
                              className="object-cover object-center"
                              fill
                           />
                           <div
                              id="detaile"
                              className="h-20 w-[calc(100%-48px)] flex justify-between items-center absolute bottom-0 laft-6 right-6 px-4 bg-white bg-opacity-0 transition-all duration-300">
                              <div>
                                 <div className="font-medium text-lg text-darker-blue text-opacity-0 transition duration-300">
                                    App1
                                 </div>
                                 <div className="text-dark-blue text-opacity-0 transition duration-300">
                                    App
                                 </div>
                              </div>
                              <div className="flex justify-center items-center gap-x-2">
                                 <Plus className="text-darker-blue opacity-0 transition-all duration-300 cursor-pointer hover:text-primary icons" />
                                 <Link className="text-darker-blue opacity-0 transition-all duration-300 cursor-pointer hover:text-primary icons" />
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-span-6 md:col-span-3 lg:col-span-2 relative [&>div>#detaile]:hover:-translate-y-6 [&>div>#detaile]:hover:bg-opacity-85 [&>div>#detaile>div>div]:hover:text-opacity-100 [&>div>#detaile>div>.icons]:hover:opacity-100">
                        <div className="h-0 pb-[80%]">
                           <Image
                              src={portfolio5}
                              alt="portfolio1"
                              className="object-cover object-center"
                              fill
                           />
                           <div
                              id="detaile"
                              className="h-20 w-[calc(100%-48px)] flex justify-between items-center absolute bottom-0 laft-6 right-6 px-4 bg-white bg-opacity-0 transition-all duration-300">
                              <div>
                                 <div className="font-medium text-lg text-darker-blue text-opacity-0 transition duration-300">
                                    App1
                                 </div>
                                 <div className="text-dark-blue text-opacity-0 transition duration-300">
                                    App
                                 </div>
                              </div>
                              <div className="flex justify-center items-center gap-x-2">
                                 <Plus className="text-darker-blue opacity-0 transition-all duration-300 cursor-pointer hover:text-primary icons" />
                                 <Link className="text-darker-blue opacity-0 transition-all duration-300 cursor-pointer hover:text-primary icons" />
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-span-6 md:col-span-3 lg:col-span-2 relative [&>div>#detaile]:hover:-translate-y-6 [&>div>#detaile]:hover:bg-opacity-85 [&>div>#detaile>div>div]:hover:text-opacity-100 [&>div>#detaile>div>.icons]:hover:opacity-100">
                        <div className="h-0 pb-[80%]">
                           <Image
                              src={portfolio6}
                              alt="portfolio1"
                              className="object-cover object-center"
                              fill
                           />
                           <div
                              id="detaile"
                              className="h-20 w-[calc(100%-48px)] flex justify-between items-center absolute bottom-0 laft-6 right-6 px-4 bg-white bg-opacity-0 transition-all duration-300">
                              <div>
                                 <div className="font-medium text-lg text-darker-blue text-opacity-0 transition duration-300">
                                    App1
                                 </div>
                                 <div className="text-dark-blue text-opacity-0 transition duration-300">
                                    App
                                 </div>
                              </div>
                              <div className="flex justify-center items-center gap-x-2">
                                 <Plus className="text-darker-blue opacity-0 transition-all duration-300 cursor-pointer hover:text-primary icons" />
                                 <Link className="text-darker-blue opacity-0 transition-all duration-300 cursor-pointer hover:text-primary icons" />
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-span-6 md:col-span-3 lg:col-span-2 relative [&>div>#detaile]:hover:-translate-y-6 [&>div>#detaile]:hover:bg-opacity-85 [&>div>#detaile>div>div]:hover:text-opacity-100 [&>div>#detaile>div>.icons]:hover:opacity-100">
                        <div className="h-0 pb-[80%]">
                           <Image
                              src={portfolio7}
                              alt="portfolio1"
                              className="object-cover object-center"
                              fill
                           />
                           <div
                              id="detaile"
                              className="h-20 w-[calc(100%-48px)] flex justify-between items-center absolute bottom-0 laft-6 right-6 px-4 bg-white bg-opacity-0 transition-all duration-300">
                              <div>
                                 <div className="font-medium text-lg text-darker-blue text-opacity-0 transition duration-300">
                                    App1
                                 </div>
                                 <div className="text-dark-blue text-opacity-0 transition duration-300">
                                    App
                                 </div>
                              </div>
                              <div className="flex justify-center items-center gap-x-2">
                                 <Plus className="text-darker-blue opacity-0 transition-all duration-300 cursor-pointer hover:text-primary icons" />
                                 <Link className="text-darker-blue opacity-0 transition-all duration-300 cursor-pointer hover:text-primary icons" />
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-span-6 md:col-span-3 lg:col-span-2 relative [&>div>#detaile]:hover:-translate-y-6 [&>div>#detaile]:hover:bg-opacity-85 [&>div>#detaile>div>div]:hover:text-opacity-100 [&>div>#detaile>div>.icons]:hover:opacity-100">
                        <div className="h-0 pb-[80%]">
                           <Image
                              src={portfolio8}
                              alt="portfolio1"
                              className="object-cover object-center"
                              fill
                           />
                           <div
                              id="detaile"
                              className="h-20 w-[calc(100%-48px)] flex justify-between items-center absolute bottom-0 laft-6 right-6 px-4 bg-white bg-opacity-0 transition-all duration-300">
                              <div>
                                 <div className="font-medium text-lg text-darker-blue text-opacity-0 transition duration-300">
                                    App1
                                 </div>
                                 <div className="text-dark-blue text-opacity-0 transition duration-300">
                                    App
                                 </div>
                              </div>
                              <div className="flex justify-center items-center gap-x-2">
                                 <Plus className="text-darker-blue opacity-0 transition-all duration-300 cursor-pointer hover:text-primary icons" />
                                 <Link className="text-darker-blue opacity-0 transition-all duration-300 cursor-pointer hover:text-primary icons" />
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-span-6 md:col-span-3 lg:col-span-2 relative [&>div>#detaile]:hover:-translate-y-6 [&>div>#detaile]:hover:bg-opacity-85 [&>div>#detaile>div>div]:hover:text-opacity-100 [&>div>#detaile>div>.icons]:hover:opacity-100">
                        <div className="h-0 pb-[80%]">
                           <Image
                              src={portfolio9}
                              alt="portfolio1"
                              className="object-cover object-center"
                              fill
                           />
                           <div
                              id="detaile"
                              className="h-20 w-[calc(100%-48px)] flex justify-between items-center absolute bottom-0 laft-6 right-6 px-4 bg-white bg-opacity-0 transition-all duration-300">
                              <div>
                                 <div className="font-medium text-lg text-darker-blue text-opacity-0 transition duration-300">
                                    App1
                                 </div>
                                 <div className="text-dark-blue text-opacity-0 transition duration-300">
                                    App
                                 </div>
                              </div>
                              <div className="flex justify-center items-center gap-x-2">
                                 <Plus className="text-darker-blue opacity-0 transition-all duration-300 cursor-pointer hover:text-primary icons" />
                                 <Link className="text-darker-blue opacity-0 transition-all duration-300 cursor-pointer hover:text-primary icons" />
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            {/* team */}
            <section className="bg-[#F7F9FD] pb-20">
               <div className="container">
                  <div className="py-10">
                     <span className="text-sm text-[#aaaaaa] tracking-widest relative after:absolute after:-right-32 after:top-1/3 after:w-28 after:mt-0.5 after:h-[1px] after:bg-primary">
                        TEAM
                     </span>
                     <h2 className="font-extrabold text-3xl text-dark-blue leading-[44px] pt-1">
                        CHECK OUR TEAM
                     </h2>
                  </div>
                  <div className="grid grid-cols-12 gap-6">
                     <div className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 relative [&>div>#teamDetaile]:hover:h-full [&>div>#teamDetaile]:hover:opacity-100 [&>div>#teamDetaile>.user]:hover:text-opacity-90 [&>div>#teamIcons]:hover:w-12 [&>div>#teamIcons>.icon]:hover:opacity-100">
                        <div className="h-0 pb-[95%]">
                           <Image
                              src={team1}
                              alt="team1"
                              className="object-cover object-center"
                              fill
                           />
                           <div
                              id="teamDetaile"
                              className="h-0 w-full flex flex-col justify-end items-center absolute bottom-0 px-4
                              bg-gradient-to-t from-[rgba(11,35,65,0.9)] from-0% via-[rgba(11,35,65,0.8)] via-20% to-[rgba(0,212,255,0)] to-100% opacity-0
                              transition-all duration-300">
                              <div className="font-bold text-lg text-white text-opacity-0 transition duration-300 user">
                                 Walter White
                              </div>
                              <div className="text-sm text-white text-opacity-0 italic transition duration-300 user">
                                 Chief Executive Officer
                              </div>
                              <div className="flex justify-center items-center gap-x-2">
                                 <Plus className="text-darker-blue opacity-0 transition-all duration-300 cursor-pointer hover:text-primary icons" />
                                 <Link className="text-darker-blue opacity-0 transition-all duration-300 cursor-pointer hover:text-primary icons" />
                              </div>
                           </div>
                           <div
                              id="teamIcons"
                              className="h-full w-0 flex flex-col justify-start items-center gap-y-4 py-4 absolute left
                              bg-[rgba(11,35,65,0.4)]
                              transition-all duration-300">
                              <Twitter className="text-white opacity-0 transition-all duration-300 hover:text-primary cursor-pointer icon" />
                              <Facebook className="text-white opacity-0 transition-all duration-300 hover:text-primary cursor-pointer icon" />
                              <Linkedin className="text-white opacity-0 transition-all duration-300 hover:text-primary cursor-pointer icon" />
                              <Instagram className="text-white opacity-0 transition-all duration-300 hover:text-primary cursor-pointer icon" />
                           </div>
                        </div>
                     </div>
                     <div className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 relative [&>div>#teamDetaile]:hover:h-full [&>div>#teamDetaile]:hover:opacity-100 [&>div>#teamDetaile>.user]:hover:text-opacity-90 [&>div>#teamIcons]:hover:w-12 [&>div>#teamIcons>.icon]:hover:opacity-100">
                        <div className="h-0 pb-[95%]">
                           <Image
                              src={team2}
                              alt="team2"
                              className="object-cover object-center"
                              fill
                           />
                           <div
                              id="teamDetaile"
                              className="h-0 w-full flex flex-col justify-end items-center absolute bottom-0 px-4
                              bg-gradient-to-t from-[rgba(11,35,65,0.9)] from-0% via-[rgba(11,35,65,0.8)] via-20% to-[rgba(0,212,255,0)] to-100% opacity-0
                              transition-all duration-300">
                              <div className="font-bold text-lg text-white text-opacity-0 transition duration-300 user">
                                 Walter White
                              </div>
                              <div className="text-sm text-white text-opacity-0 italic transition duration-300 user">
                                 Chief Executive Officer
                              </div>
                              <div className="flex justify-center items-center gap-x-2">
                                 <Plus className="text-darker-blue opacity-0 transition-all duration-300 cursor-pointer hover:text-primary icons" />
                                 <Link className="text-darker-blue opacity-0 transition-all duration-300 cursor-pointer hover:text-primary icons" />
                              </div>
                           </div>
                           <div
                              id="teamIcons"
                              className="h-full w-0 flex flex-col justify-start items-center gap-y-4 py-4 absolute left
                              bg-[rgba(11,35,65,0.4)]
                              transition-all duration-300">
                              <Twitter className="text-white opacity-0 transition-all duration-300 hover:text-primary cursor-pointer icon" />
                              <Facebook className="text-white opacity-0 transition-all duration-300 hover:text-primary cursor-pointer icon" />
                              <Linkedin className="text-white opacity-0 transition-all duration-300 hover:text-primary cursor-pointer icon" />
                              <Instagram className="text-white opacity-0 transition-all duration-300 hover:text-primary cursor-pointer icon" />
                           </div>
                        </div>
                     </div>
                     <div className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 relative [&>div>#teamDetaile]:hover:h-full [&>div>#teamDetaile]:hover:opacity-100 [&>div>#teamDetaile>.user]:hover:text-opacity-90 [&>div>#teamIcons]:hover:w-12 [&>div>#teamIcons>.icon]:hover:opacity-100">
                        <div className="h-0 pb-[95%]">
                           <Image
                              src={team3}
                              alt="team3"
                              className="object-cover object-center"
                              fill
                           />
                           <div
                              id="teamDetaile"
                              className="h-0 w-full flex flex-col justify-end items-center absolute bottom-0 px-4
                              bg-gradient-to-t from-[rgba(11,35,65,0.9)] from-0% via-[rgba(11,35,65,0.8)] via-20% to-[rgba(0,212,255,0)] to-100% opacity-0
                              transition-all duration-300">
                              <div className="font-bold text-lg text-white text-opacity-0 transition duration-300 user">
                                 Walter White
                              </div>
                              <div className="text-sm text-white text-opacity-0 italic transition duration-300 user">
                                 Chief Executive Officer
                              </div>
                              <div className="flex justify-center items-center gap-x-2">
                                 <Plus className="text-darker-blue opacity-0 transition-all duration-300 cursor-pointer hover:text-primary icons" />
                                 <Link className="text-darker-blue opacity-0 transition-all duration-300 cursor-pointer hover:text-primary icons" />
                              </div>
                           </div>
                           <div
                              id="teamIcons"
                              className="h-full w-0 flex flex-col justify-start items-center gap-y-4 py-4 absolute left
                              bg-[rgba(11,35,65,0.4)]
                              transition-all duration-300">
                              <Twitter className="text-white opacity-0 transition-all duration-300 hover:text-primary cursor-pointer icon" />
                              <Facebook className="text-white opacity-0 transition-all duration-300 hover:text-primary cursor-pointer icon" />
                              <Linkedin className="text-white opacity-0 transition-all duration-300 hover:text-primary cursor-pointer icon" />
                              <Instagram className="text-white opacity-0 transition-all duration-300 hover:text-primary cursor-pointer icon" />
                           </div>
                        </div>
                     </div>
                     <div className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 relative [&>div>#teamDetaile]:hover:h-full [&>div>#teamDetaile]:hover:opacity-100 [&>div>#teamDetaile>.user]:hover:text-opacity-90 [&>div>#teamIcons]:hover:w-12 [&>div>#teamIcons>.icon]:hover:opacity-100">
                        <div className="h-0 pb-[95%]">
                           <Image
                              src={team4}
                              alt="team4"
                              className="object-cover object-center"
                              fill
                           />
                           <div
                              id="teamDetaile"
                              className="h-0 w-full flex flex-col justify-end items-center absolute bottom-0 px-4
                              bg-gradient-to-t from-[rgba(11,35,65,0.9)] from-0% via-[rgba(11,35,65,0.8)] via-20% to-[rgba(0,212,255,0)] to-100% opacity-0
                              transition-all duration-300">
                              <div className="font-bold text-lg text-white text-opacity-0 transition duration-300 user">
                                 Walter White
                              </div>
                              <div className="text-sm text-white text-opacity-0 italic transition duration-300 user">
                                 Chief Executive Officer
                              </div>
                              <div className="flex justify-center items-center gap-x-2">
                                 <Plus className="text-darker-blue opacity-0 transition-all duration-300 cursor-pointer hover:text-primary icons" />
                                 <Link className="text-darker-blue opacity-0 transition-all duration-300 cursor-pointer hover:text-primary icons" />
                              </div>
                           </div>
                           <div
                              id="teamIcons"
                              className="h-full w-0 flex flex-col justify-start items-center gap-y-4 py-4 absolute left
                              bg-[rgba(11,35,65,0.4)]
                              transition-all duration-300">
                              <Twitter className="text-white opacity-0 transition-all duration-300 hover:text-primary cursor-pointer icon" />
                              <Facebook className="text-white opacity-0 transition-all duration-300 hover:text-primary cursor-pointer icon" />
                              <Linkedin className="text-white opacity-0 transition-all duration-300 hover:text-primary cursor-pointer icon" />
                              <Instagram className="text-white opacity-0 transition-all duration-300 hover:text-primary cursor-pointer icon" />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </main>
         <footer></footer>
      </section>
   );
};

export default page;
