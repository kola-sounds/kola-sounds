import Image from "next/image";

export default function Navbar() {
  return (
      <header className="border-b border-yellow-500/20 bg-black">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                    <div className="flex items-center gap-3">
                              <Image
                                          src="/logo.png"
                                                      alt="Kola Sounds"
                                                                  width={48}
                                                                              height={48}
                                                                                        />

                                                                                                  <span className="text-2xl font-bold text-yellow-400">
                                                                                                              Kola Sounds
                                                                                                                        </span>
                                                                                                                                </div>

                                                                                                                                        <div className="hidden md:flex gap-8 text-white">
                                                                                                                                                  <a href="#">Home</a>
                                                                                                                                                            <a href="#about">About</a>
                                                                                                                                                                      <a href="#music">Music</a>
                                                                                                                                                                                <a href="#events">Events</a>
                                                                                                                                                                                          <a href="#gallery">Gallery</a>
                                                                                                                                                                                                    <a href="#contact">Contact</a>
                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                  </nav>
                                                                                                                                                                                                                      </header>
                                                                                                                                                                                                                        );
                                                                                                                                                                                                                        }