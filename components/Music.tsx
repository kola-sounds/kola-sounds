export default function Music() {
      const songs = [
          {
                title: "Coming Soon",
                      description: "A brand-new worship single from Kola Sounds.",
                          },
                              {
                                    title: "Live Worship Sessions",
                                          description: "Experience powerful moments of live worship.",
                                              },
                                                  {
                                                        title: "Upcoming Album",
                                                              description: "A collection of songs that inspire faith and hope.",
                                                                  },
                                                                    ];

                                                                      return (
                                                                          <section
                                                                                id="music"
                                                                                      className="bg-neutral-950 px-6 py-20 text-white"
                                                                                          >
                                                                                                <div className="mx-auto max-w-6xl">
                                                                                                        <h2 className="text-center text-4xl font-bold text-yellow-400">
                                                                                                                  Latest Music
                                                                                                                          </h2>

                                                                                                                                  <p className="mx-auto mt-4 max-w-3xl text-center text-gray-300">
                                                                                                                                            Discover the latest worship music from Kola Sounds and join us in
                                                                                                                                                      glorifying God through songs that inspire faith and hope.
                                                                                                                                                              </p>

                                                                                                                                                                      <div className="mt-12 grid gap-6 md:grid-cols-3">
                                                                                                                                                                                {songs.map((song) => (
                                                                                                                                                                                            <div
                                                                                                                                                                                                          key={song.title}
                                                                                                                                                                                                                        className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6 transition hover:border-yellow-400"
                                                                                                                                                                                                                                    >
                                                                                                                                                                                                                                                  <h3 className="text-xl font-semibold">{song.title}</h3>
                                                                                                                                                                                                                                                                <p className="mt-3 text-gray-400">{song.description}</p>
                                                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                                                      ))}
                                                                                                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                                                        </section>
                                                                                                                                                                                                                                                                                                          );
                                                                                                                                                                                                                                                                                                          }