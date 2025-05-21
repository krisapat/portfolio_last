"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const sections = ["Home", "About Me", "Projects", "Skills"];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [barStyle, setBarStyle] = useState({ left: 0, width: 0 });
  const [isOpen, setIsOpen] = useState(false);

  const linkRefs = useRef<{ [key: string]: HTMLAnchorElement | undefined }>({});

  // ✅ ฟังก์ชันใหม่: จัดการตำแหน่ง barStyle ให้ sync กับ link
  const updateBarStyle = (id: string) => {
    if (window.innerWidth >= 768) {
      const linkEl = linkRefs.current[id];
      if (linkEl) {
        const linkRect = linkEl.getBoundingClientRect();
        const containerRect = linkEl.parentElement?.getBoundingClientRect();
        if (containerRect) {
          setBarStyle({
            left: linkRect.left - containerRect.left,
            width: linkRect.width,
          });
        }
      }
    }
  };

  // ✅ ใช้ IntersectionObserver ตั้งค่าทั้ง activeSection และ barStyle พร้อมกัน
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveSection(id);
            updateBarStyle(id); // ✅ update bar พร้อมกับ active
          }
        });
      },
      { threshold: 1 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const handleInitialSection = () => {
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight * 0.5 &&
            rect.bottom >= window.innerHeight * 0.2
          ) {
            setActiveSection(id);
            updateBarStyle(id); // ✅ อัปเดต bar ตอนเริ่มต้น
            break;
          }
        }
      }
    };

    handleInitialSection();
    return () => observer.disconnect();
  }, []);

  // ✅ Scroll listener: สำหรับ fallback บนอุปกรณ์บางอย่าง
  useEffect(() => {
    const handleSectionChange = () => {
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight * 0.5 &&
            rect.bottom >= window.innerHeight * 0.2
          ) {
            if (activeSection !== id) {
              setActiveSection(id);
              updateBarStyle(id); 
            }
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleSectionChange);
    return () => window.removeEventListener("scroll", handleSectionChange);
  }, [activeSection]);


  return (
    <header className="quicksand-quicksand fixed top-4 z-30 w-full flex justify-end md:justify-center">
      {/* Desktop Nav */}
      <div className="hidden md:flex border border-border backdrop-blur-md bg-white/80 dark:bg-black/70 rounded-lg px-3 py-3 transition-colors duration-300">
        <nav className="relative flex text-black dark:text-white">
          {sections.map((sec) => (
            <a
              key={sec}
              href={`#${sec}`}
              ref={(el) => {
                linkRefs.current[sec] = el as HTMLAnchorElement | undefined;
              }}
              className={`${activeSection === sec
                ? "text-black dark:text-white"
                : "text-black/80 dark:text-white/80"
                } text-xl font-bold hover:scale-[1.1] transition-transform duration-300 capitalize relative px-4 z-20`}
            >
              {sec}
            </a>
          ))}
          {/* Underline */}
          <div
            className="border border-black/10 dark:border-white/10 absolute rounded-md bottom-0 h-full bg-black/10 dark:bg-white/10 transition-all duration-200 z-10"
            style={{
              left: barStyle.left,
              width: barStyle.width,
              maxWidth: "calc(100% - 1rem)",
            }}
          />
        </nav>
      </div>

      {/* Mobile Dropdown */}
      <div className="md:hidden">
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Menu Toggle"
              className="w-12 h-12 text-lg relative shadow-lg right-4 border border-black/20 dark:border-white/20 backdrop-blur-md bg-white/80 dark:bg-black/70 rounded-lg transition-colors duration-300"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-black dark:text-white" />
              ) : (
                <Menu className="w-6 h-6 text-black dark:text-white" />
              )}
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            align="end"
            className="w-48 space-y-1 rounded-lg border border-black/20 dark:border-white/20 bg-white text-black dark:bg-black dark:text-white shadow-md backdrop-blur-md transition-colors duration-300"
          >
            {sections.map((sec) => (
              <DropdownMenuItem key={sec} asChild>
                <a
                  href={`#${sec}`}
                  onClick={() => setIsOpen(false)}
                  className={`block w-full text-lg font-semibold px-4 py-2 rounded-lg capitalize transition-all duration-200 ${activeSection === sec
                    ? "bg-black/10 dark:bg-white/10"
                    : ""
                    } hover:bg-black/5 dark:hover:bg-white/5`}
                >
                  {sec}
                </a>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Navbar;
