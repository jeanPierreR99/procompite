import { useState } from 'react';

const winners = [
    {
        name: 'WILY FLORES REYES',
        cui: '2650388',
        avatar: './silueta.png',
        description: `“MEJORAMIENTO DEL SISTEMA DE ENVASADO Y ALMACENAMIENTO EN LA PLANTA PROCESADORA DE PULPA DE COPOAZU EN LA ASOCIACIÓN DE AGRICULTORES AGROPECUARIOS DE LA COMUNIDAD EL PROGRESO, DISTRITO DE INAMBARI, PROVINCIA DE TAMBOPATA, REGIÓN MADRE DE DIOS”`,
    },
    {
        name: 'JHONNY LEODAN CURINAMBRE LEYVA',
        cui: '2650384',
        avatar: './silueta.png',
        description: `“MEJORAMIENTO DEL PROCESAMIENTO POST COSECHA PARA LA COMERCIALIZACIÓN DE LOS DERIVADOS DE CACAO DE LA ASOCIACIÓN DE PRODUCTORES DE CACAO SAN FRANCISCO MADRE DE DIOS EN EL DISTRITO DE LAS PIEDRAS, PROVINCIA DE TAMBOPATA, REGIÓN MADRE DE DIOS"`,
    },
    {
        name: 'GILBERTO VERA TORRES ',
        cui: '2650385',
        avatar: './silueta.png',
        description: `“AMPLIACIÓN Y MEJORAMIENTO DE LA INFRAESTRUCTURA DE POSTCOSECHA DE CACAO EN LA PLANTA DE PROCESO PRIMARIO DE LA COOPERATIVA AGRARIA DE SERVICIOS MÚLTIPLES TAMBOPATA CANDAMO, SECTOR VICTOR RA, DISTRITO LABERINTO, PROVINCIA TAMBOPATA, REGIÓN MADRE DE DIOS”`,
    },
    {
        name: 'MILENA ROCIO DEL ÁGUILA CASTILLA',
        cui: '2650386',
        avatar: './silueta.png',
        description: `“MEJORAMIENTO DE LA PLANTA DE PROCESAMIENTO DE PULPA DE AGUAJE DE LA ASOCIACION EMPRESARIAL DE MUJERES DE LA COMUNIDAD NATIVA KOTSIMBA, DISTRITO INAMBARI, PROVINCIA TAMBOPATA Y REGIÓN MADRE DE DIOS''`,
    },
];

const Section5 = () => {
    const [selectedWinner, setSelectedWinner] = useState(winners[0]);

    return (
        <section className="py-16 bg-gradient-to-b from-white via-orange-200 to-white  mt-10">
            <div className="max-w-7xl mx-auto px-4">
                {/* Título */}
                <h2 className="text-4xl text-center text-green-700 font-extrabold mb-12 tracking-tight">
                    Ganadores del PROCOMPITE 2024
                </h2>

                {/* Lista de ganadores */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-10">
                    {winners.map((winner, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedWinner(winner)}
                            className={`cursor-pointer border rounded-2xl p-6 shadow-sm transition-all duration-300 flex flex-col items-center text-center hover:shadow-xl hover:scale-[1.03] ${selectedWinner.name === winner.name
                                ? 'border-yellow-400 bg-yellow-50'
                                : 'bg-white border-green-100'
                                }`}
                        >
                            <img
                                src={winner.avatar}
                                alt={winner.name}
                                className="w-24 h-24 rounded-full object-cover border-4 border-green-700 shadow-md mb-4"
                            />
                            <h5 className="text-lg font-semibold text-green-700">{winner.name}</h5>
                            <p className="text-sm text-gray-600 italic mt-1"><strong>CUI:</strong> {winner.cui}</p>
                        </div>
                    ))}
                </div>

                {/* Tarjeta destacada dinámica */}
                <div className="bg-white border border-yellow-400 rounded-2xl shadow-xl p-6 md:p-10 flex flex-col md:flex-row gap-6 items-center md:items-start">
                    <img
                        src={selectedWinner.avatar}
                        alt={selectedWinner.name}
                        className="w-24 h-24 rounded-full border-4 border-yellow-400 object-cover shadow-md"
                    />
                    <div>
                        <h5 className="text-xl font-semibold text-green-700">{selectedWinner.name}</h5>
                        <p className="italic text-green-600 mb-3"><strong>CUI:</strong> {selectedWinner.cui}</p>
                        <p className="text-gray-700 text-justify">{selectedWinner.description}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section5;
