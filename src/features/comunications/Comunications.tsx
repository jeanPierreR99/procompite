import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { useFetch } from "../../lib/usefetch";
import { API_PATH } from "../../lib/api";

export interface Comunicado {
  id?: number;
  titulo: string;
  ruta: string;
  direccionar?: string;
  estado: number;
  created_at: string;
}

const Comunications = () => {
  const {
    data: announcements,
    hasMore,
    fetchNextPage,
    loading,
    reset,
  } = useFetch<Comunicado>("/comunications-external/procompite", 99);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    fetchNextPage(); // Cargar inicial
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          fetchNextPage();
        }
      },
      { threshold: 1 }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [fetchNextPage, hasMore, loading]);

  const handleReset = () => {
    reset();
    setTimeout(() => {
      fetchNextPage();
    }, 0);
  };

  useEffect(() => {
    handleReset();
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-b    from-neutral-900 via-neutral-950 to-neutral-900 text-center py-10 relative">
      <Link
        to="/"
        className="absolute z-20 hover:bg-gray-500/40 top-6 left-6 bg-neutral-800/70 backdrop-blur-md text-gray-100 px-4 py-2 rounded-full text-sm font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 border border-gray-200/40"
      >
        ← Volver al inicio
      </Link>
      {/* 🔹 Título principal */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12 mt-10"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-yellow-400 to-orange-300 bg-clip-text text-transparent">
          Anuncios PROCOMPITE
        </h2>
        <p className="text-gray-300 mt-3 text-lg max-w-2xl mx-auto">
          Descubre los últimos anuncios y campañas destacadas del programa
          PROCOMPITE.
        </p>
      </motion.div>

      {/* 🧩 Grid de anuncios */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1425px] mx-auto px-4">
        {announcements.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            onClick={() => setSelectedImage(item.ruta)}
            className="relative rounded-2xl overflow-hidden bg-neutral-900 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
          >
            <div className="h-[500px] w-full overflow-hidden">
              <img
                src={`${API_PATH}${item.ruta}`}
                alt={item.titulo}
                className="w-full h-full aspect-square object-fill rounded-md mt-2"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300"></div>

            <div className="absolute bottom-0 left-0 w-full p-4 text-white z-10">
              <h3 className="text-lg font-semibold drop-shadow-sm">
                {item.titulo}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 🖼️ Modal de imagen completa */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full cursor-default"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              {/* Botón cerrar */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-10 right-0 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <img
                src={`${API_PATH}${selectedImage}`}
                alt="Imagen ampliada"
                className="rounded-xl shadow-2xl w-full max-h-[85vh] object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div ref={loaderRef} className="h-8" />
    </section>
  );
};

export default Comunications;
