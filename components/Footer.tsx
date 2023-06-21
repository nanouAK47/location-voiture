import Image from "next/image";
import Link from "next/link";

import { footerLinks } from "@constants";

const Footer = () => (
  <footer className="flex flex-col text-black-100  mt-5 border-t border-gray-200">
    <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
      <div className="flex flex-col justify-start items-start gap-6">
        <Image
          src="/logo.svg"
          alt="logo"
          width={118}
          height={18}
          className="object-contain mt-16"
        />
      </div>

      <div className="footer__links">
        {footerLinks.map((item) => (
          <div key={item.title} className="footer__link">
            <h3 className="font-bold text-center">{item.title}</h3>
            <div className="flex flex-col gap-5">
              {item.links.map((link) => (
                <a
                  href="#"
                  key={link.title}
                  className="text-gray-500 text-center"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-200 sm:px-16 px-6 py-10">
      <p>2023 | CarHub. Tous droits réservés &copy;</p>

      <div className="footer__copyrights-link">
        <Link
          href="https://facebook.com"
          className="text-gray-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/facebook.svg"
            width={30}
            height={30}
            alt="facebook"
            className="object-contain"
          />
        </Link>
        <Link href="/" className="text-gray-500">
          Politique de confidentialité
        </Link>
        <Link href="/" className="text-gray-500">
          CGU
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
