import React from "react";
import Link from "next/link";
import { FaceBookSvg, LinkedInSvg } from "../Common/Icon/svg";
// import {TwitterSvg} from "../Common/Icon/svg";
import { InstagramSvg } from "../Common/Icon/svg";
import {GithubSvg} from "../Common/Icon/svg";

const socialMediaLinks = [
  {
    href: "https://www.facebook.com/profile.php?id=100067129211357",
    icon: <FaceBookSvg />,
  },
  {
    href: "https://www.linkedin.com/in/ali-nazery-8b6642205/",
    icon: <LinkedInSvg />,
  },
  // { href: "#", icon: <TwitterSvg /> },
  { href: "https://www.instagram.com/alinazery.dev/", icon: <InstagramSvg /> },
  { href: "https://github.com/AliNazery", icon: <GithubSvg /> },
];

const HeroSocialMedia = () => (
  <div className="hero__social-media">
    <ul className="social-media mb-0 mt-28 pl-0">
      {socialMediaLinks.map((link, index) => (
        <li key={index} className="social-media__item inline-block pr-3">
          <Link
            className="social-media__link dark:text-text1 text-text1 pr-3 bg-transparent outline-none"
            href={link.href}
          >
            {link.icon}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default HeroSocialMedia;
