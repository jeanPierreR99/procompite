
const allies = [
    { name: 'Aliado 1', logo: './Recurso 78.png', path: "https://www.gob.pe/munitambopata" },
    { name: 'Aliado 2', logo: './Recurso 77.png', path: "https://www.gob.pe/munitambopata" },
    { name: 'Aliado 3', logo: './Recurso 76.png', path: "https://www.gob.pe/munitambopata" },
    { name: 'Aliado 5', logo: './Recurso 74.png', path: "https://www.gob.pe/munitambopata" },
];

const Aliance = () => {
    return (
        <section className="py-20 bg-gradient-to-b from-white via-green-50 to-white">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-4xl font-light text-orange-400 mb-2">
                    Aliados <span className="font-bold text-orange-400">Estratégicos</span>
                </h2>
                <p className="text-gray-500 mb-12 max-w-xl mx-auto">
                    Gracias a estas instituciones aliadas, el PROCOMPITE fortalece su impacto en la región.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8 items-center justify-center">
                    {allies.map((ally, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-md p-4 rounded-lg flex items-center justify-center transition-transform duration-300 hover:scale-105"
                        >
                            <a href={ally.path} target="__blank">
                                <img
                                    src={ally.logo}
                                    alt={ally.name}
                                    className="h-20 object-contain"
                                />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Aliance;
