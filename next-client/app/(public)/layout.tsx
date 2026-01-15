import Image from "next/image";
import layoutStyles from "../layout.module.css";
import layoutCss from "../layout.module.css";

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
                                                      <span className={`${layoutStyles.logoTitle}`}>
                                                            trkien.dev
                                                      </span>
                                                </a>
                                          </h1>
                                    </div>
                              </header>

                              <main>
                                    {children}
                              </main>

                              <footer className={layoutCss.footer} >
                                    <span className={layoutCss.footerCopyright}>© 2026 — trKien.Blog. All Rights Reserved.</span>
                              </footer>
                        </div>
                  </section>
            </>
      );
}
