export default function About() {
    return (
        <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
            <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">À propos de moi</h2>
                <p className="text-zinc-400 text-sm">Mon parcours académique et mes ambitions professionnelles.</p>
            </div>
            
            <div className="bg-glassDark border border-borderGlass backdrop-blur-xl rounded-3xl p-8 shadow-xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4 text-zinc-300 text-sm md:text-base font-light leading-relaxed">
                    <p>
                        Actuellement en dernière année de Master 2 en informatique, mon parcours m'a permis de concrétiser des projets à fort impact en transformant des problématiques complexes en solutions numériques intuitives.
                    </p>
                    <p>
                        Grâce à une maîtrise complète de l'architecture <span className="text-white font-medium">Full-Stack (Next.js, FastAPI, bases de données)</span> et de l'<span className="text-white font-medium">intégration d'intelligences artificielles</span> (modèles RAG, machine learning), je conçois des applications robustes et orientées utilisateur. Mon objectif : faire de chaque défi technique une solution digitale performante.
                    </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-md">
                        <span className="block text-2xl font-display font-bold text-white mb-1">Master 2</span>
                        <span className="text-xs text-zinc-400">Informatique & Ingénierie logicielle</span>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-md">
                        <span className="block text-2xl font-display font-bold text-purple-400 mb-1">Full-Stack</span>
                        <span className="text-xs text-zinc-400">& Intégration IA</span>
                    </div>
                </div>
            </div>
        </section>
    )
}