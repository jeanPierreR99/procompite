import { CheckCircle, AlertCircle } from 'lucide-react';
import CadenasProductivas from './CadenasProductivas';

const requisitos = [
    "Vigencia de poder actualizada",
    "Tener condición de RUC activo y habido",
    "NINGÚN DIRECTIVO DE LA ORGANIZACIÓN se debe encontrar con calificación 'A pérdida' en el sistema financienro a nivel nacional (no ser moroso)",
    "Condición de socios con 'A perdida' (moroso) menor al 20%",
    "Cadena productiva alineada a las cadenas productivas priorizadas",
    "Informe de opinión favorable en caso de que la AEO hubiera sido beneficiada de PROCOMPITE del GR/GL",
];

const Requisitos = () => {
    return (
        <section
            id="requisitos"
            className="relative bg-center bg-cover -mt-20"
            style={{
                backgroundImage:
                    "url('https://inforegion.net.pe/images/2024/08/11/Ganaderos-de-Ucayali-impulsan-su-desarrollo-economico-gracias-al-mejoramiento-genetico00002.webp')",
            }}
        >
            {/* Capa oscura */}
            <div className="absolute inset-0 bg-green-600 opacity-90" />

            {/* Contenido */}
            <div className="relative max-w-6xl mx-auto px-6 py-24 text-white">
                <h2 className="text-3xl font-bold text-white text-center mb-10">
                    Requisitos para postular
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {requisitos.map((req, index) => (
                        <div
                            key={index}
                            className="flex items-start gap-3 bg-green-200/50 p-4 rounded-lg border border-green-500 hover:scale-[1.02] transition-transform"
                        >
                            <CheckCircle className="text-yellow-300 w-6 h-6 mt-1 shrink-0" />
                            <p className="text-sm font-bold">{req}</p>
                        </div>
                    ))}
                </div>

                {/* Nota importante */}
                <div className="mt-12 bg-yellow-50 border-l-5 border-yellow-400 text-yellow-600 p-4 rounded-lg flex items-start gap-3">
                    <AlertCircle className="w-6 h-6 shrink-0 text-yellow-500 mt-1" />
                    <p className="text-sm font-medium">
                        <strong>Importante:</strong> La cadena productiva a presentar debe estar alineada con las cadenas productivas priorizadas por la MUNICIPALIDAD PROVINCIAL DE TAMBOPATA
                    </p>
                </div>
                <CadenasProductivas />
            </div>

        </section>
    );
};

export default Requisitos;
