import Navbar from "../components/Navbar";

export default function Home() {
  return (
      <main className="min-h-screen bg-black text-white">
            <Navbar />

                  <section className="flex min-h-[85vh] flex-col items-center justify-center px-6 text-center">
                          <p className="mb-4 uppercase tracking-[0.4em] text-yellow-400">
                                    OFFICIAL WEBSITE
                                            </p>

                                                    <h1 className="text-5xl font-extrabold md:text-7xl">
                                                              Kola Sounds
                                                                      </h1>

                                                                              <p className="mt-6 max-w-2xl text-lg text-gray-300">
                                                                                        A worship ministry committed to creating music that inspires faith,
                                                                                                  unites communities, and glorifies God through excellence in worship.
                                                                                                          </p>

                                                                                                                  <div className="mt-10 flex flex-wrap justify-center gap-4">
                                                                                                                            <button className="rounded-xl bg-yellow-500 px-8 py-4 font-semibold text-black hover:bg-yellow-400">
                                                                                                                                        Listen Now
                                                                                                                                                  </button>

                                                                                                                                                            <button className="rounded-xl border border-yellow-500 px-8 py-4 font-semibold text-yellow-400 hover:bg-yellow-500 hover:text-black">
                                                                                                                                                                        Book Us
                                                                                                                                                                                  </button>
                                                                                                                                                                                          </div>
                                                                                                                                                                                                </section>
                                                                                                                                                                                                    </main>
                                                                                                                                                                                                      );
                                                                                                                                                                                                      }