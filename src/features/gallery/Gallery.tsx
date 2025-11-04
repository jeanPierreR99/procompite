import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import ScrollToTop from "../../ScrollTop";
import { useFetch } from "../../lib/usefetch";
import { API_PATH } from "../../lib/api";

export interface IGallery {
  id: number;
  title: string;
  rutas: string[];
  type: string;
  created_at: string;
}

const Gallery = () => {
  const { data, hasMore, fetchNextPage, loading, reset } = useFetch<IGallery>(
    "/gallery-external/procompite",
    99
  );

  const [open, setOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState<string[]>([]);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  const handleOpen = (imageNames: string[]) => {
    const fullUrls = imageNames.map((name) => `${API_PATH}${name}`);
    setCurrentImages(fullUrls);
    setOpen(true);
  };
  useEffect(() => {
    fetchNextPage(); // carga inicial
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
    setTimeout(() => fetchNextPage(), 0);
  };

  useEffect(() => {
    handleReset();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-900 text-center py-10 relative">
      {/* 🔙 Botón Volver al Home */}
      <Link
        to="/"
        className="absolute z-20 active:bg-gray-500/40 hover:bg-gray-500/40 top-6 left-6 bg-neutral-800/70  backdrop-blur-md text-gray-100  px-4 py-2 rounded-full text-sm font-medium shadow-md hover:shadow-lg active:shadow-lg hover:scale-105 active:scale-105 transition-all duration-200 border border-gray-200/40"
      >
        ← Volver al inicio
      </Link>

      {/* Título */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold mt-10 tracking-tight bg-gradient-to-r from-yellow-400 to-orange-300 bg-clip-text text-transparent"
      >
        Galería PROCOMPITE
      </motion.h2>

      {/* Contenedor de imágenes */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6 mt-10"
      >
        {data.map(({ id, title, rutas }, idx) => {
          const mainImage = rutas[0];
          const allImages = rutas;

          return (
            <motion.div
              key={id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl active:shadow-2xl transition-all duration-300 bg-neutral-800/60 backdrop-blur-sm"
              onClick={() => handleOpen(allImages)}
            >
              <img
                src={`${API_PATH}${mainImage}`}
                alt={title}
                className="w-full h-[250px] object-cover transition-transform duration-500 group-hover:scale-110 group-active:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end items-center p-4 group-active:opacity-100">
                <p className="text-white font-semibold text-lg drop-shadow-md mb-2">
                  {title}
                </p>
                <span className="text-sm text-gray-200 bg-white/10 px-3 py-1 rounded-full border border-white/20 backdrop-blur-sm">
                  Ver galería
                </span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={currentImages.map((src) => ({ src }))}
        styles={{
          container: { backgroundColor: "rgba(0,0,0,0.85)" },
        }}
        plugins={[Thumbnails]}
      />

      <ScrollToTop />
      <div ref={loaderRef} className="h-8" />
    </div>
  );
};

export default Gallery;
