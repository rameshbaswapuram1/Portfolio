import React from "react";

const navs = [
  { name: "ABOUT" },
  { name: "EXPERIENCE" },
  { name: "SKILLS" },
  { name: "EDUCATION" },
  { name: "BLOGS" },
  { name: "PROJECTS" },
];

const Header = () => {
  return (
    <header className="flex justify-between h-14   items-center">
      <a className="text-[var(--primary-color)]">B RAMESH</a>
      <ul className="hidden gap-3  md:flex">
        {navs.map((nav) => (
          <li className="hover:text-[var(--seconday-color)] font-semibold text-[]">
            <a>{nav.name}</a>
          </li>
        ))}
      </ul>
      <h1 className="block md:hidden">amber</h1>
    </header>
  );
};

export default Header;
