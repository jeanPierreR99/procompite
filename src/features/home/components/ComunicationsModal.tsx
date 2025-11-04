import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

type CardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  bgColor: string;
  buttonColor: string;
  buttonTextColor: string;
  link: string;
};

const CardLink = ({
  title,
  description,
  icon,
  bgColor,
  buttonColor,
  buttonTextColor,
  link,
}: CardProps) => {
  return (
    <div
      className={`shadow-xl transition-all hover:scale-95 ${bgColor} min-w-[300px] w-[400px] rounded-2xl p-6 text-white`}
    >
      <a rel="noopener noreferrer" target="_blank" href={link}>
        <div>
          <p className="text-4xl font-bold flex gap-2 items-center justify-between">
            {title} {icon}
          </p>
          <p className="font-bold">{description}</p>
          <div className="flex justify-end">
            <button
              className={`mt-2 font-bold px-2 py-1 rounded-md hover:bg-yellow-400 ${buttonColor} ${buttonTextColor}`}
            >
              VER MÁS
            </button>
          </div>
        </div>
      </a>
    </div>
  );
};

// cardsData.ts
import { BookA, Calendar, Handshake } from "lucide-react";
import type { Comunicado } from "../../comunications/Comunications";
import { useFetch } from "../../../lib/usefetch";
import { API_PATH } from "../../../lib/api";

export const cardsData = [
  {
    id: 1,
    title: "Convocatorias Activas",
    description:
      "Conoce las convocatorias vigentes de PROCOMPITE y postula a financiamiento.",
    icon: <Handshake size={50} />,
    bgColor: "bg-blue-900",
    buttonColor: "bg-yellow-500",
    buttonTextColor: "text-blue-800",
    link: "https://sistemas.produce.gob.pe/#/",
  },
  {
    id: 2,
    title: "Bases del Concurso",
    description:
      "Revisa las bases completas del concurso PROCOMPITE para conocer requisitos y condiciones.",
    icon: <BookA size={50} />,
    bgColor: "bg-red-900",
    buttonColor: "bg-yellow-500",
    buttonTextColor: "text-blue-800",
    link: "https://cdn.www.gob.pe/uploads/document/file/8636737/6936852-bases-procompite-2025-actualizado-10-09-2025-segun-documento-carta-n-990-2025-mpt-cdel.pdf?v=1757541958",
  },
  {
    id: 3,
    title: "Cronograma",
    description:
      "Consulta las fechas importantes y etapas del concurso PROCOMPITE.",
    icon: <Calendar size={50} />,
    bgColor: "bg-green-900",
    buttonColor: "bg-yellow-500",
    buttonTextColor: "text-blue-800",
    link: "/doc/CARTA N° 002 Ampliacion de plazo de registro.pdf",
  },
];

export default function ComunicationsModal() {
  const [open, setOpen] = useState(true);
  const { data: announcements, fetchNextPage } = useFetch<Comunicado>(
    "/comunications-external/procompite/1",
    9
  );
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const paginationRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    setSwiperReady(true);
    fetchNextPage();
  }, []);

  if (!announcements.length) return null;
  if (open)
    return (
      <div className="h-screen">
        <AnimatePresence>
          {open && swiperReady && (
            <motion.div
              onClick={() => setOpen(false)} // cerrar si hace click en el fondo
              className="fixed inset-0 bg-black/40 flex items-center justify-center z-[999]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                onClick={(e) => e.stopPropagation()}
                className="bg-white overflow-y-scroll rounded-2xl shadow-xl max-h-[80vh] w-[90%] max-w-5xl relative"
                initial={{ scale: 0.8, opacity: 0, y: 100 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 100 }}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
              >
                {/* Botón de cerrar */}
                <button
                  onClick={() => setOpen(false)}
                  className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 z-50"
                >
                  ✕
                </button>
                <div className="flex gap-4 p-6">
                  <div className="xl:flex flex-col gap-4 hidden">
                    {cardsData.map((card, index) => (
                      <CardLink
                        key={index}
                        title={card.title}
                        description={card.description}
                        icon={card.icon}
                        bgColor={card.bgColor}
                        buttonColor={card.buttonColor}
                        buttonTextColor={card.buttonTextColor}
                        link={card.link}
                      />
                    ))}
                  </div>
                  <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    loop={true}
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                    }}
                    pagination={{
                      clickable: true,
                      el: paginationRef.current!,
                    }}
                    navigation={{
                      prevEl: prevRef.current!,
                      nextEl: nextRef.current!,
                    }}
                    onSwiper={(swiper) => {
                      if (
                        swiper.params.navigation &&
                        typeof swiper.params.navigation !== "boolean"
                      ) {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                        swiper.navigation.init();
                        swiper.navigation.update();
                      }

                      if (
                        swiper.params.pagination &&
                        typeof swiper.params.pagination !== "boolean"
                      ) {
                        swiper.params.pagination.el = paginationRef.current;
                        swiper.pagination.init();
                        swiper.pagination.render();
                        swiper.pagination.update();
                      }
                    }}
                  >
                    {announcements.map((item) => (
                      <SwiperSlide key={item.id}>
                        <div className="flex flex-col items-center h-full">
                          <img
                            src={`${API_PATH}${item.ruta}`}
                            alt={item.titulo}
                            className="rounded-xl w-full object-fill  h-full"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                {/* Paginación */}
                <div
                  ref={paginationRef}
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-50"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
}
