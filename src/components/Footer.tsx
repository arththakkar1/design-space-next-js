import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="text-primary">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M39.5563 34.1455V13.8546C39.5563 15.708 36.8773 17.3437 32.7927 18.3189C30.2914 18.916 27.263 19.2655 24 19.2655C20.737 19.2655 17.7086 18.916 15.2073 18.3189C11.1227 17.3437 8.44365 15.708 8.44365 13.8546V34.1455C8.44365 35.9988 11.1227 37.6346 15.2073 38.6098C17.7086 39.2069 20.737 39.5564 24 39.5564C27.1288 39.5564 30.2914 39.2069 32.7927 38.6098C36.8773 37.6346 39.5563 35.9988 39.5563 34.1455Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <span className="text-xl font-extrabold tracking-tight">
                DesignSpace
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Crafting premium interiors that redefine modern luxury and comfort.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li>
                <Link className="hover:text-primary transition-colors" href="/gallery">
                  Gallery
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="#">
                  Designers
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="/journal">
                  Journal
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="#">
                  Reviews
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-sm">mail</span>
                hello@designspace.com
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-sm">call</span> +1
                (555) 000-1234
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-sm">
                  location_on
                </span>
                123 Interior Ave, NY
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Social</h4>
            <div className="flex gap-4">
              <Link
                className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center hover:bg-primary/20 transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined">share</span>
              </Link>
              <Link
                className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center hover:bg-primary/20 transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined">public</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between gap-4">
          <p className="text-xs text-gray-400">
            © 2024 DesignSpace Interior Collective. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs text-gray-400">
            <Link className="hover:text-primary" href="#">
              Privacy Policy
            </Link>
            <Link className="hover:text-primary" href="#">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
