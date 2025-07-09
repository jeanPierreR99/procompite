
const items = [
    { img: './Recurso 61.png', label: 'Equipos' },
    { img: './Recurso 60.png', label: 'Servicios' },
    { img: './Recurso 59.png', label: 'Materiales' },
    { img: './Recurso 58.png', label: 'Infraestructura' },
];

const Section4 = () => {
    return (
        <div className="mt-10">
            <h4 className="text-3xl text-center text-orange-400 font-bold mb-4">
                ¿QUÉ FINANCIAMOS?
            </h4>

            <div className="relative bg-green-700 py-4">
                {/* Fondo difuminado */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-800 to-transparent opacity-90 z-0" />

                {/* Grid de elementos */}
                <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-2">
                    {items.map((item, i) => (
                        <div
                            key={i}
                            className={`p-6 flex cursor-pointer flex-col items-center justify-center border-orange-300 relative transition-transform duration-300 hover:scale-105 ${i !== items.length - 1 ? 'border-r border-dotted' : ''
                                }`}
                        >
                            <img src={item.img} alt={item.label} className="h-18 mb-2 object-contain" />
                            <p className="text-orange-300 text-center font-medium">{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Section4;
