import React from "react";
import links from "../shared/links";
import linkedInIcon from "../images/social-icon-linkedin.svg";
import gitHubIcon from "../images/social-icon-github.svg";

function Sidebar() {
  const navLinks = links.filter(link => link.text !== "home");

  return (
    <aside id="sidebar">
      <div id="sidebar-top">
        <h1 id="sidebar-name">Monali Wasekar</h1>
        <h2 id="sidebar-title">Lead Front-End Developer</h2>
        <p id="sidebar-tagline">
          I build enterprise Angular platforms &mdash; from cloud UIs to
          native desktop apps.
        </p>

        <nav id="sidebar-nav">
          <ul>
            {navLinks.map(link => (
              <li key={link.id}>
                <a href={link.url}>{link.text}</a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          id="sidebar-resume-btn"
          href={`${process.env.PUBLIC_URL}/resume.pdf`}
          download="Monali-Wasekar-Resume.pdf"
        >
          Download R&eacute;sum&eacute;
        </a>
      </div>

      <div id="sidebar-social">
        <a
          href="https://www.linkedin.com/in/monali-w-b036b2114"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <img src={linkedInIcon} alt="LinkedIn" />
        </a>
        <a
          href="https://github.com/monali-W/MYPROFILE"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <img src={gitHubIcon} alt="GitHub" />
        </a>
      </div>
    </aside>
  );
}

export default Sidebar;
