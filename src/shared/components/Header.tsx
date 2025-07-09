import { useState } from "react";
import { Menu, X, BookText, Send } from "lucide-react";

const itemsPath = [
    { name: "Inicio", path: "inicio" },
    { name: "Requisitos", path: "requisitos" },
    { name: "Noticias", path: "noticias" },
    { name: "Contacto", path: "contacto" },
];

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-[70px] flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <img
                        className="h-[50px] w-auto"
                        src="./Recurso 75.png"
                        alt="Logo Municipalidad"
                    />
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6">
                    <ul className="flex gap-4">
                        {itemsPath.map((item, index) => (
                            <li key={index}>
                                <button
                                    onClick={() => {
                                        const element = document.getElementById(item.path);
                                        if (element) {
                                            const yOffset = -60;
                                            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                                            window.scrollTo({ top: y, behavior: "smooth" });
                                        }
                                    }}
                                    className="text-green-600 hover:text-white hover:bg-orange-400 px-2 h-[70px] flex items-center transition-colors font-medium"
                                >
                                    {item.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="flex gap-2">
                        <a
                            href="https://sistemas.produce.gob.pe/#/"
                            target="_blank"
                            className="flex items-center gap-2 bg-orange-400 px-4 py-2 text-white hover:bg-orange-400/80 font-bold shadow-md rounded-md transition hover:scale-110"
                        >
                            <Send size={18} /> Postula aquí
                        </a>
                        <a
                            href="/doc/manual.pdf"
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-green-500 px-4 py-2 text-white hover:bg-green-500/80 font-bold shadow-md rounded-md transition hover:scale-110"
                        >
                            <BookText size={18} /> Manual
                        </a>
                    </div>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-green-600"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Dropdown Menu con animación suave */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? "max-h-[500px] opacity-100 py-4" : "max-h-0 opacity-0 py-0"
                    } bg-white px-6 shadow-md`}
            >
                <ul className="flex flex-col gap-4 transition-opacity duration-300">
                    {itemsPath.map((item, index) => (
                        <li key={index}>
                            <button
                                onClick={() => {
                                    setMenuOpen(false);
                                    const element = document.getElementById(item.path);
                                    if (element) {
                                        const yOffset = -60;
                                        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                                        window.scrollTo({ top: y, behavior: "smooth" });
                                    }
                                }}
                                className="block w-full text-left text-green-600 hover:text-white hover:bg-orange-400 px-3 py-2 rounded-md transition"
                            >
                                {item.name}
                            </button>
                        </li>
                    ))}

                    {/* Botones en móvil */}
                    <li>
                        <a
                            href="https://sistemas.produce.gob.pe/#/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full flex items-center justify-center gap-2 bg-orange-400 px-4 py-2 text-white hover:bg-orange-400/80 font-bold shadow-md rounded-md transition"
                        >
                            <Send size={18} /> Postula aquí
                        </a>
                    </li>
                    <li>
                        <a
                            href="/doc/manual.pdf"
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full flex items-center justify-center gap-2 bg-green-500 px-4 py-2 text-white hover:bg-green-500/80 font-bold shadow-md rounded-md transition"
                        >
                            <BookText size={18} /> Manual
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
