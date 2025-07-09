const Section1 = () => {
    return (
        <section id="inicio" className="section_1 relative grid grid-cols-1 md:grid-cols-2">

            {/* Columna izquierda */}
            <div className="left p-4 relative bg-green-700 z-10">
                <img src="./Recurso 47.png" className='absolute w-full h-full' alt="" />

                {/* Fondo decorativo */}

                {/* Imágenes superiores */}
                <div className="flex gap-4 w-full z-10 relative justify-center">
                    <img
                        className="h-24 sm:h-32 w-full sm:w-1/1 object-contain mb-4"
                        src="Recurso 73.png"
                        alt=""
                    />
                </div>

                {/* Contenido */}
                <div className="grid grid-cols-1 sm:grid-cols-3 items-start gap-4 z-10 relative">
                    <img className="w-full object-contain max-h-90 md:h-auto" src="Recurso 44.png" alt="" />
                    <div className="sm:col-span-2 flex flex-col gap-4">
                        <div>
                            <h4 className="text-yellow-500 font-bold text-xl mb-2">Montos de confinamiento</h4>
                            <p className="ml-4 text-white text-sm">
                                <strong className="text-yellow-500">Categoria A:</strong> Mínimo de 10 miembros, en las cadenas productivas los cuales pueden acceder a un cofinanciamiento no menor a S/ 80,000.00 y no mayor a S/ 160,000.00 por plan de negocio.
                            </p>
                        </div>
                        <div>
                            <p className="ml-4 text-white text-sm">
                                <strong className="text-yellow-500">Categoria B:</strong> Mínimo de 2 miembros, en las cadenas productivas los cuales pueden acceder a un cofinanciamiento no menor a S/ 80,000.00 y no mayor a S/ 350,000.00 por plan de negocio.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-yellow-500 font-bold text-xl mb-2">Participan</h4>
                            <p className="ml-4 text-white text-sm">
                                Todas las personas naturales organizadas y las personas jurídicas que se encuentran formalmente constituidas bajo cualquier modalidad de organización o gestión empresarial contemplada en la legislación vigente y, que tenga entre sus fines desarrollar actividad productiva o empresarial.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Columna derecha */}
            <div className="right bg-green-700">
                <img className="w-full h-full object-cover" src="./Recurso 43.png" alt="" />
            </div>
        </section>
    );
};

export default Section1;
