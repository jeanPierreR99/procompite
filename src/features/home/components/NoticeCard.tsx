import { useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../../../lib/usefetch";
import { API_PATH } from "../../../lib/api";

export interface INotice {
  id?: number;
  titulo: string;
  corta: string;
  descripcion: string;
  rutas?: string[];
  created_at: string;
}

const NoticeCard = () => {
  const { data, fetchNextPage, loading } = useFetch<INotice>(
    "/notices/all/type/procompite",
    4
  );
  const navigate = useNavigate();

  useEffect(() => {
    fetchNextPage();
  }, []);

  return (
    <section className="py-16 bg-gradient-to-b px-4" id="noticias">
      <div>
        {/* Encabezado */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-orange-400">
            ÚLTIMAS NOTICIAS
          </h2>
          <p className="text-gray-400 text-lg">
            Mantente al día con nuestras últimas actividades y campañas
          </p>
        </div>

        {/* Grid de noticias */}
        {!loading && data.length === 0 && (
          <div className="text-center text-gray-400 mt-20">
            <p>No hay noticias disponibles en este momento.</p>
            <span className="text-sm text-gray-400">
              Vuelve más tarde para ver las actualizaciones.
            </span>
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.map((news, index) => {
            const mediaUrl = news.rutas?.[0];
            const isVideo = mediaUrl?.endsWith(".mp4");

            return (
              <motion.div
                onClick={() => navigate("/notices")}
                key={news.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white cursor-pointer rounded-2xl hover:shadow-xl overflow-hidden transition-all"
              >
                {/* Imagen o video */}
                <div className="relative h-68 w-full overflow-hidden">
                  {isVideo ? (
                    <video
                      src={`${API_PATH}${mediaUrl}`}
                      controls
                      autoPlay
                      muted
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <img
                      src={`${API_PATH}${mediaUrl}`}
                      alt={news.titulo}
                      className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <span className="absolute bottom-2 left-3 flex items-center gap-1 text-xs text-gray-100">
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(news.created_at).toLocaleDateString("es-PE", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </div>

                {/* Contenido */}
                <div className="p-5 px-3 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-orange-400 line-clamp-2 mb-2">
                      {news.titulo}
                    </h3>
                    <p className="text-gray-400 text-sm line-clamp-3">
                      {news.corta}
                    </p>
                  </div>
                  <div className="flex justify-end">
                    <button className="mt-4 flex items-center gap-2 text-orange-400 font-medium text-sm group-hover:underline">
                      Leer más{" "}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>

                {/* Borde decorativo */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange-300/40 rounded-2xl transition-all duration-300 pointer-events-none"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NoticeCard;
