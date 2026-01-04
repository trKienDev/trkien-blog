import Image from "next/image";
import layoutStyles from "../layout.module.css";
import { metamorphous } from "../font";

export default function PublicLayout({
      children,
}: {
      children: React.ReactNode;
}) {
      return (
            <>
                  <section className="page-section">
                        <div className="page-container">
                              <header>
                                    <div>
                                          <h1 className="header-logo select-none">
                                                <a className="flex items-center gap-1" href="/">
                                                      <Image src="/logo.png" alt="logo" width={50} height={50} />
                                                      <span className={`${layoutStyles.logoTitle} ${metamorphous.className}`}>
                                                            trkien.dev
                                                      </span>
                                                </a>
                                          </h1>
                                    </div>
                              </header>

                              <main>
                                    {children}
                              </main>

                              <footer></footer>
                        </div>
                  </section>
            </>
      );
}
