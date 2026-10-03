import Link from "next/link"
export default function Navbar() {

    return(
        <div>
            <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50 bg-[var(--glass-dark)] backdrop-blur-xl border border-[var(--border-glass)] rounded-2xl shadow-2xl px-6 h-16 flex items-center justify-between">
      <Link href="#" className="font-display font-bold text-white text-lg tracking-wide flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 inline-block"></span>
        Portfolio.
      </Link>

      <nav className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
        <Link href="#about" className="hover:text-white transition-colors">
          À propos
        </Link>
        <Link href="#projects" className="hover:text-white transition-colors">
          Projets
        </Link>
        <Link href="#skills" className="hover:text-white transition-colors">
          Compétences
        </Link>
        <Link href="#contact" className="hover:text-white transition-colors">
          Contact
        </Link>
      </nav>
      <a 
        href="" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium text-xs px-4 py-2.5 rounded-xl hover:opacity-90 transition-all shadow-lg shadow-purple-500/20"
      >
        Télécharger CV
      </a>
    </header>
        </div>
    )
}