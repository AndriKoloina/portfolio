export default function Contact() {
    return (
        <section id="contact" className="py-24 px-6 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-purple-950/30 via-glassDark to-blue-950/30 border border-borderGlass backdrop-blur-2xl rounded-3xl p-10 md:p-16 text-center space-y-8 shadow-2xl">
                <div>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-3">Contact</h2>
                    <p className="text-zinc-400 text-sm md:text-base max-w-md mx-auto font-light">
                        Envie d'échanger sur une opportunité ou un projet ? N'hésitez pas à me contacter directement.
                    </p>
                </div>
                
                <div className="flex flex-wrap justify-center items-center gap-4 pt-2">
                    {/* Bouton E-mail */}
                    <a 
                        href="mailto:raherimananakoloina@gmail.com"
                        className="px-6 py-3.5 bg-white text-black font-semibold text-sm rounded-xl hover:bg-zinc-200 transition-all shadow-lg flex items-center gap-2 group"
                    >
                        <svg className="w-4 h-4 text-zinc-700 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                        raherimananakoloina@gmail.com
                    </a>

                  
                    <a 
                        href="https://www.linkedin.com/in/koloina-raherimanana-2133512b4" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-6 py-3.5 bg-white/5 border border-white/10 text-white font-semibold text-sm rounded-xl hover:bg-white/10 transition-all flex items-center gap-2 group"
                    >
                        <svg className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                        LinkedIn
                    </a>
                </div>
            </div>
        </section>
    )
}