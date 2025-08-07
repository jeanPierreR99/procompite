import { useEffect } from "react";

interface PreviewModalProps {
    url: string;
    type: "pdf" | "image";
    onClose: () => void;
}

const PreviewModal = ({ url, type, onClose }: PreviewModalProps) => {
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    return (
        <div
            className="fixed inset-0 bg-black/30 cursor-pointer flex items-center justify-center z-50 px-4"
            onClick={onClose}
        >
            <div
                className="bg-white w-full max-w-2xl 2xl:max-w-4xl h-[80vh] relative rounded-xl overflow-hidden shadow-xl flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Botón de cierre superior */}
                <div className="relative bg-white h-15">
                    <button
                        className="absolute top-3 right-3 text-gray-500 text-4xl font-bold hover:text-red-500"
                        onClick={onClose}
                    >
                        &times;
                    </button>
                </div>
                {/* Contenido dinámico */}
                <div className="flex-1 cursor-default overflow-hidden flex items-center justify-center bg-neutral-100">
                    {type === "pdf" ? (
                        <iframe
                            src={url}
                            title="PDF Viewer"
                            className="w-full h-full"
                        />
                    ) : (
                        <img
                            src={url}
                            alt="Preview"
                            className="h-full w-full object-fill"
                        />
                    )}
                </div>

                {/* Botón inferior */}
                <div className="p-4 border-t cursor-default border-orange-100 text-right bg-white">
                    <button
                        onClick={onClose}
                        className="bg-orange-400 rounded-md  text-white px-4 py-2 shadow hover:bg-orange-500 transition"
                    >
                        Cerrar ventana
                    </button>
                </div>
            </div>
        </div >
    );
};

export default PreviewModal;
