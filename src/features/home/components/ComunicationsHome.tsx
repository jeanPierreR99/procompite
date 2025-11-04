import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useFetch } from "../../../lib/usefetch";
import { API_PATH } from "../../../lib/api";

const ComunicationsHome = () => {
  const navigate = useNavigate();
  const { data, fetchNextPage, loading } = useFetch<any>(
    "/comunications-external/procompite",
    4
  );

  useEffect(() => {
    fetchNextPage();
  }, []);

  return (
    <div className="text-center relative">
      {/* 🔹 Título principal */}
      <motion.h4
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl pt-10 text-green-600 font-bold max-w-2xl mx-auto"
      >
        COMUNICADOS
      </motion.h4>

      {/* 🔹 Subtítulo */}
      <motion.h5
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mt-2 px-4 md:px-0"
      >
        Este año 2025, el programa PROCOMPITE viene ejecutando concursos,
        capacitaciones y actividades de fortalecimiento para emprendedores y
        pymes.
      </motion.h5>

      {/* 🔹 Galería de imágenes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-2 py-10 relative overflow-hidden 2xl:overflow-visible">
        {/* Decoraciones laterales */}

        {/* 🔸 Si hay datos */}
        {data.length > 0
          ? data.map((item: any, i: number) => (
              <motion.img
                key={item.id || i}
                src={`${API_PATH}${item.ruta}`}
                alt={item.titulo || `evento-${i}`}
                className="w-full h-[400px] object-cover  hover:scale-105 relative transition-transform duration-300 rounded-xl shadow-md"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
              />
            ))
          : !loading && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full text-gray-500 text-lg mt-8"
              >
                No hay eventos disponibles por el momento.
              </motion.p>
            )}
      </div>

      {/* 🔹 Botón */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => navigate("/comunications")}
        className="mt-10 mb-12 font-bold inline-flex items-center gap-2 bg-green-600 text-white px-6 py-2 rounded-md shadow-lg hover:bg-green-700 transition-all"
      >
        Ver todos los anuncios
      </motion.button>
    </div>
  );
};

export default ComunicationsHome;
