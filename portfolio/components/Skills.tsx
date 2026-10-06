export default function Skills() {
    return (
        <section id="skills" className="py-24 px-6 max-w-5xl mx-auto">
            <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">Compétences Techniques</h2>
                <p className="text-zinc-400 text-sm">Mon écosystème technique et mes outils de prédilection.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                
                <div className="bg-glassDark border border-borderGlass backdrop-blur-xl rounded-3xl p-6 space-y-3 hover:border-purple-500/40 transition-all">
                    <h3 className="font-display font-bold text-white text-sm">Frontend</h3>
                    <p className="text-xs text-zinc-400 font-light leading-relaxed">
                        Next.js, TypeScript, Tailwind CSS, Framer Motion
                    </p>
                </div>

                
                <div className="bg-glassDark border border-borderGlass backdrop-blur-xl rounded-3xl p-6 space-y-3 hover:border-purple-500/40 transition-all">
                    <h3 className="font-display font-bold text-white text-sm">Backend & DB</h3>
                    <p className="text-xs text-zinc-400 font-light leading-relaxed">
                        Python, FastAPI, PostgreSQL, SQL
                    </p>
                </div>

                
                <div className="bg-glassDark border border-borderGlass backdrop-blur-xl rounded-3xl p-6 space-y-3 hover:border-purple-500/40 transition-all">
                    <h3 className="font-display font-bold text-white text-sm">IA & Data</h3>
                    <p className="text-xs text-zinc-400 font-light leading-relaxed">
                        Machine Learning, TensorFlow, scikit-learn, RAG, Ontologie
                    </p>
                </div>

                
                <div className="bg-glassDark border border-borderGlass backdrop-blur-xl rounded-3xl p-6 space-y-3 hover:border-purple-500/40 transition-all">
                    <h3 className="font-display font-bold text-white text-sm">Outils & Systèmes</h3>
                    <p className="text-xs text-zinc-400 font-light leading-relaxed">
                        Git, GitHub
                    </p>
                </div>
            </div>
        </section>
    )
}