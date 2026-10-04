export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-28 pb-16 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center w-full">
        
        <div className="md:col-span-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-purple-400 text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
            Recherche Stage de Fin d'Études (Master 2)
          </div>
          
          <h1 className="text-2xl md:text-5xl font-display font-bold text-white tracking-tight leading-tight">
            Développeuse fullstack & Conceptrice spécialisé en<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">  Machine Learning et Web sémantique</span>.
          </h1>
          
          <p className="text-zinc-400 text-base md:text-lg max-w-xl leading-relaxed font-light">
            Étudiante en Master 2 Informatique à l'Institut Supérieur Polytechnique de Madagascar.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-2">
            <a href="#projects" className="px-6 py-3.5 bg-white text-black font-semibold text-sm rounded-xl hover:bg-zinc-200 transition-all shadow-lg">
              Découvrir mes projets
            </a>
            <a href="#contact" className="px-6 py-3.5 bg-white/5 border border-white/10 text-white font-semibold text-sm rounded-xl hover:bg-white/10 transition-all">
              Me contacter
            </a>
          </div>
        </div>

        <div className="md:col-span-4 flex justify-center">
          <div className="w-77 h-88 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 border border-white/10 backdrop-blur-2xl p-6 flex flex-col justify-between shadow-2xl relative group hover:border-purple-500/40 transition-all">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            
            <div className="relative z-10 space-y-4">
             
              <div className="w-16 h-16 rounded-2xl bg-purple-600/30 border border-purple-500/30 flex items-center justify-center text-purple-300 font-display font-bold text-xl overflow-hidden">
                M2
              </div>
              
              <div>
                <h3 className="text-white font-display font-bold text-lg">RAHERIMANANA Andriniaina Koloina Mandresy</h3>
                <p className="text-xs text-purple-400 font-medium">ISPM — Master 2 Informatique</p>
              </div>

              <div className="space-y-1.5 pt-2 border-t border-white/10">
                <span className="inline-block text-[11px] px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20 mr-1.5 mb-1">
                  Dev Web & IA
                </span>
                <span className="inline-block text-[11px] px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-300 border border-blue-500/20 mr-1.5 mb-1">
                  Machine Learning
                </span>
                <span className="inline-block text-[11px] px-2.5 py-1 rounded-md bg-pink-500/10 text-pink-300 border border-pink-500/20">
                  Web Sémantique / Ontologie
                </span>
              </div>
            </div>

            <div className="relative z-10 pt-4 border-t border-white/10 flex justify-between text-xs text-zinc-400">
              <span>Statut</span>
              <span className="text-purple-400 font-medium">Stage M2</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}