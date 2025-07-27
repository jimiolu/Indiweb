import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { buttonSecondary } from "./Button";

export default function Footer() {
  return (
    <footer className="bg-[#131313] text-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-10">
        {/* Branding & CTA */}
        <div>
          <Image
            src="/logo/logo.svg"
            alt="Moniepoint Logo"
            width={100}
            height={100}
            className="mb-6 w-32"
          />
          <p className="text-gray-400 mb-6 max-w-sm">
            Building legendary products for fast-moving teams. Fast, reliable,
            scalable.
          </p>
          <Link
            href="https://indisis.fillout.com/business"
            target="_blank"
            className={buttonSecondary}
          >
            Start a project →
          </Link>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li>
              <Link href="#portfolio" className="hover:text-white">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="#services" className="hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link href="#case-studies" className="hover:text-white">
                Case Studies
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect</h3>
          <ul className="flex gap-5 text-xl text-gray-400">
            <li>
              <a
                href="https://twitter.com/indisis"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <IconBrandTwitter fill="currentColor" />
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/indisis"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <IconBrandLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/indisis"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <IconBrandGithub fill="currentColor" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 mt-12 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Indisis. All rights reserved.
      </div>
    </footer>
  );
}
