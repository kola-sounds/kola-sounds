import Image from "next/image";

export default function Home() {
      return (
            <main className="min-h-screen bg-black flex flex-col items-center justify-center">
                  <Image
                          src="/logo.png"
                                  alt="Kola Sounds Logo"
                                          width={220}
                                                  height={220}
                                                        />

                                                              <h1 className="mt-8 text-5xl font-bold text-yellow-400">
                                                                      Kola Sounds
                                                                            </h1>
                                                                                </main>
      );
    }
