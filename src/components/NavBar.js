import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linksElements = links.map(link => {
    const href = "#"+link;
    return <a key={link} href={href}>{link}</a>;
  });
  return <nav>{linksElements}</nav>;
}

export default NavBar;
