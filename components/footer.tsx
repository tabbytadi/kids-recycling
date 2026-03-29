import Link from "next/link";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#4a7c4a] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="text-3xl font-bold" style={{ fontFamily: 'cursive' }}>gEko</span>
              <p className="text-sm text-white/80 mt-2">
                Малки стъпки за голяма планета.
              </p>
            </div>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-[#c8d96f] transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="hover:text-[#c8d96f] transition-colors">
                <Instagram size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Бързи връзки</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link href="/workshops" className="hover:text-[#c8d96f] transition-colors">
                  Работилници
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#c8d96f] transition-colors">
                  Абонаменти
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#c8d96f] transition-colors">
                  За нас
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Ресурси</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link href="#" className="hover:text-[#c8d96f] transition-colors">
                  Блог
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#c8d96f] transition-colors">
                  ЧЗВ
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#c8d96f] transition-colors">
                  Еко съвети
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#c8d96f] transition-colors">
                  DIY проекти
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Контакти</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>gEko@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>+359 888 888 888</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>ж.к. Овча купел 2, ул. „Монтевидео" 21, 1618 София</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/60">
          © 2026 gEko. Всички права запазени.
        </div>
      </div>
    </footer>
  );
}
