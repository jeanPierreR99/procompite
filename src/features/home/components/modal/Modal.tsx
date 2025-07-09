import React from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 cursor-pointer flex items-center justify-center bg-black/40 backdrop-blur-sm"
            onClick={onClose} // clic en el fondo
        >
            <div
                className="bg-white cursor-default rounded-2xl shadow-xl max-w-4xl w-full p-6"
                onClick={(e) => e.stopPropagation()} // evita que el clic dentro del modal cierre
            >
                <button
                    className="absolute top-3 right-4 text-3xl text-gray-500 hover:text-red-500"
                    onClick={onClose}
                >
                    &times;
                </button>

                {title && <h2 className="text-2xl font-bold mb-4 text-gray-800">{title}</h2>}

                <div className="overflow-x-auto max-h-[50vh]">{children}</div>

                <div className="flex justify-end mt-6">
                    <button
                        onClick={onClose}
                        className="bg-yellow-500 cursor-pointer hover:bg-yellow-400 transition-colors px-5 py-2 rounded-md text-white font-medium"
                    >
                        Cerrar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
