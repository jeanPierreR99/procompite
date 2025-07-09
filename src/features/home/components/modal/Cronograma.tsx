const Cronograma = () => (
    <div className="space-y-6 text-sm ">
        <p>
            Tabla N° 7: Cronograma del Concurso PROCOMPITE TAMBOPATA 2025. Cada etapa está detallada con fechas clave y el lugar donde se realizará cada actividad.
        </p>
        <div>
            <a
                href="/doc/cronograma_procompite.docx"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition-colors"
            >
                📄 Descargar Cronograma
            </a>
        </div>
        <div className="overflow-x-auto border text-white border-yellow-500 rounded-md">
            <table className="min-w-full text-left table-auto bg-gray-900">
                <thead className="bg-yellow-500 text-black text-xs uppercase">
                    <tr>
                        <th className="px-10 py-4 border-r border-yellow-300">Proceso</th>
                        <th className="px-10 py-4 border-r border-yellow-300">Inicio</th>
                        <th className="px-10 py-4 border-r border-yellow-300">Fin</th>
                        <th className="px-10 py-4">Lugar y Horario</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan={5} className="text-center py-4 font-bold text-black bg-yellow-500/90">ETAPA 1: CONVOCATORIA</td>
                    </tr>
                    <tr className="border-t border-yellow-500">
                        <td className="px-4 py-2">Convocatoria</td>
                        <td>06/07/2025</td>
                        <td></td>
                        <td>
                        </td>
                    </tr>
                    <tr className="border-t border-yellow-500">
                        <td className="px-4 py-2">Registro de participantes</td>
                        <td>12/07/2025</td>
                        <td>30/07/2025</td>
                        <td>
                            PRODUCEVIRTUAL:<br />
                            <a href="https://sistemas.produce.gob.pe/#/" target="_blank" className="text-blue-400 underline">https://sistemas.produce.gob.pe/#/</a><br />
                            Asegúrese de que toda la documentación esté completa antes del registro. No se podrán hacer cambios posteriores.
                        </td>
                    </tr>

                    <tr className="border-t border-yellow-500">
                        <td className="px-4 py-2">Consultas sobre las Bases</td>
                        <td>31/07/2025</td>
                        <td>01/08/2025</td>
                        <td>Oficina PROCOMPITE – Av. Dos de Mayo / Av. Ernesto Rivero<br />Horario: 09:00–13:00 y 14:00–16:30</td>
                    </tr>

                    <tr className="border-t border-yellow-500">
                        <td className="px-4 py-2">Respuestas a Consultas</td>
                        <td>02/08/2025</td>
                        <td>02/08/2025</td>
                        <td>Se enviará al correo electrónico de los AEOs participantes
                            Oficina PROCOMPITE Dirección: Av. Dos de Mayo/ Av. Ernesto Rivero (Biblioteca Municipal) - Madre de Dios – Tambopata: de 09:00 a 13:00 Hrs – 14:00Hrs hasta 16:30 Hrs.. </td>
                    </tr>

                    <tr className="border-t border-yellow-500">
                        <td className="px-4 py-2">Documento Bases Aclaradas</td>
                        <td>03/08/2025</td>
                        <td>03/08/2025</td>
                        <td>
                            Aplicativo SIPROCOMPITE<br />
                            <a href="https://www.gob.pe/institucion/munitambopata/" target="_blank" className="text-blue-400 underline">
                                www.gob.pe/institucion/munitambopata
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={5} className="text-center py-4 font-bold text-black bg-yellow-500/90">ETAPA 2: PRESENTACIÓN DEL PLAN DE NEGOCIO Y EVALUACIÓN</td>
                    </tr>
                    <tr className="border-t border-yellow-500">
                        <td className="px-4 py-2">Admisibilidad AEOs
                            (Revisión de documentos del SIPROCOMPITE)</td>
                        <td>04/08/2025</td>
                        <td>07/08/2025</td>
                        <td>Aplicativo SIPROCOMPITE
                            procompite@munitambopata.gob.pe </td>
                    </tr>

                    <tr className="border-t border-yellow-500">
                        <td className="px-4 py-2">Publicación de resultados</td>
                        <td>08/08/2025</td>
                        <td>08/08/2025</td>
                        <td>
                            SIPROCOMPITE y oficina PROCOMPITE<br />
                            Página web: <a href="https://www.gob.pe/institucion/munitambopata/" target="_blank" className="text-blue-400 underline">www.gob.pe/munitambopata</a>
                        </td>
                    </tr>

                    <tr className="border-t border-yellow-500">
                        <td className="px-4 py-2">Presentación del Plan de Negocio y registro en el aplicativo SIPROCOMPITE</td>
                        <td>09/08/2025</td>
                        <td>19/09/2025</td>
                        <td>SIPROCOMPITE (virtual hasta las 11:59pm)
                            Dirección: Av. Dos de Mayo/ Av. Ernesto Rivero (Biblioteca Municipal) - Madre de Dios – Tambopata: de 09:00 a 13:00 Hrs – 14:00Hrs hasta 16:30 Hrs.. </td>
                    </tr>

                    <tr className="border-t border-yellow-500">
                        <td className="px-4 py-2">Elegibilidad Cualitativa y visita in situ</td>
                        <td>20/09/2025</td>
                        <td>25/09/2025</td>
                        <td>Oficina PROCOMPITE
                            Dirección: Av. Dos de Mayo/ Av. Ernesto Rivero (Biblioteca Municipal) - Madre de Dios – Tambopata: de 09:00 a 13:00 Hrs – 14:00Hrs hasta 16:30 Hrs.
                            Jurisdicción del domicilio fiscal del AEOs en la cual se realiza la actividad para la verificación de existencias/ asistencia del AEO según cronograma publicado en la página web <a href="https://www.gob.pe/institucion/munitambopata/" target="_blank" className="text-blue-400 underline">https://www.gob.pe/institucion/munitambopata/</a>
                        </td>
                    </tr>

                    <tr className="border-t border-yellow-500">
                        <td className="px-4 py-2">Publicación de Resultados</td>
                        <td>26/09/2025</td>
                        <td>26/09/2025</td>
                        <td>OFICINA DE PROCOMPITE: Av. Dos de Mayo/ Av. Ernesto Rivero (Biblioteca Municipal) - Madre de Dios – Tambopata: de 09:00 a 13:00 Hrs – 14:00Hrs hasta 16:30 Hrs; SIPROCOMPITE publicado en la página web SIPROCOMPITE. Y <a target="_blank" className="text-blue-400 underline" href="https://www.gob.pe/institucion/munitambopata/">https://www.gob.pe/institucion/munitambopata/</a>
                        </td>
                    </tr>

                    <tr className="border-t border-yellow-500">
                        <td className="px-4 py-2">Elegibilidad Técnica: Evaluación del Plan de Negocio</td>
                        <td>27/09/2025</td>
                        <td>30/09/2025</td>
                        <td>OFICINA DE PROCOMPITE: Av. Dos de Mayo/ Av. Ernesto Rivero (Biblioteca Municipal) - Madre de Dios – Tambopata: de 09:00 a 13:00 Hrs – 14:00Hrs hasta 16:30 Hrs. </td>
                    </tr>

                    <tr className="border-t border-yellow-500">
                        <td className="px-4 py-2">Publicación de resultados</td>
                        <td>01/10/2025</td>
                        <td>01/10/2025</td>
                        <td>SIPROCOMPITE; OFICINA DE PROCOMPITE: Av. Dos de Mayo/ Av. Ernesto Rivero (Biblioteca Municipal) - Madre de Dios – Tambopata: de 09:00 a 13:00 Hrs – 14:00Hrs hasta 16:30 Hrs; SIPROCOMPITE publicado en la página web </td>
                    </tr>

                    <tr className="border-t border-yellow-500">
                        <td className="px-4 py-2">Exposición pública del
                            Plan de Negocio</td>
                        <td>02/10/2025</td>
                        <td>03/10/2025</td>
                        <td>Auditorio de la Municipalidad Provincial de Tambopata Dirección:
                            Av. León Velarde Nº 230 </td>
                    </tr>
                    <td colSpan={5} className="text-center py-4 font-bold text-black bg-yellow-500/90">ETAPA 3: SELECCIÓN Y PUBLICACIÓN</td>
                    <tr className="border-t border-yellow-500">
                        <td className="px-4 py-2">Priorización y selección
                        </td>
                        <td>04/10/2025</td>
                        <td>13/10/2025</td>
                        <td>ETAPA 3: SELECCIÓN Y PUBLICACIÓN</td>
                    </tr>
                    <tr className="border-t border-yellow-500">
                        <td className="px-4 py-2">Publicación de la Resolución que aprueba los planes de negocio ganadores. </td>
                        <td>14/10/2025</td>
                        <td>19/10/2025</td>
                        <td>SIPROCOMPITE publicado en la página web
                            <a target="_blank" className="text-blue-400 underline" href="www.gob.pe/munitambopata">www.gob.pe/munitambopata</a>
                            Av. Dos de Mayo/ Av. Ernesto Rivero (Biblioteca Municipal) - Madre de Dios – Tambopata: de 09:00 a 13:00 Hrs – 14:00Hrs hasta 16:30 Hrs</td>
                    </tr>
                    <td colSpan={5} className="text-center py-4 font-bold text-black bg-yellow-500/90">3.1 ARREGLOS INSTITUCIONALES</td>
                    <tr className="border-t border-yellow-500">
                        <td className="px-4 py-2">Elaboración de acuerdos de cofinanciamiento entre la Entidad y los AEO ganadores
                        </td>
                        <td>01/11/2025</td>
                        <td>06/11/2025</td>
                        <td>OFICINA DE PROCOMPITE: Av. Dos de Mayo/ Av. Ernesto Rivero (Biblioteca Municipal) - Madre de Dios – Tambopata: de 09:00 a 13:00 Hrs – 14:00Hrs hasta 16:30 Hrs </td>
                    </tr>
                    <tr className="border-t border-yellow-500">
                        <td className="px-4 py-2">Suscripción de acuerdos de cofinanciamiento entre la Entidad y los AEO ganadores </td>
                        <td>07/11/2025</td>
                        <td>12/11/2025</td>
                        <td>Auditorio de la Municipalidad Provincial de Tambopata
                            Dirección:
                            Av. León Velarde Nº 230
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
);

export default Cronograma;