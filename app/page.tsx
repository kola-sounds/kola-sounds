export default function Home() {
         return (
             <main className="min-h-screen bg-black text-white">
                   {/* Navigation */}
                         <nav className="flex items-center justify-between border-b border-yellow-500/20 px-6 py-5">
                                 <h1 className="text-2xl font-bold text-yellow-400">
                                           Kola Sounds
                                                   </h1>

                                                           <div className="hidden gap-8 md:flex">
                                                                     <a href="#" className="hover:text-yellow-400">Home</a>
                                                                               <a href="#" className="hover:text-yellow-400">Music</a>
                                                                                         <a href="#" className="hover:text-yellow-400">Events</a>
                                                                                                   <a href="#" className="hover:text-yellow-400">Gallery</a>
                                                                                                             <a href="#" className="hover:text-yellow-400">Contact</a>
                                                                                                                     </div>
                                                                                                                           </nav>

                                                                                                                                 {/* Hero */}
                                                                                                                                       <section className="flex min-h-[85vh] flex-col items-center justify-center px-6 text-center">
                                                                                                                                               <p className="mb-4 uppercase tracking-[0.3em] text-yellow-400">
                                                                                                                                                         Official Website
                                                                                                                                                                 </p>

                                                                                                                                                                         <h2 className="max-w-4xl text-5xl font-extrabold leading-tight md:text-7xl">
                                                                                                                                                                                   Worship Through Music.
                                                                                                                                                                                           </h2>

                                                                                                                                                                                                   <h3 className="mt-2 text-5xl font-extrabold text-yellow-400 md:text-7xl">
                                                                                                                                                                                                             Inspire Every Heart.
                                                                                                                                                                                                                     </h3>

                                                                                                                                                                                                                             <p className="mt-8 max-w-3xl text-lg text-gray-300">
                                                                                                                                                                                                                                       Kola Sounds is a worship ministry dedicated to creating powerful,
                                                                                                                                                                                                                                                 spirit-filled music that inspires lives, strengthens faith,
                                                                                                                                                                                                                                                           and brings people together through authentic worship.
                                                                                                                                                                                                                                                                   </p>

                                                                                                                                                                                                                                                                           <div className="mt-10 flex flex-wrap justify-center gap-4">
                                                                                                                                                                                                                                                                                     <button className="rounded-xl bg-yellow-500 px-8 py-4 font-semibold text-black transition hover:bg-yellow-400">
                                                                                                                                                                                                                                                                                                 Listen Now
                                                                                                                                                                                                                                                                                                           </button>

                                                                                                                                                                                                                                                                                                                     <button className="rounded-xl border border-yellow-500 px-8 py-4 font-semibold text-yellow-400 transition hover:bg-yellow-500 hover:text-black">
                                                                                                                                                                                                                                                                                                                                 Book Kola Sounds
                                                                                                                                                                                                                                                                                                                                           </button>
                                                                                                                                                                                                                                                                                                                                                   </div>
                                                                                                                                                                                                                                                                                                                                                         </section>
                                                                                                                                                                                                                                                                                                                                                             </main>
                                                                                                                                                                                                                                                                                                                                                               );
                                                                                                                                                                                                                                                                                                                                                               }
}