import { sidebarNavigation } from "@/configs";
import Link from "next/link";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Input } from "../ui/input";

const Sidebar = () => {
  return (
    <aside className="w-72 min-h-screen bg-gray-100">
      <Link
        href="/"
        className="h-20 grid place-content-center text-center font-bold text-3xl bg-primary text-white"
      >
        Logo
      </Link>
      <h3 className="py-3 text-center text-xl font-bold">Categories</h3>
      <div className="flex flex-col gap-y-3 p-5">
        <Accordion type="single" collapsible>
          {sidebarNavigation.map((navigation, index) => (
            <AccordionItem key={index} value={navigation.label}>
              <AccordionTrigger>{navigation.label}</AccordionTrigger>

              <AccordionContent>
                <div className="flex flex-col gap-2 p-1 pb-4">
                  {navigation.children.map((child, index) => (
                    <Input
                      key={child.name}
                      type="text"
                      name={child.name}
                      placeholder={child.name}
                    />
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </aside>
  );
};

export default Sidebar;
