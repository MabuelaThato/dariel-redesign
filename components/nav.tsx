"use client"
import Link from 'next/link';
import { useState } from 'react';
import * as React from "react" ;
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { LuMenu } from "react-icons/lu";
import { CgClose } from "react-icons/cg";

const components: { title: string; href: string }[] = [
    {
      title: "Software Development",
      href: "/services#software",
    },
    {
      title: "Integration",
      href: "/services#integration",
    },
    {
      title: "Technology Consulting",
      href: "/services#consulting",
    },
    {
      title: "Digital Acceleration",
      href: "/services#digital",
    },
    {
      title: "Cloud",
      href: "/cloud",
    },
  ]

const Navbar = ()=> {
  const [navbar, setNavbar] = useState(false);

  return (
    <div >
      <nav className="sticky shadow py-2">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl lg:items-center lg:flex lg:px-12">
          <div>
            <div className="flex items-center justify-between">
              {/* LOGO */}
              <Link href="/">
                <img src="/logo.jpeg" alt="" className='w-32 h-12'/>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="lg:hidden">
                <button
                  className="p-2 text-slate-400 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <span><CgClose /></span>
                  ) : (
                   <span><LuMenu /></span>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
             className={`flex-1 justify-self-center pb-3 mt-8  lg:block lg:pb-0 lg:mt-2 lg: ${
              navbar ? 'block' : 'hidden'
            }`}
            >
                <NavigationMenu>
                    <NavigationMenuList>
                    <ul className="flex lg:h-auto items-center justify-center flex-col lg:flex-row">
                    <li className="pb-6 text-xl py-2 lg:px-4 text-center lg:pb-3 ">
                        <NavigationMenuItem>
                            <Link href="/" legacyBehavior passHref onClick={() => setNavbar(!navbar)}>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Home
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        </li>
                        <li className="pb-6 text-xl py-2 lg:px-4 text-center lg:pb-3">
                        <NavigationMenuItem>
                        <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            {components.map((component) => (
                                <ListItem
                                key={component.title}
                                title={component.title}
                                href={component.href}
                                onClick={() => setNavbar(!navbar)}
                                >
                                </ListItem>
                            ))}
                            </ul>
                        </NavigationMenuContent>
                        </NavigationMenuItem>
                        </li>
                        <li className="pb-6 py-2 lg:px-4 text-center lg:pb-3">
                        <NavigationMenuItem>
                        <NavigationMenuTrigger>Careers</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <ListItem href="/graduates" title="Graduates" onClick={() => setNavbar(!navbar)}>
                            </ListItem>
                            <ListItem href="/careers" title="Careers" onClick={() => setNavbar(!navbar)}>
                            </ListItem>
                            </ul>
                        </NavigationMenuContent>
                        </NavigationMenuItem>
                        </li>
                        <li className="pb-6 py-2 lg:px-4 text-center lg:pb-3">
                        <NavigationMenuItem>
                        <Link href="/contact" legacyBehavior passHref onClick={() => setNavbar(!navbar)}>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Contact Us
                            </NavigationMenuLink>
                        </Link>
                        </NavigationMenuItem>
                        </li>
                        </ul>
                    </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </div>
            </div>
        </nav>
        </div>
                );
                }

                const ListItem = React.forwardRef<
                React.ElementRef<"a">,
                React.ComponentPropsWithoutRef<"a">
                >(({ className, title, children, ...props }, ref) => {
                return (
                    <li>
                    <NavigationMenuLink asChild>
                        <a
                        ref={ref}
                        className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                            className
                        )}
                        {...props}
                        >
                        <div className="text-sm font-medium leading-none">{title}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {children}
                        </p>
                        </a>
                    </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export default Navbar;