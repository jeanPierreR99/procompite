import { useEffect } from "react";
import { Megaphone, FileText } from "lucide-react";

interface PreviewModalProps {
  url: string[];
  type: "pdf" | "image";
  onClose: () => void;
}

const PreviewModal = ({ url, onClose }: PreviewModalProps) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-black/40 cursor-pointer flex items-center justify-center z-[9999] px-4"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-md max-h-[70vh]  relative rounded-xl shadow-2xl flex flex-col overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header llamativo */}
        <div className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white text-center py-6 relative">
          <Megaphone className="w-10 h-10 mx-auto mb-2 animate-bounce" />
          <h2 className="text-xl font-bold px-4">
            📢 AVISO IMPORTANTE SOBRE EL CONCURSO PROCOMPITE TAMBOPATA 2025
          </h2>

          {/* Botón cerrar */}
          <button
            className="absolute top-3 right-3 text-white text-3xl font-bold hover:text-red-200"
            onClick={onClose}
          >
            &times;
          </button>
        </div>

        {/* Card */}

        <div className="px-6 py-2">
          <a
            href={url[2]}
            target="_blank"
            rel="noopener noreferrer"
            className="block group border border-gray-200 rounded-lg p-5 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white"
          >
            <div className="flex items-center gap-4">
              <div className="bg-orange-100 p-3 rounded-full group-hover:bg-orange-200 transition">
                <FileText className="text-orange-600 w-8 h-8" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-800">
                  Resolución de Alcaldía N.° 349-2025-MPT-A
                </h3>
                <p className="text-gray-400 text-xs mt-2 text-end">
                  Tambopata, 04 de noviembre de 2025
                </p>
              </div>
            </div>
          </a>
        </div>

        <div className="px-6 py-2">
          <a
            href={url[1]}
            target="_blank"
            rel="noopener noreferrer"
            className="block group border border-gray-200 rounded-lg p-5 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white"
          >
            <div className="flex items-center gap-4">
              <div className="bg-orange-100 p-3 rounded-full group-hover:bg-orange-200 transition">
                <FileText className="text-orange-600 w-8 h-8" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-800">
                  PUBLICACIÓN DE RESULTADOS - ELEGIBILIDAD TÉCNICA
                </h3>
                <p className="text-gray-400 text-xs mt-2 text-end">
                  Tambopata, 20 de octubre de 2025
                </p>
              </div>
            </div>
          </a>
        </div>

        <div className="px-6 py-2">
          <a
            href={url[0]}
            target="_blank"
            rel="noopener noreferrer"
            className="block group border border-gray-200 rounded-lg p-5 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white"
          >
            <div className="flex items-center gap-4">
              <div className="bg-orange-100 p-3 rounded-full group-hover:bg-orange-200 transition">
                <FileText className="text-orange-600 w-8 h-8" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-800">
                  PUBLICACIÓN DE RESULTADOS - ELEGIBILIDAD CUALITATIVA
                </h3>
                <p className="text-gray-400 text-xs mt-2 text-end">
                  Tambopata, 15 de octubre de 2025
                </p>
              </div>
            </div>
          </a>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-300 bg-gray-50 text-right">
          <button
            onClick={onClose}
            className="bg-orange-500 rounded-md text-white px-4 py-2 text-sm shadow hover:bg-orange-600 transition"
          >
            Cerrar ventana
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreviewModal;
