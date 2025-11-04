import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollToTop from "../../ScrollTop";
import { useFetch } from "../../lib/usefetch";
import { API_PATH } from "../../lib/api";

export interface INotice {
  id?: number;
  titulo: string;
  corta: string;
  descripcion: string;
  rutas?: string[];
  created_at: string;
}

const Notices = () => {
  const { data, hasMore, fetchNextPage, loading, reset } = useFetch<INotice>(
    "/notices/all/type/procompite",
    9
  );
  const loaderRef = useRef<HTMLDivElement | null>(null);

  const [selected, setSelected] = useState<INotice | null>(null);
  const [zoomImage, setZoomImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const renderMedia = (src?: string, onClick?: () => void) => {
    if (!src) return null;
    const isVideo = src.toLowerCase().endsWith(".mp4");
    return isVideo ? (
      <video
        src={`${API_PATH}${src}`}
        controls
        autoPlay
        muted
        loop
        className="w-full h-full object-cover"
      />
    ) : (
      <img
        src={`${API_PATH}${src}`}
        alt="media"
        className="w-full h-full object-cover cursor-pointer"
        onClick={onClick}
      />
    );
  };

  useEffect(() => {
    if (!selected || !selected.rutas || isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % (selected.rutas?.length ?? 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [selected, isHovered]);

  const nextImage = () =>
    setCurrentIndex((prev) =>
      selected?.rutas ? (prev + 1) % selected.rutas.length : 0
    );

  const prevImage = () =>
    setCurrentIndex((prev) =>
      selected?.rutas
        ? (prev - 1 + selected.rutas.length) % selected.rutas.length
        : 0
    );

  useEffect(() => {
    reset();
    fetchNextPage();
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

  useEffect(() => {
    if (data.length > 0 && !selected) {
      setSelected(data[0]);
    }
    window.scrollTo(0, 0);
  }, [data, selected]);

  return (
    <section className="min-h-screen bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-900 text-white py-10 px-6 relative">
      <Link
        to="/"
        className="absolute z-20 hover:bg-gray-500/40 top-6 left-6 bg-white/80 dark:bg-neutral-800/70 backdrop-blur-md text-gray-700 dark:text-gray-100 px-4 py-2 rounded-full text-sm font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 border border-gray-200/40"
      >
        ← Volver al inicio
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12 mt-10"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-yellow-400 to-orange-300 bg-clip-text text-transparent">
          Noticias PROCOMPITE
        </h2>
        <p className="text-gray-300 mt-3 text-lg max-w-2xl mx-auto">
          Entérate de las últimas novedades, concursos y oportunidades que
          ofrece Procompite.
        </p>
      </motion.div>

      {loading && (
        <p className="text-gray-400 text-lg text-center mt-20 animate-pulse">
          Cargando noticias...
        </p>
      )}
      {!loading && data.length === 0 && (
        <div className="text-center text-gray-400 mt-20">
          <p>No hay noticias disponibles en este momento.</p>
          <span className="text-sm text-gray-500">
            Vuelve más tarde para ver las actualizaciones.
          </span>
        </div>
      )}

      {selected && (
        <div className="max-w-[1425px] mx-auto mb-16">
          <motion.div
            key={selected.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl overflow-hidden bg-neutral-800 border border-neutral-700 shadow-lg"
          >
            <div
              className="relative w-full h-[300px] md:h-[600px] overflow-hidden"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={selected.rutas?.[currentIndex]}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8 }}
                  className="w-full h-full"
                >
                  {renderMedia(selected.rutas?.[currentIndex], () =>
                    setZoomImage(selected.rutas?.[currentIndex] || null)
                  )}
                </motion.div>
              </AnimatePresence>

              {/* 🔹 Flechas */}
              {selected.rutas && selected.rutas.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-2 rounded-full transition"
                  >
                    <ChevronLeft className="w-5 h-5 text-white" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-2 rounded-full transition"
                  >
                    <ChevronRight className="w-5 h-5 text-white" />
                  </button>

                  {/* ⚪ Dots */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {selected.rutas.map((_, i) => (
                      <motion.div
                        key={i}
                        onClick={() => setCurrentIndex(i)}
                        className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                          i === currentIndex
                            ? "bg-yellow-400 scale-110"
                            : "bg-white/50 hover:bg-white/80"
                        }`}
                        whileHover={{ scale: 1.2 }}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="p-6">
              <span className="text-sm text-yellow-400 font-semibold uppercase ">
                {selected.titulo}
              </span>
              <h3 className="text-3xl font-bold text-white mt-2 mb-4 whitespace-pre-line">
                {selected.corta}
              </h3>
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                {selected.descripcion}
              </p>
              <p className="text-gray-400 text-xs mt-4">
                Publicado el{" "}
                {new Date(selected.created_at).toLocaleDateString("es-ES")}
              </p>
            </div>
          </motion.div>
        </div>
      )}

      {/* 🧩 Lista de noticias */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1425px] mx-auto">
        {data.map((news, idx) => (
          <motion.div
            key={news.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className={`relative rounded-2xl overflow-hidden border shadow-md transition-all duration-300 cursor-pointer ${
              selected?.id === news.id
                ? "border-yellow-400 bg-neutral-800 shadow-yellow-400/20"
                : "border-neutral-700 bg-neutral-900 hover:bg-neutral-800"
            }`}
            onClick={() => {
              setSelected(news);
              setCurrentIndex(0);
            }}
          >
            {news.rutas && news.rutas.length > 0 && (
              <div className="h-66 w-full overflow-hidden">
                {renderMedia(news.rutas[0])}
              </div>
            )}
            <div className="p-5">
              <span className="text-sm text-yellow-400 font-semibold uppercase line-clamp-2">
                {news.titulo}
              </span>
              <h4 className="text-lg font-bold text-white mt-2 line-clamp-2">
                {news.corta}
              </h4>
              <p className="text-gray-400 text-sm mt-2 line-clamp-3">
                {news.descripcion}
              </p>
              <p className="text-gray-400 text-xs mt-4">
                Publicado el{" "}
                {new Date(news.created_at).toLocaleDateString("es-ES")}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 🖼️ Modal */}
      <AnimatePresence>
        {zoomImage && (
          <motion.div
            onClick={() => setZoomImage(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setZoomImage(null)}
                className="absolute -top-10 right-0 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {renderMedia(zoomImage)}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div ref={loaderRef} className="h-8" />
      <ScrollToTop />
    </section>
  );
};

export default Notices;
