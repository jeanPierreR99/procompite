const Bases = () => (
    <div className="space-y-4 text-sm">
        <p>
            Las bases del concurso establecen las reglas, criterios de evaluación, elegibilidad, y
            lineamientos técnicos para la postulación.
        </p>

        <ul className="list-disc ml-6 space-y-2">
            <li>
                <strong>Objetivo:</strong> Impulsar la competitividad productiva de los AEOs mediante
                cofinanciamiento de planes de negocio.
            </li>
            <li>
                <strong>Elegibilidad:</strong> Personas jurídicas y naturales organizadas formalmente, con
                RUC activo.
            </li>
            <li>
                <strong>Criterios:</strong> Impacto económico, innovación, sostenibilidad, y capacidad de
                gestión.
            </li>
            <li>
                <strong>Documentación:</strong> Estatuto, actas, DNI, RUC, plan de negocio y ficha técnica
                del proyecto.
            </li>
        </ul>

        <p>
            Consulta el documento oficial completo de bases y requisitos en la página web del concurso o
            acude a la oficina de desarrollo económico de tu municipalidad.
        </p>

        <div>
            <a
                href="/doc/bases_procompite.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition-colors"
            >
                📄 Descargar Bases del Concurso
            </a>
        </div>
    </div>
);

export default Bases;
