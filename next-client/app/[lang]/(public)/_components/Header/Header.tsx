import Link from "next/link";
import Image from "next/image";
import layoutStyles from "../../../../layout.module.css"
import LanguageSwitcher from "./LanguageSwithcer/LanguageSwitcher";

export default function Header({ lang }: { lang: string }) {
      return (
            <header className="flex items-center justify-between">
                  {/* logo image */}
                  <h1 className="header-logo select-none">
                        <Link href={`/${lang}`} className="flex items-center gap-1">
                              <Image src="/logo.png" alt="logo" width={50} height={50} priority />
                              <span className={layoutStyles.logoTitle}>trkien.dev</span>
                        </Link>
                  </h1>

                  {/* language switcher */}
                  <LanguageSwitcher currentLang={lang} />
            </header>
      )
}