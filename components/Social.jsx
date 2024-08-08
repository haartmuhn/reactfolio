import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/haartmuhn" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/haartmuhn/" },
  { icon: <FaYoutube />, path: "https://www.youtube.com/channel/UCxoOWQEZQraY68aPrEvFj4A" },
  { icon: <FaTwitter />, path: "https://x.com/haartmuhn" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
