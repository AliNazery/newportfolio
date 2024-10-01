// components/SocialMediaList.tsx

import React from "react";
import Link from "next/link";
import { FaceBookSvg, InstagramSvg, GithubSvg, LinkedInSvg } from "../Common/Icon/svg";

const socialMediaIcons = [
  {
    id: 1,
    component: FaceBookSvg,
    href: "https://www.facebook.com/profile.php?id=100067129211357",
  },
  {
    id: 2,
    component: LinkedInSvg,
    href: "https://www.linkedin.com/in/ali-nazery-8b6642205/",
  },
  {
    id: 2,
    component: InstagramSvg,
    href: "https://www.instagram.com/alinazery.dev/",
  },
  { id: 2, component: GithubSvg, href: "https://github.com/AliNazery" },
];

const SocialMediaList: React.FC = () => {
  return (
    <div className="contact__info-item-social-media">
      <ul className="social-media flex items-center gap-4 mt-4">
        {socialMediaIcons.map((icon) => (
          <li key={icon.id} className="social-media__item inline-block">
            <Link
              className="social-media__link pr-3 text-[#454545] dark:text-[#eeeded] bg-transparent outline-none transition-all duration-500 ease-in"
              href={icon.href}
            >
              <icon.component />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialMediaList;
