export default function Projects() {
    return (
        <section id="projects" className="py-24 px-6 max-w-5xl mx-auto">
            <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">Projets Majeurs</h2>
                    <p className="text-zinc-400 text-sm">Une sélection de mes réalisations techniques et logicielles.</p>
                </div>
                <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-xs font-medium text-purple-400 hover:underline flex items-center gap-1"
                >
                    Voir tous mes repos GitHub &rarr;
                </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Projet 1 : Symphonia */}
                <div className="bg-glassDark border border-borderGlass backdrop-blur-xl rounded-3xl p-6 flex flex-col justify-between hover:border-purple-500/40 transition-all group">
                    <div>
                        <div className="h-40 rounded-2xl bg-gradient-to-br from-purple-950/40 to-blue-950/40 border border-white/10 mb-6 flex items-center justify-center text-zinc-400 font-display text-sm group-hover:scale-[1.02] transition-transform duration-300">
                            [ Aperçu / Interface Symphonia ]
                        </div>
                        <h3 className="text-xl font-display font-bold text-white mb-2">Symphonia</h3>
                        <p className="text-sm text-zinc-400 font-light mb-6">
                            Application web innovante de conversion de partitions de documents en son, dotée d'un piano roll interactif et d'une persistance de données complète.
                        </p>
                    </div>
                    <div>
                        <div className="flex flex-wrap gap-2 mb-6">
                            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-purple-300">Next.js</span>
                            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-blue-300">FastAPI</span>
                            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-300">PostgreSQL</span>
                        </div>
                        <div className="flex gap-4">
                            <a 
                                href="https://github.com" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-xs font-semibold text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl transition-all"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>

                {/* Projet 2 : ORIENT'IA */}
                <div className="bg-glassDark border border-borderGlass backdrop-blur-xl rounded-3xl p-6 flex flex-col justify-between hover:border-purple-500/40 transition-all group">
                    <div>
                        <div className="h-40 rounded-2xl bg-gradient-to-br from-blue-950/40 to-pink-950/40 border border-white/10 mb-6 flex items-center justify-center text-zinc-400 font-display text-sm group-hover:scale-[1.02] transition-transform duration-300">
                            [ Aperçu / Pipeline ORIENT'IA ]
                        </div>
                        <h3 className="text-xl font-display font-bold text-white mb-2">ORIENT'IA</h3>
                        <p className="text-sm text-zinc-400 font-light mb-6">
                            Assistant d'orientation étudiant intelligent combinant un modèle de Machine Learning prédictif et une architecture RAG performante.
                        </p>
                    </div>
                    <div>
                        <div className="flex flex-wrap gap-2 mb-6">
                            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-purple-300">Python</span>
                            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-blue-300">Machine Learning</span>
                            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-300">RAG</span>
                        </div>
                        <div className="flex gap-4">
                            <a 
                                href="https://github.com" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-xs font-semibold text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl transition-all"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}